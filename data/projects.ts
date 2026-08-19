export interface Project {
  /** Nombre visible del proyecto (se muestra en mayúsculas) */
  name: string;
  /** Identificador único, coincide con la subcarpeta en /public/projects/ */
  slug: string;
  /** Descripción larga — se muestra recortada a 3 líneas con "View more" */
  description: string;
  /** Rutas de las imágenes del proyecto (la primera es la portada) */
  images: string[];
}

// Para reemplazar con el contenido real de la cliente:
// 1. Sube las imágenes a /public/projects/<slug>/
// 2. Actualiza name, description y el array images de cada entrada.
export const projects: Project[] = [
  {
    name: 'CICLO',
    slug: 'ciclo',
    description:
      'More than just a biodegradable soap store, Ciclo is conceived as a statement ' +
      'about space. From the moment you cross the entrance, the design creates an ' +
      'intuitive and fluid path, a continuous sequence that naturally guides you through ' +
      'the environment. There are no barriers here: the layout places human interaction ' +
      'at the center, inviting you to try the full range of products and stop as many ' +
      'times as you like. That same honesty found in biodegradability is reflected in the ' +
      'materials. The environment is defined by a raw, structural palette where textured ' +
      'concrete walls and the sleekness of steel coexist in perfect harmony, only to be ' +
      'unexpectedly disrupted by a vibrant blue floor that fills every step with energy. ' +
      'Ciclo does not seek to be a conventional store; it defines itself through the ' +
      'clarity of its materials, the fluidity of its layout, and, above all, the human experience.',
    images: [
      '/projects/ciclo/01.jpg',
      '/projects/ciclo/02.jpg',
      '/projects/ciclo/03.jpg',
      '/projects/ciclo/04.jpg',
      '/projects/ciclo/05.jpg',
      '/projects/ciclo/06.jpg',
      // Planos/láminas del PDF de presentación original (van al final)
      '/projects/ciclo/07.jpg',
      '/projects/ciclo/08.jpg',
      '/projects/ciclo/09.jpg',
      '/projects/ciclo/10.jpg',
    ],
  },
  {
    name: 'ALTER EGO',
    slug: 'alter-ego',
    description:
      'A room as the physical extension of a complex personality. This space explores ' +
      'our own contradictions: the serious and the playful, the ordered and the chaotic, ' +
      'the intellectual and the emotional. In Alter Ego, the different versions of a single ' +
      'self coexist. While the rawness of concrete embodies structure and control, color ' +
      'and the choice of furniture reveal a freer, more creative and emotional side. ' +
      'To give form to this duality, beyond the selected pieces, a series of bespoke, ' +
      'balloon-themed details was designed specifically for the space. These custom accents ' +
      'blend into the environment, subtly injecting that dose of play, lightness and fun ' +
      "that completes the person's identity.",
    images: [
      '/projects/alter-ego/01.jpg',
      '/projects/alter-ego/02.jpg',
      '/projects/alter-ego/03.jpg',
      '/projects/alter-ego/04.jpg',
      '/projects/alter-ego/05.jpg',
      '/projects/alter-ego/06.jpg',
      '/projects/alter-ego/07.jpg',
      '/projects/alter-ego/08.jpg',
      '/projects/alter-ego/09.jpg',
      '/projects/alter-ego/10.jpg',
      '/projects/alter-ego/11.jpg',
      '/projects/alter-ego/12.jpg',
      '/projects/alter-ego/13.jpg',
      '/projects/alter-ego/14.jpg',
      '/projects/alter-ego/15.jpg',
      '/projects/alter-ego/16.jpg',
      // Planos/láminas del PDF de presentación original (van al final)
      '/projects/alter-ego/17.jpg',
      '/projects/alter-ego/18.jpg',
      '/projects/alter-ego/19.jpg',
      '/projects/alter-ego/20.jpg',
      '/projects/alter-ego/21.jpg',
      '/projects/alter-ego/22.jpg',
      '/projects/alter-ego/23.jpg',
      '/projects/alter-ego/24.jpg',
    ],
  },
  {
    // Nombre visible "ENGRAM PROJECT"; el slug/carpeta sigue siendo "engrama".
    name: 'ENGRAM PROJECT',
    slug: 'engrama',
    description:
      'Since ancient times, humanity has sought to preserve memories against the passage ' +
      'of time. Unlike traditional time capsules designed to remain hidden, this collection ' +
      'offers a dynamic bridge between yesterday and tomorrow: an object designed to blend ' +
      'into everyday spaces and transcend time through the tangible value of physical ' +
      'photography. The experience begins when you interact with the briefcase. Conceived ' +
      'as a protective container, it safeguards a series of meaningful photographs that ' +
      'encapsulate fundamental experiences. The process is completed by taking out the ' +
      'printed photographs and placing them inside the integrated picture frame, ' +
      'transforming the object into a living piece displayed in everyday life. More than a ' +
      'visual display, the design creates a permanent point of connection with personal ' +
      'history within the living environment.',
    images: [
      '/projects/engrama/01.jpg',
      '/projects/engrama/02.jpg',
      '/projects/engrama/03.jpg',
      '/projects/engrama/04.jpg',
      '/projects/engrama/05.jpg',
      '/projects/engrama/06.jpg',
      '/projects/engrama/07.jpg',
      '/projects/engrama/08.jpg',
      '/projects/engrama/09.jpg',
      // Planos/láminas del PDF de presentación original (van al final)
      '/projects/engrama/10.jpg',
      '/projects/engrama/11.jpg',
      '/projects/engrama/12.jpg',
      '/projects/engrama/13.jpg',
    ],
  },
  {
    name: 'DARK',
    slug: 'dark',
    description:
      'It all begins with a healthy dose of envy between two master minds: Rem Koolhaas ' +
      'and Dario Argento. From that subtle tension arises a force that takes on a life of ' +
      'its own, eventually giving rise to an Entity. Bodiless yet surrounded by walls, ' +
      'this force transforms architecture and the language of cinema into a trap of ' +
      'surveillance and manipulation directed against its own inhabitants. Here, the house ' +
      'ceases to be a refuge and becomes a disorienting labyrinth. From the walls, the dark ' +
      'lenses of security cameras silently record every ounce of fear and anxiety. The ' +
      "Entity knows everything: it anticipates every move and uses its prey's own obsessions " +
      'as the script for their nightmare. To inhabit this space is to immerse oneself in a ' +
      'psychological horror film in real time. A journey through claustrophobic frames and ' +
      'treacherous shadows that serves as an inescapable path toward your own demise.',
    // Reorden pedido por el cliente: las imágenes 02, 03 y 04 van AL FINAL de la
    // secuencia (02→pos.25, 03→pos.24, 04→pos.23). NO tocar los nombres de archivo:
    // lo que manda es este orden del array. No "corregir" a orden numérico.
    // Además, esas tres (02/03/04) son justamente los PLANOS (PLANO BASE, cortes,
    // distribución CCTV), así que este orden también deja los planos al final.
    images: [
      '/projects/dark/01.jpg',
      '/projects/dark/05.jpg',
      '/projects/dark/06.jpg',
      '/projects/dark/07.jpg',
      '/projects/dark/08.jpg',
      '/projects/dark/09.jpg',
      '/projects/dark/10.jpg',
      '/projects/dark/11.jpg',
      '/projects/dark/12.jpg',
      '/projects/dark/13.jpg',
      '/projects/dark/14.jpg',
      '/projects/dark/15.jpg',
      '/projects/dark/16.jpg',
      '/projects/dark/17.jpg',
      '/projects/dark/18.jpg',
      '/projects/dark/19.jpg',
      '/projects/dark/20.jpg',
      '/projects/dark/21.jpg',
      '/projects/dark/22.jpg',
      '/projects/dark/23.jpg',
      '/projects/dark/24.jpg',
      '/projects/dark/25.jpg',
      '/projects/dark/04.jpg', // pos.23 (era 04)
      '/projects/dark/03.jpg', // pos.24 (era 03)
      '/projects/dark/02.jpg', // pos.25 (era 02)
    ],
  },
  {
    name: 'REWIND',
    slug: 'rewind',
    description:
      'In 1977, Studio 54 made history inside a former theater in Manhattan. Its founders, ' +
      'Steve Rubell and Ian Schrager, along with the design team of Scott Bromley and Ron ' +
      'Doud, transformed the stage into the dance floor itself, creating a legendary place ' +
      'of freedom and design. Taking this iconic legacy as a starting point, our project ' +
      'seeks to revive that vibrant atmosphere. The spatial proposal is developed around a ' +
      'theatrical aesthetic where wood, metallic finishes, and blue curtain textiles set ' +
      'the mood, integrated with the lighting and the presence of disco balls above the ' +
      'dance floor. More than a conventional bar, the venue is conceived as a space to ' +
      'disconnect from the outside world, enjoy live music, and offer a unique nightlife ' +
      'experience.',
    images: [
      '/projects/rewind/01.jpg',
      '/projects/rewind/02.jpg',
      '/projects/rewind/03.jpg',
      '/projects/rewind/04.jpg',
      '/projects/rewind/05.jpg',
      '/projects/rewind/06.jpg',
    ],
  },
];
