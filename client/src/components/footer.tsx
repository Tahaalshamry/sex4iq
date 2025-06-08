export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center space-x-reverse space-x-3 mb-4">
              <div className="bg-primary w-8 h-8 rounded flex items-center justify-center">
                <i className="fas fa-play text-black text-sm font-bold"></i>
              </div>
              <h4 className="text-xl font-bold">
                <span className="text-white">X</span><span className="text-primary">arab</span>
              </h4>
            </div>
            <p className="text-gray-400 mb-4">منصة المحتوى الحصري العربي - تجربة مشاهدة مميزة بجودة عالية ومحتوى متنوع.</p>
            <div className="flex space-x-reverse space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                <i className="fab fa-telegram"></i>
              </a>
            </div>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-primary">الفئات</h5>
            <ul className="space-y-2">
              <li><a href="#trending" className="text-gray-400 hover:text-primary transition-colors">المحتوى الرائج</a></li>
              <li><a href="#new" className="text-gray-400 hover:text-primary transition-colors">الجديد</a></li>
              <li><a href="#popular" className="text-gray-400 hover:text-primary transition-colors">الأكثر مشاهدة</a></li>
              <li><a href="#premium" className="text-gray-400 hover:text-primary transition-colors">المحتوى المميز</a></li>
            </ul>
          </div>
          
          <div>
            <h5 className="text-lg font-semibold mb-4 text-primary">مزايا المنصة</h5>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center">
                <i className="fas fa-hd-video ml-2 text-primary"></i>
                جودة HD & 4K
              </li>
              <li className="flex items-center">
                <i className="fas fa-mobile-alt ml-2 text-primary"></i>
                متوافق مع الجوال
              </li>
              <li className="flex items-center">
                <i className="fas fa-language ml-2 text-primary"></i>
                واجهة عربية كاملة
              </li>
              <li className="flex items-center">
                <i className="fas fa-clock ml-2 text-primary"></i>
                تحديث يومي
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Xarab. جميع الحقوق محفوظة.</p>
        </div>
      </div>
    </footer>
  );
}
