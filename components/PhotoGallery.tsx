
import React from 'react';

interface PhotoGalleryProps {
    images: string[];
}

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300">
                        <img 
                            src={src} 
                            alt={`Foto de Emmy ${index + 1}`} 
                            className="w-full h-full object-cover" 
                            loading="lazy"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;
