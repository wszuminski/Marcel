import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";

export function AuroraBackgroundDemo() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col items-center justify-center px-4 max-w-6xl mx-auto"
      >
        {/* Main Content Container */}
        <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
          {/* Left Side - Text Content */}
          <div className="text-left space-y-6">
            <motion.h1
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Przekrocz swoje granice z{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                Marcelem
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg md:text-xl text-gray-300 leading-relaxed"
            >
              Jako Twój osobisty trener, pomogę Ci odkryć potencjał Twojego
              ciała. Wspólnie stworzymy plan treningowy idealnie dopasowany do
              Twoich celów - czy to budowa masy mięśniowej, redukcja wagi, czy
              poprawa kondycji.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-semibold rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
                <span className="relative z-10">Rozpocznij transformację</span>
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </button>

              <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-semibold rounded-full hover:border-white hover:text-white transition-all duration-300">
                Zobacz efekty
              </button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex gap-8 pt-6"
            >
              <div>
                <div className="text-3xl font-bold text-purple-400">500+</div>
                <div className="text-sm text-gray-400">
                  Zadowolonych klientów
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">10+</div>
                <div className="text-sm text-gray-400">Lat doświadczenia</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">100%</div>
                <div className="text-sm text-gray-400">
                  Indywidualne podejście
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side - Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-[350px] aspect-[9/13] rounded-2xl overflow-hidden shadow-2xl border border-purple-700">
              {/* Video with Instagram aspect ratio */}
              <video
                src="/Wideo_4.mov"
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
                controls={false}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
