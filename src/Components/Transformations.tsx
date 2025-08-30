import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Weight } from "lucide-react";

export function MetamorphosisSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  const transformations = [
    {
      beforeImage: "/before1.webp",
      afterImage: "/after1.webp",
      stats: {
        waga: { before: "72 kg", after: "83 kg" },
        ćwiczenie: { before: "Podciągnięcia: 5", after: "Muscle up 5x" },
        siła: { before: "Ława 50 na 5x", after: "Ława 100kg 5x" },
      },
    },
    {
      beforeImage: "/before2.webp",
      afterImage: "/after2.webp",
      stats: {
        waga: { before: "60 kg", after: "76 kg" },
        kondycja: {
          before: "10 pompek",
          after: "15x pompek w staniu na rękach przy ścianie",
        },
      },
    },
    {
      beforeImage: "/before3.webp",
      afterImage: "/after3.webp",
      stats: {
        waga: { before: "80 kg", after: "76 kg" },
        siła: { before: "Ława 65kg", after: "Ława 120kg" },
      },
    },
    {
      beforeImage: "/before4.webp",
      afterImage: "/after4.webp",
      stats: {
        waga: { before: "61 kg", after: "77 kg" },
        siła: {
          before: "Podciągnięcia: 0",
          after: "10 Muscle upów / front lever pull up",
        },
      },
    },
    {
      beforeImage: "/before5.webp",
      afterImage: "/after5.webp",
      stats: {
        waga: { before: "92 kg", after: "81,5 kg" },
        siła: { before: "Podciągnięcia: 0", after: "Podciągnięcia: 5x + 25kg" },
      },
    },
    {
      weightLoss: "-4,5 kg",
      beforeImage: "/before6.webp",
      afterImage: "/after6.webp",
      stats: {
        waga: { before: "63,5 kg", after: "59 kg" },
        zdrowie: {
          before: "Od zera (brak mobilności bioder)",
          after: "Przysiad 50kg x 10 powtórzeń",
        },
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
    <section
      className="py-20 px-4 bg-zinc-950 relative overflow-hidden"
      id="transformations"
    >
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
              podopiecznych
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
              <div className="flex flex-wrap justify-center gap-4 text-sm">
                <div className="flex items-center gap-2 text-gray-400">
                  <Weight className="w-4 h-4 text-purple-400" />
                  <span>{currentTransformation.weightLoss}</span>
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
      </div>
    </section>
  );
}
