'use client';

import { useEffect, useState } from 'react';

/**
 * Devuelve si el viewport es móvil (≤768px por defecto).
 * - `null` en el primer render (servidor y primer paint cliente): evita
 *   montar el árbol equivocado y previene mismatch de hidratación.
 * - Tras montar, refleja el estado real y se actualiza en cada cambio de
 *   breakpoint. Se usa para NO montar el Carousel (ni su bucle rAF) en móvil.
 */
export default function useIsMobile(query = '(max-width: 768px)'): boolean | null {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mql = window.matchMedia(query);
    const update = () => setIsMobile(mql.matches);
    update();
    mql.addEventListener('change', update);
    return () => mql.removeEventListener('change', update);
  }, [query]);

  return isMobile;
}
