import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <span className="text-2xl font-bold text-white">
              Fit<span className="text-purple-400">Pro</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
              className="px-6 py-2.5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25"
            >
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-white p-2"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 space-y-4 border-t border-white/20">
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 px-4"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 px-4"
            >
              About
            </a>
            <a
              href="#services"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 px-4"
            >
              Services
            </a>
            <a
              href="#programs"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 px-4"
            >
              Programs
            </a>
            <a
              href="#testimonials"
              onClick={() => setIsMenuOpen(false)}
              className="block text-white hover:text-purple-300 transition-colors py-2 px-4"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="block mx-4 mt-4 px-6 py-3 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-medium rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 text-center"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
}
