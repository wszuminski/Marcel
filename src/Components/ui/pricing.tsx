//@ts-nocheck
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { useSmoothScroll } from "../hooks/useScroll";
const pricingPlans = [
  {
    name: "Profesjonalny",
    subtitle: "Najpopularniejszy wybór",
    price: 599,
    showPrice: true,
    description: "Kompleksowa transformacja z pełnym wsparciem",
    gradient: "from-indigo-600/20 to-purple-600/20",
    borderGradient: "from-indigo-400 to-purple-400",
    features: [
      "8 treningów miesięcznie",
      "Spersonalizowany plan treningowy",
      "Pełny plan dietetyczny",
      "Wsparcie 24/7 przez WhatsApp",
      "Analiza składu ciała InBody",
      "Treningi grupowe GRATIS",
      "Dostęp do strefy cardio",
      "Suplementacja na miarę",
    ],
    highlight: true,
    badge: "Bestseller",
  },
  {
    name: "VIP",
    subtitle: "Maksymalne rezultaty",
    price: null,
    showPrice: false,
    priceText: "Wycena indywidualna",
    description: "Ekskluzywny program dla wymagających klientów",
    gradient: "from-indigo-500/20 to-purple-500/20",
    borderGradient: "from-rose-400 to-pink-400",
    features: [
      "Nieograniczone treningi",
      "Plan treningowy + domowy",
      "Dieta z przepisami",
      "Priorytetowe terminy",
      "Masaże regeneracyjne",
      "Sesja zdjęciowa przed/po",
      "Dostęp do sauny",
      "Gwarancja rezultatów",
    ],
    highlight: false,
    badge: null,
  },
];

export function PersonalTrainerPricing() {
  const scrollTo = useSmoothScroll();
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handlePlanSelect = (planName: string) => {
    console.log(`Selected plan: ${planName}`);
    // Handle plan selection logic here
  };

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.23, 0.86, 0.39, 0.96],
      },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const cardHover = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      className="relative py-32 bg-gradient-to-b from-zinc-950 via-indigo-950/20 to-zinc-950 text-white overflow-hidden"
      id="services"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0">
        {/* Moving orbs */}
        <motion.div
          className="absolute top-1/4 left-1/6 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, 150, 0],
            y: [0, 80, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/6 w-64 h-64 bg-rose-400/10 rounded-full blur-3xl"
          animate={{
            x: [0, -120, 0],
            y: [0, -60, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Header */}
        <motion.div className="text-center mb-16 sm:mb-20" variants={fadeInUp}>
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight leading-[1.1]"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Wybierz swój plan
            </span>
            {/* Space between lines & bigger animated line */}
            <br />
            <motion.span
              className="block mt-3 pb-3 pt-2 text-5xl sm:text-6xl md:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              Treningu Personalnego
            </motion.span>
          </motion.h2>

          <motion.p
            className="mt-6 text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Odkryj swoją najlepszą formę z profesjonalnym wsparciem. Każdy plan
            dostosowany do Twoich celów i możliwości.
          </motion.p>
        </motion.div>
        {/* Pricing Cards - Changed to 2 columns with better centering */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-20 max-w-5xl mx-auto"
          variants={staggerContainer}
        >
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={plan.name}
              className="relative"
              variants={fadeInUp}
              onHoverStart={() => setHoveredPlan(index)}
              onHoverEnd={() => setHoveredPlan(null)}
            >
              <motion.div
                className={`relative h-full p-8 rounded-3xl border backdrop-blur-xl overflow-hidden flex flex-col ${
                  plan.highlight
                    ? "bg-gradient-to-br from-white/[0.12] to-white/[0.04] border-indigo-400/50"
                    : "bg-gradient-to-br from-white/[0.08] to-white/[0.02] border-white/[0.15]"
                }`}
                variants={cardHover}
                initial="rest"
                whileHover="hover"
                style={{
                  boxShadow: plan.highlight
                    ? "0 25px 50px -12px rgba(99, 102, 241, 0.4), 0 0 30px rgba(99, 102, 241, 0.2)"
                    : "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
                }}
              >
                {/* Badge */}
                {plan.badge && (
                  <motion.div
                    className={`absolute -top-0.1 left-1/2 transform -translate-x-1/2 px-4 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${plan.borderGradient} text-white`}
                    initial={{ y: -200, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {plan.badge}
                  </motion.div>
                )}

                {/* Enhanced gradient overlay */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} rounded-3xl opacity-60`}
                  animate={{
                    backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"],
                  }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{
                    backgroundSize: "300% 300%",
                  }}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Plan Info */}
                  <h3 className="text-3xl font-bold text-white mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-white/60 text-sm mb-4">{plan.subtitle}</p>
                  <p className="text-white/80 mb-6">{plan.description}</p>

                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      {plan.showPrice ? (
                        <>
                          <span className="text-5xl font-bold text-white">
                            {plan.price} zł
                          </span>
                          <span className="text-white/60">/miesiąc</span>
                        </>
                      ) : (
                        <span className="text-3xl font-semibold text-white/90">
                          {plan.priceText}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Features - flex-grow to push button to bottom */}
                  <div className="mb-8 flex-grow">
                    <span className="sr-only">
                      Zawartość planu {plan.name}:
                    </span>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={featureIndex}
                        className="flex items-center gap-3 py-2"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: featureIndex * 0.1 }}
                      >
                        <div
                          className="w-5 h-5 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center flex-shrink-0"
                          aria-hidden="true"
                        >
                          <Check className="w-3 h-3 text-green-400" />
                        </div>
                        <span className="text-white/80 text-base">
                          {feature}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA Button - always at bottom */}
                  <motion.button
                    onClick={() => {
                      handlePlanSelect(plan.name), scrollTo("contact");
                    }}
                    className={`w-full py-4 px-6 rounded-full font-medium transition-all mt-auto ${
                      plan.highlight
                        ? "bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white"
                        : "bg-white/[0.08] border border-white/[0.15] text-white hover:bg-white/[0.12] hover:border-white/[0.25]"
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    aria-label={
                      plan.showPrice
                        ? `Wybierz plan ${plan.name} - ${plan.price} złotych miesięcznie`
                        : `Wybierz plan ${plan.name} - wycena indywidualna`
                    }
                  >
                    <span className="flex items-center justify-center gap-2">
                      Zacznij teraz
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </motion.button>
                </div>

                {/* Hover glow effect */}
                <AnimatePresence>
                  {hoveredPlan === index && (
                    <motion.div
                      className="absolute inset-0 rounded-3xl pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at center, ${
                          plan.highlight
                            ? "rgba(99, 102, 241, 0.15)"
                            : "rgba(255, 255, 255, 0.05)"
                        }, transparent)`,
                        filter: "blur(20px)",
                      }}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
