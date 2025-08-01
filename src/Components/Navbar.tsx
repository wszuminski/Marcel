import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center w-full relative">
            {/* Centered Logo - Absolutely positioned */}
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <span className="text-2xl font-bold text-white">FitPro</span>
            </div>

            {/* Navigation Container */}
            <div className="flex items-center">
              {/* Left Menu Items */}
              <div className="flex items-center space-x-6 pr-24 ">
                <a
                  href="#home"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  About
                </a>
                <a
                  href="#services"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  Services
                </a>
              </div>

              {/* Right Menu Items */}
              <div className="flex items-center space-x-6 pl-24">
                <a
                  href="#programs"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  Programs
                </a>
                <a
                  href="#testimonials"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  Testimonials
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-purple-300 transition-colors font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          </div>

          {/* Mobile Layout */}
          <div className="md:hidden flex items-center justify-between w-full">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <span className="text-xl font-bold text-white">FitPro</span>
            <div className="w-10"></div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/20">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              Services
            </a>
            <a
              href="#programs"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              Programs
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
