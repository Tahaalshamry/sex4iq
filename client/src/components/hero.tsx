export default function Hero() {
  return (
    <section className="bg-gradient-to-l from-black to-gray-900 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">أفضل المحتوى الحصري</h2>
        <p className="text-xl mb-8 opacity-90 text-gray-300">آلاف الفيديوهات والصور عالية الجودة</p>
        <div className="flex justify-center space-x-reverse space-x-8 text-center">
          <div className="bg-primary/20 border border-primary rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">1.2M+</div>
            <div className="text-sm opacity-80">فيديو</div>
          </div>
          <div className="bg-primary/20 border border-primary rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">500K+</div>
            <div className="text-sm opacity-80">صورة</div>
          </div>
          <div className="bg-primary/20 border border-primary rounded-lg p-4 backdrop-blur-sm">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm opacity-80">مشاهدة</div>
          </div>
        </div>
      </div>
    </section>
  );
}
