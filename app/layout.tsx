import type { Metadata } from 'next';
import { Archivo_Black } from 'next/font/google';
import './globals.css';

// "Archivo Black" es el fallback principal de Helvetica Neue Condensed Black.
const archivoBlack = Archivo_Black({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-archivo',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'MARIANA RODRIGUEZ',
  description: 'Portfolio de la artista y diseñadora Mariana Rodriguez.',
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className={archivoBlack.variable}>{children}</body>
    </html>
  );
}
