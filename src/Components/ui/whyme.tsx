import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Users,
  Calendar,
  Shield,
  Target,
  Heart,
  Sparkles,
  TrendingUp,
  Brain,
  Apple,
  FlameKindling,
  Medal,
  UserCheck,
} from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  { number: "500+", label: "Zmienionych Życii", icon: Users },
  { number: "5+", label: "Lat Doświadczenia", icon: Calendar },
  { number: "98%", label: "Skuteczność", icon: TrendingUp },
  { number: "24/7", label: "Wsparcie Online", icon: Heart },
];

const achievements: Achievement[] = [
  {
    title: "Certyfikowany Trener Personalny",
    description:
      "Certyfikat NASM-CPT z zaawansowanymi specjalizacjami w treningu siłowym i żywieniu",
    icon: Medal,
  },
  {
    title: "Specjalista ds. Żywienia",
    description:
      "Certyfikat Precision Nutrition Level 1 do optymalizacji planów żywieniowych",
    icon: Apple,
  },
  {
    title: "Ekspert Prewencji Urazów",
    description:
      "Specjalista ćwiczeń korekcyjnych pomagający trenować bezpiecznie i szybciej się regenerować",
    icon: Shield,
  },
  {
    title: "Coach Mentalny",
    description:
      "Coaching mentalny do budowania trwałych nawyków i przełamywania barier",
    icon: Brain,
  },
];

const BGPattern: React.FC<{ className?: string }> = ({ className = "" }) => (
  <div
    className={`absolute inset-0 z-[-10] size-full ${className}`}
    style={{
      backgroundImage:
        "radial-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px)",
      backgroundSize: "24px 24px",
      maskImage:
        "radial-gradient(ellipse at center, var(--background), transparent)",
    }}
  />
);

const StatCard: React.FC<{ stat: Stat; index: number }> = ({ stat, index }) => {
  const [count, setCount] = useState(0);
  const targetNumber = parseInt(stat.number.replace(/\D/g, ""));

  useEffect(() => {
    const timer = setTimeout(() => {
      const increment = targetNumber / 50;
      const interval = setInterval(() => {
        setCount((prev) => {
          if (prev >= targetNumber) {
            clearInterval(interval);
            return targetNumber;
          }
          return Math.min(prev + increment, targetNumber);
        });
      }, 30);
      return () => clearInterval(interval);
    }, index * 200);

    return () => clearTimeout(timer);
  }, [targetNumber, index]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-zinc-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 text-center hover:border-purple-500/40 transition-all duration-300"
    >
      <stat.icon className="w-8 h-8 text-purple-400 mx-auto mb-3" />
      <div className="text-3xl font-bold text-white mb-2">
        {Math.floor(count)}
        {stat.number.replace(/\d/g, "")}
      </div>
      <div className="text-gray-300 text-sm">{stat.label}</div>
    </motion.div>
  );
};

const AchievementCard: React.FC<{
  achievement: Achievement;
  index: number;
}> = ({ achievement, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    className="flex items-start space-x-4 p-4 bg-zinc-800/30 rounded-lg border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
  >
    <div className="bg-purple-500/20 p-3 rounded-lg">
      <achievement.icon className="w-6 h-6 text-purple-400" />
    </div>
    <div>
      <h4 className="text-white font-semibold mb-2">{achievement.title}</h4>
      <p className="text-gray-300 text-sm">{achievement.description}</p>
    </div>
  </motion.div>
);

const WhyMeSection: React.FC = () => {
  return (
    <section className="relative bg-zinc-950 py-20 overflow-hidden">
      <BGPattern />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Dlaczego <span className="text-purple-400">Ja?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ze sprawdzonymi rezultatami, spersonalizowanym podejściem i
            niezachwianym zaangażowaniem w Twój sukces, jestem tu, aby zmienić
            nie tylko Twoje ciało, ale całe podejście do fitnessu.
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Left Column - Key Benefits */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-3xl font-bold text-white mb-8 flex items-center">
              <Activity className="w-8 h-8 text-purple-400 mr-3" />
              Co Mnie Wyróżnia
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <Sparkles className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Spersonalizowane Programy Treningowe
                  </h4>
                  <p className="text-gray-300">
                    Każdy trening dostosowany do Twoich celów, poziomu
                    sprawności i ograniczeń czasowych.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Holistyczne Podejście
                  </h4>
                  <p className="text-gray-300">
                    Łączenie treningu siłowego, coachingu żywieniowego i pracy
                    nad mentalnością dla trwałej transformacji.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <FlameKindling className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Elastyczne Terminy
                  </h4>
                  <p className="text-gray-300">
                    Sesje online i stacjonarne dopasowane do Twojego napiętego
                    harmonogramu.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <UserCheck className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Ciągłe Wsparcie
                  </h4>
                  <p className="text-gray-300">
                    Całodobowy dostęp do wskazówek, motywacji i wsparcia przez
                    naszą aplikację.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Trainer Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden">
              <img
                src="/image0.jpeg"
                alt="Trener Personalny"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-bold mb-2">
                  Marcel Kaczmarski
                </h4>
                <p className="text-purple-400 font-semibold">
                  Certyfikowany Trener Personalny i Coach Żywieniowy
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            Kwalifikacje i Ekspertyza
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map((achievement, index) => (
              <AchievementCard
                key={achievement.title}
                achievement={achievement}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default function WhyMeSectionDemo() {
  return <WhyMeSection />;
}
