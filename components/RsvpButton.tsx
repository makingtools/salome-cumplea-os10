import React, { useState, Fragment, useMemo } from 'react';
import { WHATSAPP_PHONE_NUMBER } from '../constants';

// Definición de props para el modal para mayor claridad
interface RsvpModalProps {
    isOpen: boolean;
    onClose: () => void;
    guestName: string;
    setGuestName: (val: string) => void;
    adults: number;
    setAdults: (val: number | ((prev: number) => number)) => void;
    kids: number;
    setKids: (val: number | ((prev: number) => number)) => void;
}

const RsvpModal: React.FC<RsvpModalProps> = ({ isOpen, onClose, guestName, setGuestName, adults, setAdults, kids, setKids }) => {
    if (!isOpen) return null;

    // El botón se deshabilita si no se ingresa un nombre O si no hay invitados seleccionados.
    const isDisabled = guestName.trim() === '' || (adults === 0 && kids === 0);

    // Genera el enlace de WhatsApp dinámicamente.
    const whatsappLink = useMemo(() => {
        if (isDisabled) return '#';

        const adultText = adults > 0 ? `${adults} ${adults === 1 ? 'adulto' : 'adultos'}` : '';
        const kidText = kids > 0 ? `${kids} ${kids === 1 ? 'niño' : 'niños'}` : '';
        const partyComposition = [adultText, kidText].filter(Boolean).join(' y ');

        // Un mensaje mucho más personal, claro y entusiasta.
        const message = `¡Hola, soy ${guestName.trim()}! 🎉 Con mucha alegría confirmo nuestra asistencia para celebrar el cumpleaños número 10 de Emmy. Seremos ${partyComposition}. ¡Nos vemos en la fiesta para festejar en grande! 🥳`;
        
        return `https://wa.me/${WHATSAPP_PHONE_NUMBER}?text=${encodeURIComponent(message)}`;
    }, [adults, kids, guestName, isDisabled]);

    return (
        <div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fadeIn"
            onClick={onClose}
            aria-modal="true"
            role="dialog"
        >
            <div 
                className="bg-gray-900/70 border border-pink-500/30 rounded-2xl shadow-lg p-4 max-w-sm w-full animate-zoomIn space-y-3"
                onClick={(e) => e.stopPropagation()} // Evita que el modal se cierre al hacer clic dentro.
            >
                <div className="text-center">
                    <h3 className="text-lg font-pacifico text-pink-300">Confirma tu Asistencia</h3>
                    <p className="text-xs text-gray-300">
                        ¡Ayúdanos a prepararnos!
                    </p>
                </div>
                
                <div className="space-y-2">
                    {/* Input para el nombre del invitado */}
                    <div>
                        <label htmlFor="guestName" className="block text-sm text-gray-200 font-semibold mb-1">Tu nombre</label>
                        <input
                            id="guestName"
                            type="text"
                            value={guestName}
                            onChange={(e) => setGuestName(e.target.value)}
                            placeholder="Ej: Familia Pérez"
                            className="w-full px-3 py-1.5 bg-white/10 rounded-lg border-2 border-transparent focus:border-pink-400 focus:ring-0 focus:outline-none transition-all duration-300 text-white placeholder-gray-400"
                            required
                            aria-label="Nombre del invitado o familia"
                        />
                    </div>

                    {/* Input de Adultos */}
                    <div className="flex items-center justify-between w-full">
                        <label className="text-sm text-gray-200">Adultos</label>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setAdults(prev => Math.max(0, prev - 1))} className="w-7 h-7 rounded-full bg-white/10 text-pink-300 text-lg font-bold flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">-</button>
                            <span className="text-lg font-bold text-yellow-300 w-8 text-center" aria-live="polite">{adults}</span>
                            <button onClick={() => setAdults(prev => prev + 1)} className="w-7 h-7 rounded-full bg-white/10 text-pink-300 text-lg font-bold flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">+</button>
                        </div>
                    </div>
                    {/* Input de Niños */}
                    <div className="flex items-center justify-between w-full">
                        <label className="text-sm text-gray-200">Niños</label>
                        <div className="flex items-center gap-2">
                            <button onClick={() => setKids(prev => Math.max(0, prev - 1))} className="w-7 h-7 rounded-full bg-white/10 text-pink-300 text-lg font-bold flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">-</button>
                            <span className="text-lg font-bold text-yellow-300 w-8 text-center" aria-live="polite">{kids}</span>
                            <button onClick={() => setKids(prev => prev + 1)} className="w-7 h-7 rounded-full bg-white/10 text-pink-300 text-lg font-bold flex items-center justify-center hover:bg-pink-500 hover:text-white transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-pink-400">+</button>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-2 pt-3">
                    <button 
                        onClick={onClose}
                        className="w-full px-5 py-2 text-xs font-bold text-white uppercase tracking-wider bg-gray-600/50 rounded-full shadow-lg hover:bg-gray-500/50 transition-colors duration-300"
                    >
                        Cancelar
                    </button>
                    <a
                        href={whatsappLink}
                        onClick={(e) => {
                            if (isDisabled) {
                                e.preventDefault();
                            } else {
                                onClose();
                            }
                        }}
                        target="_blank"
                        rel="noopener noreferrer"
                        role="button"
                        aria-disabled={isDisabled}
                        className={`w-full text-center px-5 py-2 text-xs font-bold text-white uppercase tracking-wider bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transition-all duration-300 ease-in-out ${isDisabled ? 'opacity-50 cursor-not-allowed grayscale' : 'transform hover:scale-105 hover:shadow-lg hover:shadow-pink-500/50'}`}
                    >
                        Confirmar
                    </a>
                </div>
            </div>
        </div>
    );
};


const RsvpButton: React.FC = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [guestName, setGuestName] = useState('');
    const [adults, setAdults] = useState(1);
    const [kids, setKids] = useState(0);

    const handleOpenModal = () => {
        // Resetea el estado cada vez que se abre el modal para una experiencia limpia.
        setGuestName('');
        setAdults(1); // Por defecto 1 adulto
        setKids(0);
        setIsModalOpen(true);
    };

    return (
        <Fragment>
            <button
                onClick={handleOpenModal}
                className="inline-block px-12 py-5 text-xl font-bold text-white uppercase tracking-wider bg-gradient-to-r from-pink-500 to-red-500 rounded-full shadow-lg transform hover:scale-105 hover:-translate-y-1 hover:-rotate-2 hover:shadow-2xl hover:shadow-pink-500/40 transition-all duration-300 ease-in-out"
            >
                Confirmar Asistencia
            </button>

            <RsvpModal 
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                guestName={guestName}
                setGuestName={setGuestName}
                adults={adults}
                setAdults={setAdults}
                kids={kids}
                setKids={setKids}
            />
        </Fragment>
    );
};

export default RsvpButton;