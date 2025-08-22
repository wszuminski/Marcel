import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSmoothScroll } from "./hooks/useScroll";

export default function Navbar() {
  const scrollTo = useSmoothScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "services", label: "Oferta" },
    { id: "transformations", label: "Przemiany" },
    { id: "about", label: "O mnie" },
    { id: "contact", label: "Kontakt" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-zinc-950/50 backdrop-blur-xl border-b border-purple-500/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation - Using Grid for better centering */}
        <div className="hidden lg:grid grid-cols-[1fr_auto_1fr] items-center h-20 max-w-4xl mx-auto">
          {/* Left Navigation */}
          <div className="flex items-center justify-end gap-6 xl:gap-8">
            {navItems.slice(0, 2).map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="relative text-white hover:text-purple-300 transition-colors font-semibold text-sm xl:text-base group"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </div>

          {/* Center Logo */}
          <div className="flex items-center px-6 -mt-2">
            <img src="/Logo.svg" alt="Logo" className="w-auto h-14" />
          </div>

          {/* Right Navigation */}
          <div className="flex items-center justify-start gap-6 xl:gap-8">
            {navItems.slice(2, 4).map((item, index) => (
              <motion.button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: (index + 2) * 0.1, duration: 0.5 }}
                whileHover={{ y: -2 }}
                className="relative text-white hover:text-purple-300 transition-colors font-semibold text-sm xl:text-base group"
              >
                {item.label}
                <motion.div
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-pink-400 group-hover:w-full transition-all duration-300"
                  whileHover={{ width: "100%" }}
                />
              </motion.button>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/Logo.svg" alt="Logo" className="w-auto h-10 sm:h-12" />
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white p-2 relative z-50"
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={20} className="sm:w-6 sm:h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 sm:py-6 space-y-2 sm:space-y-4 border-t border-purple-500/20">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.id}
                    onClick={() => {
                      scrollTo(item.id);
                      setIsMenuOpen(false);
                    }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1, duration: 0.3 }}
                    className="block w-full text-left text-white hover:text-purple-300 transition-colors py-2 sm:py-3 px-4 font-semibold hover:bg-purple-500/10 rounded-lg text-sm sm:text-base"
                  >
                    {item.label}
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
}
