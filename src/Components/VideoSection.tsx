//@ts-nocheck
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function VSLSection() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  const video = {
    title: "Odkryj Swoją Najlepszą Formę",
    subtitle: "Poznaj mój sprawdzony system treningu personalnego",
    videoUrl: "/vsl-video.mp4",
    thumbnail: "/vsl-thumbnail.jpg",
  };

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setIsMuted(!isMuted);
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />

      <div className="max-w-5xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {video.title}
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            {video.subtitle}
          </p>
        </motion.div>

        {/* Main Video Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Glowing Border Container */}
          <div className="relative rounded-2xl p-1 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 animate-gradient-x">
            {/* Inner glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-xl opacity-50 animate-pulse" />

            {/* Video Container */}
            <div className="relative rounded-xl overflow-hidden bg-zinc-900">
              <div className="relative aspect-video">
                {isPlaying ? (
                  <video
                    src={video.videoUrl}
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted={isMuted}
                    playsInline
                  />
                ) : (
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover"
                  />
                )}

                {/* Overlay with Play Button */}
                <div
                  className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer transition-all duration-300 group-hover:bg-black/40"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <div className="bg-white/10 backdrop-blur-md rounded-full p-6 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
                      <Pause className="w-12 h-12 text-white" />
                    </div>
                  ) : (
                    <div className="relative">
                      {/* Pulsing ring animation for play button */}
                      <div className="absolute inset-0 bg-white/20 rounded-full animate-ping" />
                      <div className="relative bg-white/20 backdrop-blur-md rounded-full p-6 group-hover:scale-110 transition-transform">
                        <Play className="w-12 h-12 text-white fill-current ml-1" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Control buttons */}
                <div className="absolute bottom-6 right-6 flex gap-3">
                  {isPlaying && (
                    <button
                      onClick={toggleMute}
                      className="bg-black/60 backdrop-blur-sm text-white p-3 rounded-full hover:bg-black/80 transition-all duration-300 hover:scale-110"
                    >
                      {isMuted ? (
                        <VolumeX className="w-5 h-5" />
                      ) : (
                        <Volume2 className="w-5 h-5" />
                      )}
                    </button>
                  )}
                </div>

                {/* Watch Now Badge */}
                {!isPlaying && (
                  <div className="absolute top-6 left-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-5 py-2 rounded-full text-sm font-bold uppercase tracking-wider shadow-lg">
                    Obejrzyj Teraz
                  </div>
                )}
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-xl text-gray-300 mb-8">
            Gotowy na transformację? Dołącz do setek zadowolonych klientów.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group relative px-10 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-2xl">
              <span className="relative z-10">Zacznij Teraz</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-50 group-hover:opacity-70 transition-opacity" />
            </button>
            <button className="px-10 py-4 border-2 border-purple-500 text-purple-400 font-bold text-lg rounded-full hover:bg-purple-500/10 hover:text-white hover:border-purple-400 transition-all duration-300">
              Dowiedz się więcej
            </button>
          </div>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-8 text-gray-400">
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-2xl font-bold">500+</span>
              <span>Zadowolonych klientów</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-2xl font-bold">10+</span>
              <span>Lat doświadczenia</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-purple-400 text-2xl font-bold">98%</span>
              <span>Osiąga cele</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
