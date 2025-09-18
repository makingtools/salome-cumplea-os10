
import React from 'react';
import type { PartyDetailsType } from '../types';

interface PartyDetailsProps {
    details: PartyDetailsType;
}

const DetailItem: React.FC<{ icon: React.ReactNode; title: string; text: string }> = ({ icon, title, text }) => (
    <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-pink-500/20 text-pink-300 rounded-full flex items-center justify-center">
            {icon}
        </div>
        <div>
            <h3 className="text-lg font-bold text-gray-200">{title}</h3>
            <p className="text-gray-300">{text}</p>
        </div>
    </div>
);


const PartyDetails: React.FC<PartyDetailsProps> = ({ details }) => {
  return (
    <div className="max-w-4xl mx-auto bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg p-8 md:p-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <DetailItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>}
                title="¿Cuándo?"
                text={`${details.when} a las ${details.time}`}
            />
             <DetailItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>}
                title="¿Dónde?"
                text={details.location.address}
            />
            <DetailItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 15.546c-.523 0-1.046.151-1.5.454a2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0 2.704 2.704 0 01-3 0 2.704 2.704 0 00-3 0c-.454-.303-.977-.454-1.5-.454V5.454c0-.523.151-1.046.454-1.5a2.704 2.704 0 013 0 2.704 2.704 0 003 0 2.704 2.704 0 013 0 2.704 2.704 0 003 0c.303.454.454.977.454 1.5v10.092zM12 11a3 3 0 100-6 3 3 0 000 6z" /></svg>}
                title="¿Qué?"
                text={details.what}
            />
            <DetailItem 
                icon={<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path fill="#FFF" d="M9 6a3 3 0 11-6 0 3 3 0 016 0zm-3 18c-3.153 0-5-2.489-5-5.524 0-2.348 1.226-4.505 3.232-5.918.497-.35.922-.638 1.268-.862.346-.224.629-.4.84-.518.211-.118.375-.21.49-.276.115-.066.21-.11.285-.129.075-.02.135-.02.18-.02s.105 0 .18.02c.075.018.17.063.285.129.115.066.279.158.49.276.211.118.494.294.84.518.346.224.771.512 1.268.862 2.006 1.413 3.232 3.57 3.232 5.918C14 18.511 12.153 21 9 21zm9-4a3 3 0 100-6 3 3 0 000 6z" /><path fill="#FFF" d="M19 8a4 4 0 11-8 0 4 4 0 018 0zm-4 13c-3.153 0-5-2.489-5-5.524 0-2.348 1.226-4.505 3.232-5.918.497-.35.922-.638 1.268-.862.346-.224.629-.4.84-.518.211-.118.375-.21.49-.276.115-.066.21-.11.285-.129.075-.02.135-.02.18-.02s.105 0 .18.02c.075.018.17.063.285.129.115.066.279.158.49.276.211.118.494.294.84.518.346.224.771.512 1.268.862 2.006 1.413 3.232 3.57 3.232 5.918C20 18.511 18.153 21 15 21z" /></svg>}
                title="¿Quién celebra?"
                text={details.who}
            />
        </div>
    </div>
  );
};

export default PartyDetails;
