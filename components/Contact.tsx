'use client';

import { forwardRef } from 'react';
import styles from './Contact.module.css';

// Última sección del sitio; se llega con scroll suave desde el botón CONTACT.
const Contact = forwardRef<HTMLElement>(function Contact(_props, ref) {
  return (
    <section ref={ref} id="contact" className={styles.contact} aria-label="Contacto">
      <a
        className={styles.email}
        href="mailto:MARIANACRODRIGUEZ@GMAIL.COM"
        aria-label="Enviar correo a Mariana Rodriguez"
      >
        MARIANACRODRIGUEZ@GMAIL.COM
      </a>
      <p className={styles.alias}>MARIROXX..</p>
    </section>
  );
});

export default Contact;
