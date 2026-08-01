'use client';

import { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import Lightbox from './Lightbox';
import styles from './ProjectDetail.module.css';

interface ProjectDetailProps {
  project: Project;
  /** layoutId de la tarjeta de origen: la imagen "crece" desde el carrusel */
  layoutId: string;
}

export default function ProjectDetail({ project, layoutId }: ProjectDetailProps) {
  const [expanded, setExpanded] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <motion.section
      className={styles.detail}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      aria-label={`Proyecto ${project.name}`}
    >
      {/* Clic en la imagen: abre el lightbox; si el texto está expandido,
          el clic fuera del bloque de texto lo colapsa primero */}
      <div
        className={styles.hero}
        onClick={() => (expanded ? setExpanded(false) : setLightboxIndex(0))}
      >
        <motion.div
          layoutId={layoutId}
          className={`${styles.heroMedia} ${expanded ? styles.heroDimmed : ''}`}
        >
          <Image
            src={project.images[0]}
            alt={`${project.name} — imagen principal`}
            fill
            priority
            sizes="100vw"
            className={styles.heroImg}
          />
        </motion.div>

        {/* Nombre y descripción comparten contenedor animado: al expandir,
            el bloque crece hacia arriba y ambos se desplazan juntos */}
        <motion.div
          layout
          className={styles.textBlock}
          transition={{ layout: { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] } }}
          onClick={(e) => e.stopPropagation()}
        >
          <motion.h2 layout="position" className={styles.projectName}>
            {project.name}
          </motion.h2>
          <motion.p
            layout
            className={`${styles.description} ${expanded ? '' : styles.clamped}`}
          >
            {project.description}
          </motion.p>
          <motion.button
            layout="position"
            className={styles.viewMore}
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            aria-label={
              expanded ? 'Mostrar menos descripción' : 'Mostrar descripción completa'
            }
          >
            {expanded ? 'View less' : '…View more'}
          </motion.button>
        </motion.div>
      </div>

      <div className={styles.thumbs}>
        {project.images.map((src, i) => (
          <button
            key={src}
            className={styles.thumb}
            onClick={() => setLightboxIndex(i)}
            aria-label={`Ampliar imagen ${i + 1} de ${project.name}`}
          >
            <img src={src} alt="" draggable={false} />
          </button>
        ))}
      </div>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            images={project.images}
            index={lightboxIndex}
            projectName={project.name}
            onNavigate={setLightboxIndex}
            onClose={() => setLightboxIndex(null)}
          />
        )}
      </AnimatePresence>
    </motion.section>
  );
}
