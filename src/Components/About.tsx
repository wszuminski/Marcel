import { Dumbbell, Trophy, Heart, Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
  const cards = [
    {
      icon: Trophy,
      title: "Certyfikowany Trener",
      description:
        "NASM Certified Personal Trainer z specjalizacją w treningu siłowym i żywieniu sportowym",
      color: "from-pink-500/20 to-pink-600/20",
      iconColor: "text-pink-500",
      borderColor: "border-pink-500/30",
    },
    {
      icon: Users,
      title: "500+ Transformacji",
      description:
        "Pomogłem setkom klientów osiągnąć ich cele - od redukcji wagi po przygotowanie do zawodów",
      color: "from-indigo-500/20 to-indigo-600/20",
      iconColor: "text-indigo-500",
      borderColor: "border-indigo-500/30",
    },
    {
      icon: Dumbbell,
      title: "Spersonalizowane Plany",
      description:
        "Każdy program treningowy jest dopasowany do Twoich celów, poziomu sprawności i stylu życia",
      color: "from-purple-500/20 to-purple-600/20",
      iconColor: "text-purple-500",
      borderColor: "border-purple-500/30",
    },
    {
      icon: Heart,
      title: "Holistyczne Podejście",
      description:
        "Fitness to więcej niż ćwiczenia - skupiam się na zdrowiu mentalnym i zrównoważonym stylu życia",
      color: "from-red-500/20 to-pink-500/20",
      iconColor: "text-red-500",
      borderColor: "border-red-500/30",
    },
    {
      icon: Clock,
      title: "10+ Lat Doświadczenia",
      description:
        "Dekada pracy z klientami na każdym poziomie zaawansowania - od początkujących po zawodowców",
      color: "from-green-500/20 to-green-600/20",
      iconColor: "text-green-500",
      borderColor: "border-green-500/30",
    },
    {
      icon: Target,
      title: "Twój Cel, Moja Misja",
      description:
        "Niezależnie od tego, czy zaczynasz swoją przygodę z fitnessem, czy dążysz do perfekcji - jestem tu dla Ciebie",
      color: "from-cyan-500/20 to-cyan-500/20",
      iconColor: "text-cyan-500",
      borderColor: "border-cyan-500/30",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950 to relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
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
            Poznaj swojego{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Trenera
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Zmieniam życie poprzez spersonalizowane programy treningowe od ponad
            dekady. Każda transformacja to unikalna historia sukcesu.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div
                className={`relative h-full p-[1px] rounded-2xl bg-gradient-to-br ${card.color} ${card.borderColor} border backdrop-blur-sm`}
              >
                <div className="relative h-full bg-gray-900/90 rounded-2xl p-6 transition-all duration-300 group-hover:bg-gray-900/70">
                  {/* Glow effect on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl bg-gradient-to-br opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                    style={{
                      background: `linear-gradient(to bottom right, ${card.iconColor}, transparent)`,
                    }}
                  />

                  {/* Icon */}
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-4`}
                  >
                    <card.icon className={`w-6 h-6 ${card.iconColor}`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {card.description}
                  </p>

                  {/* Decorative element */}
                  <div className="absolute top-0 right-0 w-20 h-20 opacity-5">
                    <card.icon className="w-full h-full" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
