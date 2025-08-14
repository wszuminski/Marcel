//@ts-nocheck
import { useEffect, useState } from "react";
import { Dumbbell, Trophy, Heart, Users, Target, Clock } from "lucide-react";
import { motion } from "framer-motion";

// ⭐ tsParticles (React) — lightweight bundle
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

export function About() {
  // Initialize tsParticles engine once
  const [particlesReady, setParticlesReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine: any) => {
      // load only the slim bundle for small size; switch to loadFull for advanced effects
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

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
    <section className="py-20 px-4 bg-gradient-to-b from-black to-zinc-950 relative overflow-hidden">
      {/* Starfield (tsParticles) */}
      <div className="absolute inset-0">
        {/* Background blobs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl z-0" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl z-0" />

        {/* Stars above blobs but under content */}
        {particlesReady && (
          <Particles
            id="about-stars"
            className="absolute inset-0 z-[1] pointer-events-none"
            options={{
              fpsLimit: 60,
              background: { color: "transparent" },
              fullScreen: { enable: false },
              detectRetina: true,
              particles: {
                number: {
                  value: 180,
                  density: { enable: true, area: 900 },
                },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                size: {
                  value: { min: 0.4, max: 1.8 },
                },
                opacity: {
                  value: { min: 0.25, max: 0.9 },
                  animation: {
                    enable: true,
                    speed: 0.6,
                    minimumValue: 0.25,
                    sync: false,
                  },
                },
                move: {
                  enable: true,
                  direction: "none",
                  random: true,
                  speed: 0.15, // slow drift for a calm starfield
                  straight: false,
                  outModes: {
                    default: "out",
                  },
                },
              },
              interactivity: {
                events: {
                  onHover: { enable: true, mode: "slow" }, // subtle parallax-esque feel
                  resize: true,
                },
                modes: {
                  slow: { factor: 1.5, radius: 200 },
                },
              },
            }}
          />
        )}
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

        {/* Hero Image Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-20 relative"
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left - Trainer Image */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-2xl opacity-30 group-hover:opacity-40 transition-opacity" />
              <img
                src="/image3.jpeg"
                alt="Personal Trainer"
                className="relative rounded-3xl w-full h-[500px] object-cover shadow-2xl"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-8 rounded-b-3xl">
                <h3 className="text-3xl font-bold text-white mb-2">
                  Marcel Kaczmarski
                </h3>
                <p className="text-purple-400 font-medium">
                  Master Trainer & Nutrition Coach
                </p>
              </div>
            </div>

            {/* Right - Personal Message */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-white mb-4">
                  Cześć! Jestem Marcel
                </h3>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Fitness to moja pasja, którą dzielę się z innymi od ponad 10
                  lat. Wierzę, że każdy zasługuje na to, by czuć się silny,
                  zdrowy i pewny siebie.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Moje podejście łączy naukową wiedzę z praktycznym
                  doświadczeniem. Nie stosuję uniwersalnych rozwiązań - każdy
                  plan jest tak unikalny jak Ty.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Razem stworzymy program, który nie tylko zmieni Twoje ciało,
                  ale też sposób myślenia o zdrowiu i fitness.
                </p>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">500+</div>
                  <div className="text-sm text-gray-400">Klientów</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">10+</div>
                  <div className="text-sm text-gray-400">Lat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-purple-400">98%</div>
                  <div className="text-sm text-gray-400">Sukcesu</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Cards Grid with Images */}
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

        {/* Action Images Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-white text-center mb-12">
            W Akcji
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Training Session */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/image0.jpeg"
                alt="Training session"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Trening Personalny
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Indywidualne sesje treningowe
                  </p>
                </div>
              </div>
            </div>

            {/* Nutrition Coaching */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/image2 (1).jpeg"
                alt="Gym coaching"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110 object-[center_30%]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Coaching Grupowy
                  </h4>
                  <p className="text-gray-300 text-sm">Motywacja w grupie</p>
                </div>
              </div>
            </div>

            {/* Results */}
            <div className="relative group overflow-hidden rounded-2xl">
              <img
                src="/image1 (1).jpeg"
                alt="Fitness results"
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent flex items-end p-6">
                <div>
                  <h4 className="text-white font-semibold text-lg">
                    Wymierne Rezultaty
                  </h4>
                  <p className="text-gray-300 text-sm">
                    Transformacje, które inspirują
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
