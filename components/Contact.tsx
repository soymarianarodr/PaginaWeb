'use client';

import styles from './Contact.module.css';

// Vista independiente: se muestra solo al pulsar CONTACT (nunca por scroll).
export default function Contact() {
  return (
    <section className={styles.contact} aria-label="Contacto">
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
}
