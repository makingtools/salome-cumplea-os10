import React, { useState, useEffect } from 'react';

// Componente de Confeti mejorado para crear "ráfagas" de partículas.
const Confetti: React.FC = () => {
    const confettiCount = 100; // Aumentado para un mejor efecto de ráfaga
    const colors = ['#f781bf', '#fcd34d', '#86efac', '#93c5fd', '#c4b5fd']; // Rosa, Amarillo, Verde, Azul, Púrpura

    return (
        <>
            {Array.from({ length: confettiCount }).map((_, i) => {
                const size = Math.random() * 10 + 5; // 5px a 15px
                const style: React.CSSProperties = {
                    left: `${Math.random() * 100}%`,
                    width: `${size}px`,
                    height: `${size}px`,
                    backgroundColor: colors[Math.floor(Math.random() * colors.length)],
                    borderRadius: Math.random() > 0.5 ? '50%' : '2px',
                    animationName: 'confetti-fall',
                    animationTimingFunction: 'ease-out',
                    animationIterationCount: 1, // La animación se ejecuta solo una vez por partícula
                    animationFillMode: 'forwards', // Mantiene el estado final (invisible)
                    animationDuration: `${Math.random() * 3 + 5}s`, // Duración de 5s a 8s
                    animationDelay: `${Math.random() * 1.5}s`, // Inicio escalonado dentro de 1.5s para un efecto de ráfaga
                };
                return <div key={i} className="confetti-particle" style={style} />;
            })}
        </>
    );
};


interface AnimatedHeaderProps {
  name: string;
  backgroundImage: string;
}

const AnimatedHeader: React.FC<AnimatedHeaderProps> = ({ name, backgroundImage }) => {
  // Se usa un contador (key) para forzar el re-renderizado del componente Confetti, creando así ráfagas.
  const [burstKey, setBurstKey] = useState(0);

  useEffect(() => {
    // Ráfaga inicial después de que las animaciones del encabezado se completen
    const initialTimer = setTimeout(() => {
      setBurstKey(key => key + 1);
    }, 3800); 

    // Ráfagas subsecuentes periódicamente
    const interval = setInterval(() => {
      setBurstKey(key => key + 1);
    }, 12000); // Nueva ráfaga cada 12 segundos

    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, []);

  // Array de configuraciones de destellos
  const sparkles = [
    { top: '20%', left: '15%', width: '8px', height: '8px', animationDuration: '3s', animationDelay: '0s' },
    { top: '30%', left: '80%', width: '12px', height: '12px', animationDuration: '4s', animationDelay: '0.5s' },
    { top: '85%', left: '10%', width: '6px', height: '6px', animationDuration: '2.5s', animationDelay: '1s' },
    { top: '75%', left: '90%', width: '10px', height: '10px', animationDuration: '3.5s', animationDelay: '1.5s' },
    { top: '50%', left: '50%', width: '8px', height: '8px', animationDuration: '3s', animationDelay: '2s' },
    { top: '10%', left: '40%', width: '6px', height: '6px', animationDuration: '4.5s', animationDelay: '2.5s' },
    { top: '60%', left: '25%', width: '10px', height: '10px', animationDuration: '2.8s', animationDelay: '0.2s' },
  ];

  return (
    <header className="h-screen flex flex-col items-center justify-center text-center relative overflow-hidden p-4">
      {/* Imagen de fondo del banner */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      ></div>
      {/* Superposición oscura para legibilidad */}
      <div className="absolute inset-0 bg-black opacity-50"></div>
      
      {/* Capa de Confeti */}
      <div className="absolute inset-0 pointer-events-none">
        {/* La 'key' es crucial. Al cambiarla, React desmonta el componente Confetti
            anterior y monta uno nuevo, reiniciando las animaciones para todas las partículas. */}
        {burstKey > 0 && <Confetti key={burstKey} />}
      </div>

      {/* Efecto de Partículas */}
      {sparkles.map((style, index) => (
        <div
          key={index}
          className="sparkle-particle bg-yellow-200"
          style={{ ...style }}
        />
      ))}
      
      <div className="z-10">
        <h2 className="text-3xl md:text-5xl text-gray-200 animate-fadeInUp" style={{ animationDelay: '0.5s' }}>
          ¡Estás invitado a celebrar!
        </h2>
        <h1 className="text-7xl md:text-9xl font-pacifico my-4 text-white animate-zoomIn animate-shimmer" style={{ animationDelay: '1.5s' }}>
          {name}
        </h1>
        <p className="text-4xl md:text-6xl text-yellow-300 font-bold animate-fadeInUp animate-shimmer" style={{ animationDelay: '2.5s' }}>
          Mis 10 Años
        </p>
      </div>
      <div className="absolute bottom-10 animate-fadeIn" style={{ animationDelay: '4s' }}>
        <svg className="w-8 h-8 text-white animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </header>
  );
};

export default AnimatedHeader;