'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import styles from './ProjectModal.module.css';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

// Detalle de proyecto en móvil: modal a pantalla completa por encima del feed.
// El header global sigue visible arriba (mayor z-index); aquí el contenido
// scrollea verticalmente y las imágenes se recorren con swipe horizontal
// (scroll-snap nativo, sin dependencias nuevas).
export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement | null>(null);

  // Índice activo = slide más cercano al centro del visor
  const handleScroll = () => {
    const el = sliderRef.current;
    if (!el || !el.clientWidth) return;
    const i = Math.round(el.scrollLeft / el.clientWidth);
    if (i !== index) setIndex(i);
  };

  return (
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Proyecto ${project.name}`}
      initial={{ y: '100%' }}
      animate={{ y: 0 }}
      exit={{ y: '100%' }}
      transition={{ duration: 0.35, ease: [0.25, 0.8, 0.25, 1] }}
    >
      <div className={styles.scroll}>
        <button className={styles.close} onClick={onClose} aria-label="Cerrar proyecto">
          (close)
        </button>

        <h2 className={styles.name}>{project.name}</h2>

        <div
          ref={sliderRef}
          className={styles.slider}
          onScroll={handleScroll}
          aria-label={`Imágenes de ${project.name}`}
        >
          {project.images.map((src, i) => (
            <figure className={styles.slide} key={src}>
              <img
                src={src}
                alt={`${project.name} — imagen ${i + 1} de ${project.images.length}`}
                draggable={false}
              />
            </figure>
          ))}
        </div>

        <p className={styles.counter} aria-live="polite">
          {index + 1} / {project.images.length}
        </p>

        <p className={styles.description}>{project.description}</p>
      </div>
    </motion.div>
  );
}
