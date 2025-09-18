
import React from 'react';

interface LocationMapProps {
    address: string;
}

const LocationMap: React.FC<LocationMapProps> = ({ address }) => {
    const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(address)}&t=&z=15&ie=UTF8&iwloc=&output=embed`;

    return (
        <div className="max-w-4xl mx-auto aspect-[4/3] md:aspect-video bg-black/30 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden p-2">
            <iframe
                title="Ubicación de la Fiesta"
                src={mapSrc}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
            ></iframe>
        </div>
    );
};

export default LocationMap;
