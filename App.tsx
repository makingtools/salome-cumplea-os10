import React from 'react';
import AnimatedHeader from './components/AnimatedHeader';
import CountdownTimer from './components/CountdownTimer';
import PartyDetails from './components/PartyDetails';
import LocationMap from './components/LocationMap';
import PhotoGallery from './components/PhotoGallery';
import RsvpButton from './components/RsvpButton';
import FooterMessage from './components/FooterMessage';
import { PARTY_DETAILS, PHOTO_GALLERY_IMAGES, HEADER_BACKGROUND_IMAGE } from './constants';

const App: React.FC = () => {
  const videoId = 'TKaUuyE4BTw';
  // Opciones: autoplay=1 (reproducción automática), loop=1 (bucle), playlist=${videoId} (necesario para el bucle), controls=0 (ocultar controles)
  const musicUrl = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&showinfo=0&iv_load_policy=3`;

  return (
    <div className="bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white min-h-screen overflow-x-hidden">
      {/* Reproductor de YouTube oculto para la música de fondo */}
      <iframe
        title="Música de fondo de la invitación"
        style={{ position: 'absolute', top: '-9999px', left: '-9999px', width: '1px', height: '1px', border: 'none' }}
        src={musicUrl}
        allow="autoplay; encrypted-media"
        allowFullScreen={false}
      ></iframe>

      <AnimatedHeader name="Emmy" backgroundImage={HEADER_BACKGROUND_IMAGE} />

      <main className="container mx-auto px-6 py-12 md:py-20 space-y-16 md:space-y-24">
        <section id="details" className="animate-fadeInUp" style={{ animationDelay: '3.5s' }}>
            <h2 className="text-4xl md:text-5xl font-pacifico text-center text-pink-300 mb-8">
              ¡Una Celebración Mágica!
            </h2>
            <PartyDetails details={PARTY_DETAILS} />
        </section>

        <section id="countdown" className="animate-fadeInUp" style={{ animationDelay: '3.7s' }}>
            <CountdownTimer targetDate={PARTY_DETAILS.date} />
        </section>

        <section id="rsvp" className="text-center animate-zoomIn" style={{ animationDelay: '3.9s' }}>
            <RsvpButton />
        </section>

        <section id="gallery" className="animate-fadeInUp" style={{ animationDelay: '4.1s' }}>
            <h2 className="text-4xl md:text-5xl font-pacifico text-center text-pink-300 mb-12">
              Momentos Especiales
            </h2>
            <PhotoGallery images={PHOTO_GALLERY_IMAGES} />
        </section>

        <section id="location" className="animate-fadeInUp" style={{ animationDelay: '4.3s' }}>
            <h2 className="text-4xl md:text-5xl font-pacifico text-center text-pink-300 mb-12">
              ¿Cómo llegar?
            </h2>
            <LocationMap address={PARTY_DETAILS.location.address} />
        </section>
      </main>

      <FooterMessage />
    </div>
  );
};

export default App;