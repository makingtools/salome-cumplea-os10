import React, { useState } from 'react';

interface PhotoGalleryProps {
    images: string[];
}

// An internal component to handle the loading state for each individual image.
// This approach encapsulates the logic and keeps the main component clean.
const ImageWithLoader: React.FC<{ src: string; index: number }> = ({ src, index }) => {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative aspect-square overflow-hidden rounded-2xl shadow-lg transform hover:scale-105 transition-transform duration-300 bg-black/30">
            {/* Skeleton loader with a pulse animation */}
            {isLoading && (
                <div className="absolute inset-0 w-full h-full animate-pulse bg-white/10"></div>
            )}
            
            {/* The actual image, which fades and zooms in when loaded */}
            <img 
                src={src} 
                alt={`Foto de Emmy ${index + 1}`} 
                className={`w-full h-full object-cover transition-all duration-500 ease-out ${isLoading ? 'opacity-0 scale-90' : 'opacity-100 scale-100'}`} 
                loading="lazy"
                onLoad={() => setIsLoading(false)}
            />
        </div>
    );
};

const PhotoGallery: React.FC<PhotoGalleryProps> = ({ images }) => {
    return (
        <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {images.map((src, index) => (
                    <ImageWithLoader key={index} src={src} index={index} />
                ))}
            </div>
        </div>
    );
};

export default PhotoGallery;