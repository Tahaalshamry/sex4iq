import Header from "@/components/header";
import Hero from "@/components/hero";
import FeaturedContent from "@/components/featured-content";
import MediaGallery from "@/components/media-gallery";
import Statistics from "@/components/statistics";
import Footer from "@/components/footer";
import ImageModal from "@/components/image-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-cairo" dir="rtl">
      <Header />
      <Hero />
      <FeaturedContent />
      <MediaGallery />
      <Statistics />
      <Footer />
      <ImageModal />
    </div>
  );
}
