
import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate: Date;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        días: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const timerComponents = Object.entries(timeLeft).map(([interval, value]) => {
    if (value === undefined) return null;
    return (
      <div key={interval} className="flex flex-col items-center justify-center bg-white/10 backdrop-blur-md rounded-2xl w-28 h-28 md:w-36 md:h-36 shadow-lg">
        <span className="text-4xl md:text-6xl font-bold text-yellow-300">{String(value).padStart(2, '0')}</span>
        <span className="text-sm md:text-lg uppercase tracking-wider text-gray-300">{interval}</span>
      </div>
    );
  });

  return (
    <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-pacifico text-center text-pink-300 mb-8">
            ¡Falta poco!
        </h2>
        <div className="flex flex-wrap justify-center gap-4 md:gap-8">
            {timerComponents.length ? timerComponents : <span className="text-2xl">¡La fiesta ha comenzado!</span>}
        </div>
    </div>
  );
};

export default CountdownTimer;
