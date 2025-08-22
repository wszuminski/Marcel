//@ts-nocheck
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

export function GallerySection() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const images = [
    {
      src: "/image0 (1).webp",
    },
    {
      src: "/image0.webp",
    },
    {
      src: "/image1 (1).webp",
    },
    {
      src: "/image1.webp",
    },
    {
      src: "/image2 (1).webp",
    },
    {
      src: "/image2.webp",
    },
    {
      src: "/image3.webp",
    },
    {
      src: "/image4.webp",
    },
  ];

  const openLightbox = (image, index) => {
    setSelectedImage(image);
    setSelectedIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const goToPrevious = () => {
    const newIndex =
      selectedIndex === 0 ? images.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  const goToNext = () => {
    const newIndex =
      selectedIndex === images.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    setSelectedImage(images[newIndex]);
  };

  return (
    <>
      <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-40 right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-40 left-20 w-72 h-72 bg-purple-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
              Moja{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Galeria
              </span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              Zobacz efekty pracy moich podopiecznych. Każde zdjęcie to historia
              determinacji, ciężkiej pracy i osiągniętych celów.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {images.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative cursor-pointer overflow-hidden rounded-lg"
                onClick={() => openLightbox(image, index)}
              >
                <div className="aspect-square relative overflow-hidden bg-zinc-800">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-lg">
                        {image.alt}
                      </p>
                      <p className="text-purple-300 text-sm">
                        {image.category}
                      </p>
                    </div>
                  </div>

                  {/* Purple accent on hover */}
                  <div className="absolute inset-0 border-2 border-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              className="absolute top-4 right-4 p-2 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
              onClick={closeLightbox}
            >
              <X size={24} />
            </button>

            {/* Navigation Buttons */}
            <button
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
            >
              <ChevronRight size={24} />
            </button>

            {/* Image Container - Fixed to prevent overflow */}
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-[90vw] max-h-[85vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative w-full h-full flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  className="max-w-full max-h-full w-auto h-auto object-contain rounded-lg"
                />

                {/* Image Info - Positioned at bottom of image container */}
                {(selectedImage.alt || selectedImage.category) && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg max-w-full">
                    {selectedImage.alt && (
                      <h3 className="text-white text-2xl font-semibold mb-1">
                        {selectedImage.alt}
                      </h3>
                    )}
                    {selectedImage.category && (
                      <p className="text-purple-300">
                        {selectedImage.category}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </motion.div>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-zinc-800/80 px-4 py-2 rounded-full z-10">
              <p className="text-white text-sm">
                {selectedIndex + 1} / {images.length}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
