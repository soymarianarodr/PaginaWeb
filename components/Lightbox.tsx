'use client';

import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { motion } from 'framer-motion';
import styles from './Lightbox.module.css';

interface LightboxProps {
  images: string[];
  index: number;
  projectName: string;
  onNavigate: (index: number) => void;
  onClose: () => void;
}

export default function Lightbox({
  images,
  index,
  projectName,
  onNavigate,
  onClose,
}: LightboxProps) {
  const closeRef = useRef<HTMLButtonElement | null>(null);

  const prev = () => onNavigate((index - 1 + images.length) % images.length);
  const next = () => onNavigate((index + 1) % images.length);

  useEffect(() => {
    closeRef.current?.focus();
  }, []);

  // Sin array de deps a propósito: el handler debe capturar el index actual
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prev();
      if (e.key === 'ArrowRight') next();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });

  // Portal a <body>: la vista de detalle es un subárbol animado por Framer
  // Motion y un ancestro con transform se convertiría en el containing block
  // del overlay fixed, recortando los controles. En body, fixed = viewport.
  // El overlay solo anima opacity (nunca transform); el scale de entrada va
  // únicamente en el frame de la imagen.
  return createPortal(
    <motion.div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label={`Imágenes de ${projectName}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      onClick={onClose}
    >
      <motion.figure
        className={styles.frame}
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        transition={{ duration: 0.3 }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          key={images[index]}
          src={images[index]}
          alt={`${projectName} — imagen ${index + 1} de ${images.length}`}
        />
      </motion.figure>

      {/* Iconos SVG inline en lugar de caracteres: los glifos ‹ › de la
          Helvetica Neue Condensed Black miden ~12px y se dibujan como una
          astilla que parece una flecha cortada; el SVG es idéntico en
          cualquier máquina, sin depender de la fuente */}
      <button
        className={`${styles.control} ${styles.prev}`}
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Imagen anterior"
      >
        <svg viewBox="0 0 24 40" aria-hidden="true" focusable="false">
          <path
            d="M19 4 L6 20 L19 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        className={`${styles.control} ${styles.next}`}
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Imagen siguiente"
      >
        <svg viewBox="0 0 24 40" aria-hidden="true" focusable="false">
          <path
            d="M5 4 L18 20 L5 36"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
      <button
        ref={closeRef}
        className={`${styles.control} ${styles.close}`}
        onClick={(e) => {
          e.stopPropagation();
          onClose();
        }}
        aria-label="Cerrar visor de imágenes"
      >
        <svg viewBox="0 0 32 32" aria-hidden="true" focusable="false">
          <path
            d="M6 6 L26 26 M26 6 L6 26"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </motion.div>,
    document.body,
  );
}
