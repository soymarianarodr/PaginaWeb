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
    name: 'AURORA',
    slug: 'aurora',
    description:
      'Aurora es una serie editorial que explora la luz como materia narrativa. ' +
      'Cada pieza parte de fotografías de larga exposición intervenidas digitalmente, ' +
      'construyendo atmósferas que oscilan entre lo documental y lo onírico. ' +
      'El proyecto se desarrolló durante seis meses e incluye dirección de arte, ' +
      'diseño de la publicación impresa y una instalación lumínica presentada en Caracas. ' +
      'La paleta reducida y la tipografía condensada refuerzan la tensión entre silencio y estallido.',
    images: [
      '/projects/aurora/01.svg',
      '/projects/aurora/02.svg',
      '/projects/aurora/03.svg',
    ],
  },
  {
    name: 'BRUTAL',
    slug: 'brutal',
    description:
      'Brutal es un sistema de identidad para un colectivo de arquitectura emergente. ' +
      'El lenguaje visual toma prestada la crudeza del hormigón: tipografías pesadas, ' +
      'retículas expuestas y un blanco y negro sin concesiones. ' +
      'El sistema abarca papelería, señalética, plantillas editoriales y presencia digital, ' +
      'todo articulado sobre una única familia tipográfica condensada. ' +
      'La identidad fue reconocida con una mención en la bienal regional de diseño.',
    images: [
      '/projects/brutal/01.svg',
      '/projects/brutal/02.svg',
      '/projects/brutal/03.svg',
    ],
  },
  {
    name: 'CROMA',
    slug: 'croma',
    description:
      'Croma es una investigación visual sobre el color como territorio emocional. ' +
      'A través de collages digitales y pintura escaneada, la serie construye paisajes ' +
      'abstractos donde cada tono funciona como personaje. ' +
      'El proyecto incluyó la dirección de arte de una campaña para una marca textil ' +
      'y una serie limitada de impresiones giclée. ' +
      'Las piezas dialogan entre lo táctil y lo digital, borrando la frontera entre ambos.',
    images: [
      '/projects/croma/01.svg',
      '/projects/croma/02.svg',
      '/projects/croma/03.svg',
    ],
  },
  {
    name: 'DUNAS',
    slug: 'dunas',
    description:
      'Dunas es un ensayo fotográfico realizado en los médanos de Coro. ' +
      'La serie documenta la geometría cambiante de la arena y su relación con el cuerpo humano, ' +
      'trabajando con luz natural en los extremos del día. ' +
      'El resultado es un conjunto de imágenes casi monocromas donde la escala se vuelve ambigua: ' +
      'lo mínimo parece monumental y lo monumental, íntimo. ' +
      'El proyecto fue publicado como fotolibro autoeditado de 96 páginas.',
    images: [
      '/projects/dunas/01.svg',
      '/projects/dunas/02.svg',
      '/projects/dunas/03.svg',
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
