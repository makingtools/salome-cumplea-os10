
import React from 'react';

interface RsvpButtonProps {
    whatsappLink: string;
}

const RsvpButton: React.FC<RsvpButtonProps> = ({ whatsappLink }) => {
    return (
        <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-12 py-5 text-xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out"
        >
            Confirmar Asistencia
        </a>
    );
};

export default RsvpButton;
