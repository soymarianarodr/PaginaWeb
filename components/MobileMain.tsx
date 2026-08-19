'use client';

import { useEffect, useRef } from 'react';
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import Contact from './Contact';
import ProjectModal from './ProjectModal';
import styles from './MobileMain.module.css';

type View =
  | { kind: 'home' }
  | { kind: 'contact' }
  | { kind: 'project'; project: Project; layoutId: string };

interface MobileMainProps {
  view: View;
  onSelect: (project: Project) => void;
  onCloseProject: () => void;
}

// Tarjeta del feed con animación scale & fade ligada al scroll: crece y se
// opaca al acercarse al centro del viewport, encoge al alejarse. Se usan
// MotionValues (no re-render) para que corra en el compositor a 60fps.
function FeedCard({
  project,
  onSelect,
}: {
  project: Project;
  onSelect: (project: Project) => void;
}) {
  const ref = useRef<HTMLButtonElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  // Meseta central: la tarjeta pasa buena parte del recorrido a tamaño pleno
  // y solo encoge cerca de los bordes del viewport.
  const scale = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.88, 1, 1, 0.88]);
  const opacity = useTransform(scrollYProgress, [0, 0.35, 0.65, 1], [0.7, 1, 1, 0.7]);

  return (
    <motion.button
      ref={ref}
      className={styles.card}
      style={{ scale, opacity, willChange: 'transform' }}
      onClick={() => onSelect(project)}
      aria-label={`Abrir proyecto ${project.name}`}
    >
      <span className={styles.media}>
        <img src={project.images[0]} alt={project.name} draggable={false} />
      </span>
      <span className={styles.name}>{project.name}</span>
    </motion.button>
  );
}

export default function MobileMain({
  view,
  onSelect,
  onCloseProject,
}: MobileMainProps) {
  const modalOpen = view.kind === 'project';

  // Bloqueo de scroll de fondo robusto para iOS: se fija el body en su
  // posición actual y, al cerrar, se restaura EXACTAMENTE el scroll del feed.
  useEffect(() => {
    if (!modalOpen) return;
    const y = window.scrollY;
    const { body } = document;
    const prev = {
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };
    body.style.position = 'fixed';
    body.style.top = `-${y}px`;
    body.style.left = '0';
    body.style.right = '0';
    body.style.width = '100%';
    return () => {
      body.style.position = prev.position;
      body.style.top = prev.top;
      body.style.left = prev.left;
      body.style.right = prev.right;
      body.style.width = prev.width;
      window.scrollTo(0, y);
    };
  }, [modalOpen]);

  // La vista de contacto arranca desde arriba (no scrollea)
  useEffect(() => {
    if (view.kind === 'contact') window.scrollTo(0, 0);
  }, [view.kind]);

  return (
    <>
      {/* El feed permanece montado en home y en project (para conservar su
          posición de scroll bajo el modal); solo se desmonta en contacto. */}
      {view.kind !== 'contact' && (
        <div className={styles.feed}>
          {projects.map((project) => (
            <FeedCard key={project.slug} project={project} onSelect={onSelect} />
          ))}
        </div>
      )}

      {view.kind === 'contact' && <Contact />}

      <AnimatePresence>
        {view.kind === 'project' && (
          <ProjectModal
            key={`modal-${view.project.slug}`}
            project={view.project}
            onClose={onCloseProject}
          />
        )}
      </AnimatePresence>
    </>
  );
}
