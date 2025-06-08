import { useState, useEffect } from "react";
import { X, Eye, Heart } from "lucide-react";

interface ModalData {
  imageId: string;
  src: string;
  views: string;
  likes: string;
}

export default function ImageModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [modalData, setModalData] = useState<ModalData | null>(null);

  useEffect(() => {
    const handleOpenModal = (event: any) => {
      setModalData(event.detail);
      setIsOpen(true);
      document.body.style.overflow = 'hidden';
    };

    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('openImageModal', handleOpenModal);
    document.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('openImageModal', handleOpenModal);
      document.removeEventListener('keydown', handleKeydown);
    };
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    setModalData(null);
    document.body.style.overflow = 'auto';
  };

  const handleBackgroundClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!isOpen || !modalData) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={handleBackgroundClick}
    >
      <div className="relative max-w-4xl max-h-full">
        <button 
          className="absolute -top-12 right-0 text-white hover:text-gray-300 text-2xl z-10"
          onClick={closeModal}
        >
          <X className="h-8 w-8" />
        </button>
        
        <img 
          src={modalData.src} 
          alt="" 
          className="max-w-full max-h-full object-contain rounded-lg"
        />
        
        <div className="absolute bottom-4 right-4 flex space-x-reverse space-x-3">
          <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
            <Eye className="h-4 w-4 ml-2" />
            <span>{modalData.views}</span>
          </span>
          <button className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-accent/80 transition-colors">
            <Heart className="h-4 w-4 ml-2" />
            <span>{modalData.likes}</span>
          </button>
        </div>
      </div>
    </div>
  );
}
