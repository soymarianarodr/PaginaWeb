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
    // TODO: descripción provisional — el cliente enviará el texto final.
    description:
      'Ciclo es el concepto para una tienda de jabones biodegradables, ' +
      'donde el diseño del espacio acompaña una propuesta consciente con el entorno.',
    images: [
      '/projects/ciclo/01.jpg',
      '/projects/ciclo/02.jpg',
      '/projects/ciclo/03.jpg',
      '/projects/ciclo/04.jpg',
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
    // TODO: descripción provisional — el cliente enviará el texto final.
    description:
      'Engrama es un objeto-cápsula pensado para guardar memorias fotográficas, ' +
      'un dispositivo que convierte los recuerdos en una pieza física para conservar y revisitar.',
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
    images: [
      '/projects/dark/01.jpg',
      '/projects/dark/02.jpg',
      '/projects/dark/03.jpg',
      '/projects/dark/04.jpg',
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
