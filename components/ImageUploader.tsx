
import React, { useRef, useState } from 'react';

interface ImageUploaderProps {
    onImagesUploaded: (newImages: string[]) => void;
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ onImagesUploaded }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        if (!files || files.length === 0) {
            return;
        }

        setIsUploading(true);
        const imagePromises: Promise<string>[] = [];

        Array.from(files).forEach(file => {
            if (file.type.startsWith('image/')) {
                const promise = new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.onload = (e) => {
                        resolve(e.target?.result as string);
                    };
                    reader.onerror = reject;
                    reader.readAsDataURL(file);
                });
                imagePromises.push(promise);
            }
        });

        Promise.all(imagePromises)
            .then(base64Images => {
                onImagesUploaded(base64Images);
                setIsUploading(false);
                // Resetea el input para permitir cargar el mismo archivo de nuevo
                if (fileInputRef.current) {
                    fileInputRef.current.value = '';
                }
            })
            .catch(error => {
                console.error("Error al cargar las imágenes:", error);
                setIsUploading(false);
            });
    };

    const handleButtonClick = () => {
        fileInputRef.current?.click();
    };

    return (
        <div className="text-center mb-12">
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                multiple
                accept="image/*"
                className="hidden"
                aria-hidden="true"
            />
            <button
                onClick={handleButtonClick}
                disabled={isUploading}
                className="inline-block px-8 py-4 text-lg font-bold text-white uppercase tracking-wider bg-gradient-to-r from-green-400 to-blue-500 rounded-full shadow-lg transform hover:scale-110 transition-transform duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isUploading ? 'Cargando...' : 'Agregar tus Fotos'}
            </button>
            <p className="text-gray-400 mt-4 text-sm">
                Selecciona tus fotos favoritas para añadirlas a la galería.
            </p>
        </div>
    );
};

export default ImageUploader;
