import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Dumbbell,
  Trophy,
  Users,
  Clock,
  Star,
  CheckCircle,
  Target,
  Heart,
  Zap,
} from "lucide-react";

interface Stat {
  number: string;
  label: string;
  icon: React.ElementType;
}

interface Testimonial {
  name: string;
  role: string;
  content: string;
  image: string;
  rating: number;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ElementType;
}

const stats: Stat[] = [
  { number: "500+", label: "Clients Transformed", icon: Users },
  { number: "5+", label: "Years Experience", icon: Clock },
  { number: "98%", label: "Success Rate", icon: Trophy },
  { number: "24/7", label: "Support Available", icon: Heart },
];

const testimonials: Testimonial[] = [
  {
    name: "Sarah Johnson",
    role: "Marketing Executive",
    content:
      "Lost 30 pounds in 4 months! The personalized approach made all the difference.",
    image:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Mike Chen",
    role: "Software Engineer",
    content:
      "Finally found a trainer who understands my busy schedule. Results speak for themselves!",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
  {
    name: "Emily Rodriguez",
    role: "Teacher",
    content:
      "The nutrition guidance was game-changing. I feel stronger and more confident than ever.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    rating: 5,
  },
];

const achievements: Achievement[] = [
  {
    title: "Certified Personal Trainer",
    description:
      "NASM-CPT certified with advanced specializations in strength training and nutrition",
    icon: Trophy,
  },
  {
    title: "Nutrition Specialist",
    description:
      "Precision Nutrition Level 1 certified to optimize your meal plans and dietary habits",
    icon: Target,
  },
  {
    title: "Injury Prevention Expert",
    description:
      "Corrective Exercise Specialist helping you train safely and recover faster",
    icon: CheckCircle,
  },
  {
    title: "Mindset Coach",
    description:
      "Mental performance coaching to build lasting habits and overcome plateaus",
    icon: Zap,
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

const TestimonialCard: React.FC<{
  testimonial: Testimonial;
  index: number;
}> = ({ testimonial, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.6, delay: index * 0.2 }}
    className="bg-zinc-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-6 hover:border-purple-500/40 transition-all duration-300"
  >
    <div className="flex items-center mb-4">
      <img
        src={testimonial.image}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <h4 className="text-white font-semibold">{testimonial.name}</h4>
        <p className="text-gray-400 text-sm">{testimonial.role}</p>
      </div>
    </div>
    <div className="flex mb-3">
      {[...Array(testimonial.rating)].map((_, i) => (
        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-300 italic">"{testimonial.content}"</p>
  </motion.div>
);

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
            Why Choose <span className="text-purple-400">Me?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            With proven results, personalized approach, and unwavering
            commitment to your success, I'm here to transform not just your
            body, but your entire relationship with fitness.
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
              <Dumbbell className="w-8 h-8 text-purple-400 mr-3" />
              What Sets Me Apart
            </h3>

            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Personalized Training Programs
                  </h4>
                  <p className="text-gray-300">
                    Every workout is tailored to your specific goals, fitness
                    level, and lifestyle constraints.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Holistic Approach
                  </h4>
                  <p className="text-gray-300">
                    Combining strength training, nutrition coaching, and mindset
                    work for lasting transformation.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Flexible Scheduling
                  </h4>
                  <p className="text-gray-300">
                    Online and in-person sessions that work around your busy
                    schedule.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-purple-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Ongoing Support
                  </h4>
                  <p className="text-gray-300">
                    24/7 access to guidance, motivation, and accountability
                    through our app.
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
                src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&h=800&fit=crop"
                alt="Personal Trainer"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/80 via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <h4 className="text-white text-2xl font-bold mb-2">
                  Alex Thompson
                </h4>
                <p className="text-purple-400 font-semibold">
                  Certified Personal Trainer & Nutrition Coach
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
            Credentials & Expertise
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

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-white mb-8 text-center">
            What My Clients Say
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.name}
                testimonial={testimonial}
                index={index}
              />
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center mt-16"
        >
          <h3 className="text-3xl font-bold text-white mb-6">
            Ready to Transform Your Life?
          </h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied clients who've achieved their fitness
            goals. Let's create your personalized transformation plan today.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-colors duration-300"
          >
            Start Your Journey Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default function WhyMeSectionDemo() {
  return <WhyMeSection />;
}
