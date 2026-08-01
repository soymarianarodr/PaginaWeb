'use client';

import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { projects, type Project } from '@/data/projects';
import styles from './Carousel.module.css';

// Velocidades en px/s: BASE con el cursor en el centro; RANGE es lo que
// aporta el cursor hacia los extremos (derecha acelera, izquierda invierte).
const BASE_SPEED = 55;
const SPEED_RANGE = 520;
const CLICK_TOLERANCE = 8; // px de arrastre a partir de los cuales no cuenta como clic

interface CarouselProps {
  onSelect: (project: Project, layoutId: string) => void;
}

export default function Carousel({ onSelect }: CarouselProps) {
  const viewportRef = useRef<HTMLDivElement | null>(null);
  const trackRef = useRef<HTMLDivElement | null>(null);
  const offset = useRef(0);
  const speed = useRef(BASE_SPEED);
  const target = useRef(BASE_SPEED);
  const dragging = useRef(false);
  const dragMoved = useRef(0);
  const lastPointerX = useRef(0);
  const lastMoveTime = useRef(0);

  // Bucle rAF: velocidad dinámica (imposible con animación CSS pura).
  // El track está duplicado; al superar el ancho de una copia, el offset
  // se envuelve módulo ese ancho y el salto es invisible.
  useEffect(() => {
    let raf = 0;
    let last = performance.now();

    const loop = (now: number) => {
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;

      if (!dragging.current) {
        speed.current += (target.current - speed.current) * Math.min(1, dt * 4);
        offset.current += speed.current * dt;
      }

      const track = trackRef.current;
      if (track && track.children.length >= projects.length + 1) {
        const first = track.children[0] as HTMLElement;
        const secondCopy = track.children[projects.length] as HTMLElement;
        const copyWidth = secondCopy.offsetLeft - first.offsetLeft;
        if (copyWidth > 0) {
          offset.current = ((offset.current % copyWidth) + copyWidth) % copyWidth;
          track.style.transform = `translate3d(${-offset.current}px, 0, 0)`;
        }
      }
      raf = requestAnimationFrame(loop);
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    const vp = viewportRef.current;
    if (!vp) return;
    const rect = vp.getBoundingClientRect();
    const norm = ((e.clientX - rect.left) / rect.width - 0.5) * 2; // -1 … 1
    target.current = BASE_SPEED + norm * SPEED_RANGE;
  };

  const handleMouseLeave = () => {
    target.current = BASE_SPEED;
  };

  // Swipe táctil: mientras se arrastra, el offset sigue al dedo; al soltar,
  // la velocidad del último gesto queda como impulso y decae hacia la base.
  const handlePointerDown = (e: React.PointerEvent) => {
    if (e.pointerType === 'mouse') return;
    dragging.current = true;
    dragMoved.current = 0;
    lastPointerX.current = e.clientX;
    lastMoveTime.current = performance.now();
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const dx = e.clientX - lastPointerX.current;
    lastPointerX.current = e.clientX;
    dragMoved.current += Math.abs(dx);
    offset.current -= dx;

    const now = performance.now();
    const dt = (now - lastMoveTime.current) / 1000;
    lastMoveTime.current = now;
    if (dt > 0) speed.current = -dx / dt;
  };

  const handlePointerUp = () => {
    dragging.current = false;
    target.current = BASE_SPEED;
  };

  return (
    <div
      ref={viewportRef}
      className={styles.viewport}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <div ref={trackRef} className={styles.track}>
        {[0, 1].map((copy) =>
          projects.map((project) => {
            const layoutId = `card-${project.slug}-${copy}`;
            return (
              <button
                key={layoutId}
                className={styles.card}
                onClick={() => {
                  if (dragMoved.current > CLICK_TOLERANCE) return;
                  onSelect(project, layoutId);
                }}
                aria-label={`Abrir proyecto ${project.name}`}
                aria-hidden={copy === 1 || undefined}
                tabIndex={copy === 1 ? -1 : 0}
              >
                <motion.div layoutId={layoutId} className={styles.cardMedia}>
                  {/* <img> en lugar de next/image: el track se transforma en
                      cada frame y el loop necesita anchos estables desde el
                      primer render */}
                  <img
                    src={project.images[0]}
                    alt={project.name}
                    draggable={false}
                  />
                </motion.div>
              </button>
            );
          }),
        )}
      </div>
    </div>
  );
}
