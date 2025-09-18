import type { PartyDetailsType } from './types';

export const PARTY_DETAILS: PartyDetailsType = {
  who: 'Emmy Salome Luna Figueroa',
  what: 'Su 10º Cumpleaños',
  when: 'Sábado, 20 de Septiembre de 2025',
  time: '3:00 PM',
  date: new Date('2025-09-20T15:00:00'),
  location: {
    name: 'Salón de Eventos',
    address: 'Cl. 64c # 113C-70 casa 14, Bogotá, Colombia'
  }
};

const WHATSAPP_PHONE_NUMBER = '573142708761';
const WHATSAPP_MESSAGE = `¡Hola! Confirmo con alegría mi asistencia al cumpleaños número 10 de Emmy. ¡Allí estaremos para celebrar!`;
export const RSVP_WHATSAPP_LINK = `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`;

// --- Rutas de Imágenes Locales ---

// Imagen principal del banner.
// Coloca tu imagen en la carpeta 'assets/images/' y asegúrate de que el nombre coincida.
export const HEADER_BACKGROUND_IMAGE = './assets/images/banner.jpg';

// Lista de imágenes para la galería "Momentos Especiales".
// Coloca tus imágenes en 'assets/images/gallery/' y actualiza los nombres aquí.
export const PHOTO_GALLERY_IMAGES = [
  './assets/images/gallery/foto1.jpg',
  './assets/images/gallery/foto2.jpg',
  './assets/images/gallery/foto3.jpg',
  './assets/images/gallery/foto4.jpg',
  './assets/images/gallery/foto5.jpg',
  './assets/images/gallery/foto6.jpg',
];
