import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-black shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-reverse space-x-4">
            <div className="bg-primary w-10 h-10 rounded flex items-center justify-center">
              <i className="fas fa-play text-black text-lg font-bold"></i>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">
                <span className="text-white">X</span><span className="text-primary">arab</span>
              </h1>
              <p className="text-sm text-gray-400">منصة المحتوى الحصري</p>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-reverse space-x-6">
            <a href="#gallery" className="text-gray-300 hover:text-primary transition-colors font-semibold">
              الفيديوهات
            </a>
            <a href="#photos" className="text-gray-300 hover:text-primary transition-colors font-semibold">
              الصور
            </a>
            <a href="#live" className="text-gray-300 hover:text-primary transition-colors font-semibold">
              مباشر
            </a>
            <a href="#categories" className="text-gray-300 hover:text-primary transition-colors font-semibold">
              الفئات
            </a>
          </nav>
          
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-700">
            <nav className="flex flex-col space-y-3 mt-4">
              <a 
                href="#gallery" 
                className="text-gray-300 hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                الفيديوهات
              </a>
              <a 
                href="#photos" 
                className="text-gray-300 hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                الصور
              </a>
              <a 
                href="#live" 
                className="text-gray-300 hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                مباشر
              </a>
              <a 
                href="#categories" 
                className="text-gray-300 hover:text-primary transition-colors font-semibold"
                onClick={() => setIsMenuOpen(false)}
              >
                الفئات
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
