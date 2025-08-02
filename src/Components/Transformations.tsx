import { useState } from "react";
import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Calendar,
  Weight,
  Target,
  Award,
} from "lucide-react";

export function MetamorphosisSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      name: "Michał K.",
      duration: "12 tygodni",
      weightLoss: "-15 kg",
      achievement: "Pierwsza szóstka w życiu",
      testimonial:
        "Marcel zmienił moje życie. Nie tylko zrzuciłem wagę, ale zyskałem pewność siebie i energię, której nigdy wcześniej nie miałem.",
      beforeImage: "/before1.jpg",
      afterImage: "/after1.jpg",
      stats: {
        waga: { before: "95 kg", after: "80 kg" },
        tłuszcz: { before: "28%", after: "15%" },
        siła: { before: "Wyciskanie 60kg", after: "Wyciskanie 100kg" },
      },
    },
    {
      name: "Anna M.",
      duration: "16 tygodni",
      weightLoss: "-12 kg",
      achievement: "Pierwszy maraton ukończony",
      testimonial:
        "Myślałam, że sport to nie dla mnie. Marcel pokazał mi, że każdy może być fit. Teraz biegam maratony!",
      beforeImage: "/before2.jpg",
      afterImage: "/after2.jpg",
      stats: {
        waga: { before: "78 kg", after: "66 kg" },
        tłuszcz: { before: "32%", after: "22%" },
        kondycja: { before: "5 min biegu", after: "42 km maratonu" },
      },
    },
    {
      name: "Piotr W.",
      duration: "24 tygodnie",
      weightLoss: "+8 kg mięśni",
      achievement: "Zawody kulturystyczne",
      testimonial:
        "Od chuderlaka do zawodnika. Marcel nauczył mnie trenować mądrze, jeść właściwie i nigdy się nie poddawać.",
      beforeImage: "/before3.jpg",
      afterImage: "/after3.jpg",
      stats: {
        waga: { before: "65 kg", after: "73 kg" },
        mięśnie: { before: "35 kg", after: "43 kg" },
        siła: { before: "Martwy 80kg", after: "Martwy 160kg" },
      },
    },
  ];

  const goToPrevious = () => {
    setActiveIndex(
      activeIndex === 0 ? transformations.length - 1 : activeIndex - 1
    );
  };

  const goToNext = () => {
    setActiveIndex(
      activeIndex === transformations.length - 1 ? 0 : activeIndex + 1
    );
  };

  const currentTransformation = transformations[activeIndex];

  return (
    <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-pink-500/10 rounded-full blur-3xl"></div>
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
            Metamorfozy{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Klientów
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Prawdziwe historie transformacji. Zobacz, jak determinacja i
            profesjonalne prowadzenie prowadzą do spektakularnych rezultatów.
          </p>
        </motion.div>

        {/* Transformation Showcase */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 rounded-full bg-zinc-800/80 text-white hover:bg-zinc-700 transition-colors z-10"
          >
            <ChevronRight size={24} />
          </button>

          {/* Main Content */}
          <motion.div
            key={activeIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-900/50 rounded-2xl border border-zinc-800 p-6 md:p-10"
          >
            {/* Client Info Header */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">
                {currentTransformation.name}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Calendar className="w-4 h-4 text-purple-400" />
                  <span>{currentTransformation.duration}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Weight className="w-4 h-4 text-purple-400" />
                  <span>{currentTransformation.weightLoss}</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <Award className="w-4 h-4 text-purple-400" />
                  <span>{currentTransformation.achievement}</span>
                </div>
              </div>
            </div>

            {/* Before/After Images */}
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-red-500/90 text-white px-4 py-2 rounded-full font-semibold z-10">
                  PRZED
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-800">
                  <img
                    src={currentTransformation.beforeImage}
                    alt="Before transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="relative group">
                <div className="absolute top-4 left-4 bg-green-500/90 text-white px-4 py-2 rounded-full font-semibold z-10">
                  PO
                </div>
                <div className="aspect-[3/4] rounded-xl overflow-hidden bg-zinc-800">
                  <img
                    src={currentTransformation.afterImage}
                    alt="After transformation"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              {Object.entries(currentTransformation.stats).map(
                ([key, value], index) => (
                  <motion.div
                    key={key}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-zinc-800/50 rounded-xl p-4 border border-zinc-700"
                  >
                    <h4 className="text-purple-400 font-semibold capitalize mb-2">
                      {key}
                    </h4>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Przed:</span>
                      <span className="text-white font-semibold">
                        {value.before}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gray-400 text-sm">Po:</span>
                      <span className="text-green-400 font-semibold">
                        {value.after}
                      </span>
                    </div>
                  </motion.div>
                )
              )}
            </div>

            {/* Testimonial */}
            <div className="bg-purple-500/10 rounded-xl p-6 border border-purple-500/30">
              <Target className="w-8 h-8 text-purple-400 mb-4" />
              <blockquote className="text-gray-300 text-lg italic">
                "{currentTransformation.testimonial}"
              </blockquote>
              <cite className="text-purple-400 font-semibold mt-2 block">
                - {currentTransformation.name}
              </cite>
            </div>
          </motion.div>
        </div>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {transformations.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "w-8 bg-purple-500"
                  : "bg-zinc-600 hover:bg-zinc-500"
              }`}
            />
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">
            Twoja transformacja może być następna
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-purple-500/25">
            Zacznij swoją metamorfozę
          </button>
        </motion.div>
      </div>
    </section>
  );
}
