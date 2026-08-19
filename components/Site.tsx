'use client';

import { useCallback, useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import Header from './Header';
import Carousel from './Carousel';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import MobileMain from './MobileMain';
import useIsMobile from './useIsMobile';
import styles from './Site.module.css';

// Tres vistas intercambiadas por estado; el contacto NO es una sección
// scrolleable: solo se llega con el botón CONTACT.
type View =
  | { kind: 'home' }
  | { kind: 'contact' }
  | { kind: 'project'; project: Project; layoutId: string };

export default function Site() {
  const isMobile = useIsMobile();
  const [view, setView] = useState<View>({ kind: 'home' });

  // home → CONTACT (abre contacto); proyecto/contacto → PROJECT (galería).
  // La misma semántica sirve en móvil: desde el modal, PROJECT lo cierra.
  const navLabel: 'CONTACT' | 'PROJECT' =
    view.kind === 'home' ? 'CONTACT' : 'PROJECT';

  const handleNav = useCallback(() => {
    setView((v) => (v.kind === 'home' ? { kind: 'contact' } : { kind: 'home' }));
  }, []);

  const openProject = useCallback((project: Project, layoutId: string) => {
    setView({ kind: 'project', project, layoutId });
  }, []);

  const closeProject = useCallback(() => setView({ kind: 'home' }), []);

  // Reset de scroll SOLO en desktop (cada vista arranca desde arriba). En
  // móvil el feed conserva su posición: el modal bloquea/restaura el scroll
  // por su cuenta (ver MobileMain).
  useEffect(() => {
    if (isMobile !== false) return;
    window.scrollTo({ top: 0 });
  }, [view, isMobile]);

  return (
    <div className={styles.site}>
      <Header label={navLabel} onNavClick={handleNav} />

      <main className={styles.main}>
        {isMobile === null ? null : isMobile ? (
          <MobileMain
            view={view}
            onSelect={(project) => openProject(project, `mobile-${project.slug}`)}
            onCloseProject={closeProject}
          />
        ) : (
          <AnimatePresence mode="popLayout">
            {view.kind === 'project' ? (
              <ProjectDetail
                key={`detail-${view.project.slug}`}
                project={view.project}
                layoutId={view.layoutId}
              />
            ) : view.kind === 'contact' ? (
              <motion.div
                key="contact"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <Contact />
              </motion.div>
            ) : (
              <motion.div
                key="home"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.35 }}
              >
                <section className={styles.gallery} aria-label="Proyectos">
                  <Carousel onSelect={openProject} />
                </section>
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </main>
    </div>
  );
}
