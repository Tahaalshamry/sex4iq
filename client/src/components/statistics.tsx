export default function Statistics() {
  return (
    <section className="py-16 bg-black text-white">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12 text-primary">إحصائيات المنصة</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="counter-animation bg-gray-900/50 p-6 rounded-lg border border-primary/20">
            <div className="text-4xl font-bold mb-2 text-primary">2.5M+</div>
            <div className="text-gray-300">إجمالي المشاهدات</div>
          </div>
          <div className="counter-animation bg-gray-900/50 p-6 rounded-lg border border-primary/20">
            <div className="text-4xl font-bold mb-2 text-primary">180K+</div>
            <div className="text-gray-300">مستخدم نشط</div>
          </div>
          <div className="counter-animation bg-gray-900/50 p-6 rounded-lg border border-primary/20">
            <div className="text-4xl font-bold mb-2 text-primary">50K+</div>
            <div className="text-gray-300">محتوى حصري</div>
          </div>
          <div className="counter-animation bg-gray-900/50 p-6 rounded-lg border border-primary/20">
            <div className="text-4xl font-bold mb-2 text-primary">HD</div>
            <div className="text-gray-300">جودة عالية</div>
          </div>
        </div>
      </div>
    </section>
  );
}
