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
    ],
  },
  {
    name: 'ALTER EGO',
    slug: 'alter-ego',
    description:
      'Una habitación como la extensión física de una personalidad compleja. ' +
      'Este espacio explora nuestras propias contradicciones: lo serio y lo divertido, ' +
      'lo ordenado y lo caótico, lo intelectual y lo emocional. ' +
      'En Alter Ego conviven las distintas versiones de un mismo ser. ' +
      'Mientras la crudeza del hormigón representa la estructura y el control, ' +
      'el color y la selección de piezas de mobiliario revelan un lado más libre, creativo y emocional. ' +
      'Para materializar esta dualidad, además de las piezas elegidas, ' +
      'se diseñaron específicamente una serie de detalles a medida con temática de globos. ' +
      'Estos acentos personalizados se integran al entorno inyectando de forma sutil ' +
      'esa dosis de juego, ligereza y diversión que completa la identidad de la persona.',
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
    ],
  },
  {
    name: 'ENGRAMA',
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
    ],
  },
  {
    name: 'DARK',
    slug: 'dark',
    // TODO: descripción provisional — el cliente enviará el texto final.
    description:
      'Dark es un proyecto de diseño de espacio de atmósfera oscura y envolvente. ' +
      'Texto provisional a la espera del contenido definitivo del cliente.',
    // Reorden pedido por el cliente: las imágenes 02, 03 y 04 van AL FINAL de la
    // secuencia (02→pos.25, 03→pos.24, 04→pos.23). NO tocar los nombres de archivo:
    // lo que manda es este orden del array. No "corregir" a orden numérico.
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
    name: 'ÉTER',
    slug: 'eter',
    description:
      'Éter es una serie de ilustraciones digitales sobre estados intermedios: ' +
      'el sueño, la espera, la distancia. ' +
      'Figuras suspendidas en espacios vacíos, trazadas con línea mínima y grandes campos de negro. ' +
      'La serie nació como ejercicio diario durante un año y terminó convertida en ' +
      'una exposición individual y una colaboración con una revista literaria. ' +
      'Cada pieza se acompaña de un fragmento de texto escrito por la artista.',
    images: [
      '/projects/eter/01.svg',
      '/projects/eter/02.svg',
      '/projects/eter/03.svg',
    ],
  },
  {
    name: 'FLUX',
    slug: 'flux',
    description:
      'Flux es un proyecto de motion design y dirección de arte para música electrónica. ' +
      'Visuales generativos en tiempo real que responden al audio, proyectados en vivo ' +
      'en festivales y salas de la escena local. ' +
      'El sistema combina tipografía en movimiento, glitch controlado y geometría reactiva, ' +
      'manteniendo el negro como espacio escénico permanente. ' +
      'Incluye además la identidad visual completa de la serie de eventos.',
    images: [
      '/projects/flux/01.svg',
      '/projects/flux/02.svg',
      '/projects/flux/03.svg',
    ],
  },
];
