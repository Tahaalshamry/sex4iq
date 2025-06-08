import { useState } from "react";
import { Eye, Heart, Play, Grid3X3, List, Plus } from "lucide-react";

interface MediaItem {
  id: string;
  type: 'image' | 'video';
  src: string;
  title: string;
  timeAgo: string;
  views: number;
  likes: number;
  poster?: string;
}

export default function MediaGallery() {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [mediaItems, setMediaItems] = useState<MediaItem[]>([
    {
      id: 'image1',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1541961017774-22349e4a1262?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      title: 'فن الشارع المعاصر',
      timeAgo: 'قبل يومين',
      views: 892,
      likes: 24
    },
    {
      id: 'image2',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1511818966892-d7d671e672a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      title: 'العمارة الحديثة',
      timeAgo: 'قبل 3 أيام',
      views: 1205,
      likes: 67
    },
    {
      id: 'video1',
      type: 'video',
      src: '#',
      poster: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      title: 'غروب الشمس الخلاب',
      timeAgo: 'قبل أسبوع',
      views: 3421,
      likes: 189
    },
    {
      id: 'image3',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1582967788606-a171c1080cb0?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      title: 'عالم المحيطات',
      timeAgo: 'منذ يوم',
      views: 2340,
      likes: 134
    },
    {
      id: 'image4',
      type: 'image',
      src: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      title: 'تصوير كلاسيكي',
      timeAgo: 'قبل أسبوع',
      views: 1112,
      likes: 78
    }
  ]);

  const handleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setMediaItems(prev => 
      prev.map(item => 
        item.id === id 
          ? { ...item, likes: item.likes + 1 }
          : item
      )
    );
  };

  const openModal = (item: MediaItem) => {
    if (item.type === 'image') {
      const event = new CustomEvent('openImageModal', { 
        detail: { 
          imageId: item.id,
          src: item.src.replace('w=400&h=300', 'w=1200&h=800'),
          views: item.views.toLocaleString(),
          likes: item.likes.toString()
        } 
      });
      window.dispatchEvent(event);
    }
  };

  const playVideo = (e: React.MouseEvent) => {
    e.stopPropagation();
    // Video play logic would go here
  };

  return (
    <section id="gallery" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold text-primary">مقاطع مميزة</h3>
          <div className="flex space-x-reverse space-x-4">
            <button 
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                viewMode === 'grid' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setViewMode('grid')}
            >
              <Grid3X3 className="h-4 w-4 ml-2" />
              شبكة
            </button>
            <button 
              className={`px-4 py-2 rounded-lg transition-colors flex items-center ${
                viewMode === 'list' 
                  ? 'bg-primary text-black' 
                  : 'bg-secondary text-gray-300 hover:bg-gray-700'
              }`}
              onClick={() => setViewMode('list')}
            >
              <List className="h-4 w-4 ml-2" />
              قائمة
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {mediaItems.map((item) => (
            <div 
              key={item.id}
              className="bg-card rounded-xl shadow-lg overflow-hidden hover-scale cursor-pointer border border-border" 
              onClick={() => openModal(item)}
            >
              <div className="relative">
                {item.type === 'video' ? (
                  <>
                    <div 
                      className="w-full h-48 bg-cover bg-center"
                      style={{ backgroundImage: `url('${item.poster}')` }}
                    >
                      <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                        <button 
                          className="bg-white/90 hover:bg-white text-primary w-12 h-12 rounded-full flex items-center justify-center"
                          onClick={playVideo}
                        >
                          <Play className="h-5 w-5 mr-1" />
                        </button>
                      </div>
                      <div className="absolute top-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-xs flex items-center">
                        <i className="fas fa-video ml-1"></i>
                        فيديو
                      </div>
                    </div>
                  </>
                ) : (
                  <img 
                    src={item.src} 
                    alt={item.title} 
                    className="w-full h-48 object-cover"
                  />
                )}
              </div>
              
              <div className="p-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-semibold text-foreground">{item.title}</h4>
                  <span className="text-xs text-muted-foreground">{item.timeAgo}</span>
                </div>
                <div className="flex justify-between items-center text-sm text-muted-foreground">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 ml-1" />
                    <span>{item.views.toLocaleString()}</span>
                  </div>
                  <button 
                    className="flex items-center hover:text-primary transition-colors counter-animation" 
                    onClick={(e) => handleLike(item.id, e)}
                  >
                    <Heart className="h-4 w-4 ml-1" />
                    <span>{item.likes}</span>
                  </button>
                </div>
              </div>
            </div>
          ))}

          {/* Load More Card */}
          <div className="bg-gradient-to-br from-secondary to-gray-800 rounded-xl shadow-lg overflow-hidden flex items-center justify-center h-64 hover-scale cursor-pointer border border-border">
            <div className="text-center">
              <Plus className="h-12 w-12 text-primary mb-4 mx-auto" />
              <p className="text-foreground font-semibold">عرض المزيد</p>
              <p className="text-sm text-muted-foreground">1000+ مقطع إضافي</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
