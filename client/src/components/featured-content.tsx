import { useState } from "react";
import { Play, Eye, Heart, Expand } from "lucide-react";

export default function FeaturedContent() {
  const [videoPlaying, setVideoPlaying] = useState(false);
  const [featuredLikes, setFeaturedLikes] = useState(89);
  const [imageLikes, setImageLikes] = useState(156);

  const handleVideoPlay = () => {
    setVideoPlaying(!videoPlaying);
  };

  const handleLike = (type: 'video' | 'image', e: React.MouseEvent) => {
    e.stopPropagation();
    if (type === 'video') {
      setFeaturedLikes(prev => prev + 1);
    } else {
      setImageLikes(prev => prev + 1);
    }
  };

  const openModal = (imageId: string) => {
    const event = new CustomEvent('openImageModal', { 
      detail: { 
        imageId,
        src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&h=800',
        views: '2,567',
        likes: imageLikes.toString()
      } 
    });
    window.dispatchEvent(event);
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">المحتوى المميز</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Featured Video */}
          <div className="relative group hover-scale">
            <div 
              className="w-full h-64 bg-cover bg-center rounded-xl shadow-lg cursor-pointer relative"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400')"
              }}
              onClick={handleVideoPlay}
            >
              {!videoPlaying && (
                <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <button className="bg-white/90 hover:bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                    <Play className="h-6 w-6 mr-1" />
                  </button>
                </div>
              )}
              
              <div className="absolute bottom-4 right-4 flex space-x-reverse space-x-3">
                <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                  <Eye className="h-4 w-4 ml-2" />
                  <span>1,234</span>
                </span>
                <button 
                  className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-accent/80 transition-colors"
                  onClick={(e) => handleLike('video', e)}
                >
                  <Heart className="h-4 w-4 ml-2" />
                  <span>{featuredLikes}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Featured Image */}
          <div 
            className="relative group hover-scale cursor-pointer" 
            onClick={() => openModal('featured-image')}
          >
            <img 
              src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=400" 
              alt="منظر طبيعي خلاب للجبال والبحيرة" 
              className="w-full h-64 object-cover rounded-xl shadow-lg"
            />
            <div className="absolute inset-0 bg-black/40 rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
              <button className="bg-white/90 hover:bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center text-2xl">
                <Expand className="h-6 w-6" />
              </button>
            </div>
            <div className="absolute bottom-4 right-4 flex space-x-reverse space-x-3">
              <span className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center">
                <Eye className="h-4 w-4 ml-2" />
                <span>2,567</span>
              </span>
              <button 
                className="bg-black/70 text-white px-3 py-1 rounded-full text-sm flex items-center hover:bg-accent/80 transition-colors"
                onClick={(e) => handleLike('image', e)}
              >
                <Heart className="h-4 w-4 ml-2" />
                <span>{imageLikes}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
