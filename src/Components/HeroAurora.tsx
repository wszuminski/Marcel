import { motion } from "framer-motion";
import { AuroraBackground } from "./ui/aurora-background";
import { Dumbbell, Play, ArrowRight, Star } from "lucide-react";

export function AuroraBackgroundDemo() {
  return (
    <section className="relative w-full overflow-hidden">
      <AuroraBackground className="absolute inset-0">
        <div className="relative z-10" />
      </AuroraBackground>

      <div className="relative z-20 flex min-h-[100dvh] items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0.0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="w-full max-w-5xl py-8 sm:py-12"
        >
          {/* Main Content Container - Centered Layout */}
          <div className="flex flex-col items-center text-center space-y-3 sm:space-y-4 md:space-y-6">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 bg-purple-500/20 border border-purple-500/30 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 text-purple-300 text-xs sm:text-sm font-medium mt-20"
            >
              <Dumbbell className="w-3 h-3 sm:w-4 sm:h-4" />
              <span className="hidden sm:inline">
                Certified Personal Trainer
              </span>
              <span className="sm:hidden">Personal Trainer</span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-[1.75rem] leading-[1.2] xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white"
            >
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Body
              </span>
              <br />
              Transform Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600">
                Life
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-4xl"
            >
              Jako Twój osobisty trener, pomogę Ci odkryć potencjał Twojego
              ciała i osiągnąć cele, o których zawsze marzyłeś.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto pt-2"
            >
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-4 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 bg-gradient-to-r from-purple-600 to-purple-700 text-white font-bold rounded-full hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-2xl hover:shadow-purple-500/25 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg"
              >
                <span>Rozpocznij transformację</span>
                <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:translate-x-1 transition-transform" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="group px-4 py-2.5 xs:px-6 xs:py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 border-2 border-purple-500/50 text-purple-300 font-bold rounded-full hover:border-purple-400 hover:text-purple-200 transition-all duration-300 flex items-center justify-center gap-2 sm:gap-3 text-sm sm:text-base lg:text-lg"
              >
                <Play className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                Zobacz efekty
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-wrap justify-center gap-4 xs:gap-6 sm:gap-8 lg:gap-12 pt-3 sm:pt-4 w-full"
            >
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-purple-400">
                  500+
                </div>
                <div className="text-[0.7rem] xs:text-xs sm:text-sm lg:text-base text-gray-400 font-medium leading-tight">
                  Zadowolonych klientów
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-purple-400">
                  10+
                </div>
                <div className="text-[0.7rem] xs:text-xs sm:text-sm lg:text-base text-gray-400 font-medium leading-tight">
                  Lat doświadczenia
                </div>
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="text-center">
                <div className="text-xl xs:text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-black text-purple-400">
                  100%
                </div>
                <div className="text-[0.7rem] xs:text-xs sm:text-sm lg:text-base text-gray-400 font-medium leading-tight">
                  Indywidualne podejście
                </div>
              </motion.div>
            </motion.div>

            {/* Trust Indicators */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="flex items-center justify-center gap-2 xs:gap-3 sm:gap-4 pt-2"
            >
              <div className="flex items-center gap-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-3 h-3 xs:w-4 xs:h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <span className="text-gray-400 text-[0.7rem] xs:text-xs sm:text-sm lg:text-base">
                4.9/5 z 200+ opinii
              </span>
            </motion.div>

            {/* Large Video Section */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="w-full max-w-[260px] xs:max-w-[280px] sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl mt-3 sm:mt-4 lg:mt-6"
            >
              <div className="relative group">
                {/* Video Container - Responsive */}
                <div className="relative w-full aspect-[4/5] rounded-xl xs:rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 border-purple-500/30 group-hover:border-purple-400/50 transition-all duration-300">
                  <video
                    src="/Wideo_4.mov"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                    controls={false}
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="w-12 h-12 xs:w-16 xs:h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-purple-500/90 rounded-full flex items-center justify-center cursor-pointer"
                    >
                      <Play className="w-6 h-6 xs:w-8 xs:h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-white ml-0.5 xs:ml-1" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
