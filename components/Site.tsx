'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import type { Project } from '@/data/projects';
import Header from './Header';
import Carousel from './Carousel';
import ProjectDetail from './ProjectDetail';
import Contact from './Contact';
import styles from './Site.module.css';

interface Selection {
  project: Project;
  /** layoutId de la tarjeta clickeada, para la expansión compartida */
  layoutId: string;
}

export default function Site() {
  const [selection, setSelection] = useState<Selection | null>(null);
  const [contactInView, setContactInView] = useState(false);
  const contactRef = useRef<HTMLElement | null>(null);
  const savedScroll = useRef(0);

  // El botón muestra PROJECT en la vista de proyecto y en la sección de
  // contacto; CONTACT en el resto de la home.
  const navLabel: 'CONTACT' | 'PROJECT' =
    selection || contactInView ? 'PROJECT' : 'CONTACT';

  const handleNav = useCallback(() => {
    if (selection) {
      setSelection(null);
      return;
    }
    if (contactInView) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      contactRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [selection, contactInView]);

  // Detecta cuándo la sección de contacto domina el viewport
  useEffect(() => {
    if (selection) return;
    const el = contactRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => setContactInView(entry.isIntersecting),
      { threshold: 0.45 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [selection]);

  // Al abrir un proyecto se guarda el scroll y se sube al inicio;
  // al volver a la galería se restaura.
  const openProject = useCallback((project: Project, layoutId: string) => {
    savedScroll.current = window.scrollY;
    setSelection({ project, layoutId });
    window.scrollTo({ top: 0 });
  }, []);

  useEffect(() => {
    if (!selection) {
      window.scrollTo({ top: savedScroll.current });
    }
  }, [selection]);

  return (
    <div className={styles.site}>
      <Header label={navLabel} onNavClick={handleNav} />

      <main className={styles.main}>
        <AnimatePresence>
          {selection ? (
            <ProjectDetail
              key={`detail-${selection.project.slug}`}
              project={selection.project}
              layoutId={selection.layoutId}
            />
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
              <Contact ref={contactRef} />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </div>
  );
}
