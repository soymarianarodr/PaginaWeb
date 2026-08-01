'use client';

import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import styles from './Header.module.css';

/** Tamaño base (px) al que se mide el ancho del texto del título */
const MEASURE_SIZE = 100;
/** 44pt del botón frente a 180pt del título en el mockup */
const BUTTON_RATIO = 44 / 180;

interface HeaderProps {
  label: 'CONTACT' | 'PROJECT';
  onNavClick: () => void;
}

// Encabezado fijo, montado UNA sola vez para todo el sitio: el título
// MARIANA RODRIGUEZ cubre exactamente el ancho útil (margen a margen) y es
// idéntico en home, detalle y contacto. El fit se recalcula solo en resize
// y al cargar la fuente, nunca al cambiar de vista.
export default function Header({ label, onNavClick }: HeaderProps) {
  const headerRef = useRef<HTMLElement | null>(null);
  const innerRef = useRef<HTMLDivElement | null>(null);
  const measureRef = useRef<HTMLSpanElement | null>(null);
  const [titleSize, setTitleSize] = useState<number | null>(null);

  // Fit-to-width: mide el texto a 100px con getBoundingClientRect y escala
  // el font-size por (ancho útil / ancho medido).
  const fit = useCallback(() => {
    const measure = measureRef.current;
    const inner = innerRef.current;
    if (!measure || !inner) return;
    const textWidth = measure.getBoundingClientRect().width;
    const available = inner.getBoundingClientRect().width;
    if (textWidth > 0 && available > 0) {
      setTitleSize(MEASURE_SIZE * (available / textWidth));
    }
  }, []);

  useLayoutEffect(() => {
    fit();
    window.addEventListener('resize', fit);
    document.fonts?.ready.then(fit).catch(() => {});
    // re-mide cuando cualquier fuente (p. ej. la woff2 propia) termina de cargar
    document.fonts?.addEventListener('loadingdone', fit);
    return () => {
      window.removeEventListener('resize', fit);
      document.fonts?.removeEventListener('loadingdone', fit);
    };
  }, [fit]);

  // Publica la altura real del encabezado como --header-h para que el
  // contenido reserve exactamente ese espacio.
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const observer = new ResizeObserver(() => {
      document.documentElement.style.setProperty(
        '--header-h',
        `${el.offsetHeight}px`,
      );
    });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <header ref={headerRef} className={styles.header}>
      <div ref={innerRef} className={styles.inner}>
        {/* Medidor oculto: mismo texto, fuente y tracking a 100px fijos */}
        <span ref={measureRef} className={styles.measure} aria-hidden="true">
          MARIANA RODRIGUEZ
        </span>

        <h1
          className={styles.title}
          style={titleSize ? { fontSize: `${titleSize}px` } : undefined}
        >
          MARIANA RODRIGUEZ
        </h1>

        {/* Botón contextual DEBAJO del título, alineado al margen izquierdo */}
        <AnimatePresence mode="wait" initial={false}>
          <motion.button
            key={label}
            className={styles.navButton}
            style={
              titleSize
                ? { fontSize: `${titleSize * BUTTON_RATIO}px` }
                : undefined
            }
            onClick={onNavClick}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-label={
              label === 'CONTACT'
                ? 'Ir a la sección de contacto'
                : 'Volver a la galería de proyectos'
            }
          >
            {label}
          </motion.button>
        </AnimatePresence>
      </div>
    </header>
  );
}
