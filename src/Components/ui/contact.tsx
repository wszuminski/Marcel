//@ts-nocheck
import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  MessageSquare,
  Building,
  ArrowRight,
  Sparkles,
  CheckCircle,
  Clock,
  Globe,
  Shield,
  Zap,
  Calendar,
} from "lucide-react";

const contactMethods = [
  {
    icon: Mail,
    title: "Napisz e-mail",
    description: "Skontaktuj się ze mną przez e-mail",
    value: "dhileepkumargm@21st.dev",
    link: "mailto:dhileepkumargm@21st.dev",
    gradient: "from-blue-500/20 to-cyan-500/20",
    hoverColor: "blue",
  },
  {
    icon: Phone,
    title: "Zadzwoń",
    description: "Porozmawiajmy bezpośrednio",
    value: "+48 123 456 789",
    link: "tel:+48123456789",
    gradient: "from-green-500/20 to-emerald-500/20",
    hoverColor: "green",
  },
  {
    icon: MapPin,
    title: "Lokalizacja",
    description: "Trenuję stacjonarnie i online",
    value: "Poznań, Polska",
    link: "https://maps.google.com/?q=Pozna%C5%84%2C%20Polska",
    gradient: "from-purple-500/20 to-pink-500/20",
    hoverColor: "purple",
  },
];

export function PremiumContact() {
  const [formData, setFormData] = useState({
    imie: "",
    nazwisko: "",
    email: "",
    telefon: "",
    wiek: "",
    plec: "",
    cele: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.imie.trim()) newErrors.imie = "Imię jest wymagane";
    if (!formData.nazwisko.trim())
      newErrors.nazwisko = "Nazwisko jest wymagane";

    if (!formData.email.trim()) {
      newErrors.email = "E-mail jest wymagany";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Podaj poprawny adres e-mail";
    }

    if (!formData.telefon.trim()) {
      newErrors.telefon = "Numer telefonu jest wymagany";
    } else {
      const digits = formData.telefon.replace(/\D/g, "");
      if (digits.length < 7)
        newErrors.telefon = "Podaj poprawny numer telefonu";
    }

    if (!formData.wiek.trim()) {
      newErrors.wiek = "Wiek jest wymagany";
    } else {
      const age = parseInt(formData.wiek, 10);
      if (Number.isNaN(age) || age < 10 || age > 100) {
        newErrors.wiek = "Podaj wiek w zakresie 10–100";
      }
    }

    if (!formData.plec.trim()) newErrors.plec = "Wybierz płeć";

    if (!formData.cele.trim()) {
      newErrors.cele = "To pole jest wymagane";
    } else if (formData.cele.trim().length < 10) {
      newErrors.cele = "Napisz minimum 10 znaków";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Symulacja wywołania API
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.23, 0.86, 0.39, 0.96] },
    },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  return (
    <section
      className="relative py-32 bg-gradient-to-b from-black via-indigo-950/20 to-black text-white overflow-hidden"
      id="contact"
    >
      {/* Tło */}
      <div className="absolute inset-0">
        {/* Ruchome kule */}
        <motion.div
          className="absolute top-1/3 left-1/5 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"
          animate={{ x: [0, 200, 0], y: [0, 100, 0], scale: [1, 1.3, 1] }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-80 h-80 bg-rose-400/10 rounded-full blur-3xl"
          animate={{ x: [0, -150, 0], y: [0, -80, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        {/* Linie komunikacyjne */}
        <div className="absolute inset-0">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px h-40 bg-gradient-to-b from-transparent via-white/20 to-transparent"
              style={{
                left: `${20 + i * 15}%`,
                top: `${25 + i * 8}%`,
                transform: `rotate(${30 + i * 20}deg)`,
              }}
              animate={{ opacity: [0.2, 0.8, 0.2], scaleY: [1, 1.5, 1] }}
              transition={{
                duration: 3 + i * 0.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
            />
          ))}
        </div>
      </div>

      <motion.div
        ref={containerRef}
        className="relative z-10 max-w-7xl mx-auto px-6"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Nagłówek */}
        <motion.div className="text-center mb-20" variants={fadeInUp}>
          <motion.h2
            className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight"
            variants={fadeInUp}
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
              Skontaktuj się
            </span>
            <br />
            <motion.span
              className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-purple-300 to-rose-300"
              animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              style={{ backgroundSize: "200% 200%" }}
            >
              ze mną
            </motion.span>
          </motion.h2>

          <motion.p
            className="text-xl sm:text-2xl text-white/60 max-w-4xl mx-auto leading-relaxed"
            variants={fadeInUp}
          >
            Chcesz poprawić sylwetkę, zdrowie i samopoczucie? Napisz do mnie o
            swoich celach, a pomogę Ci ułożyć skuteczny plan działania.
          </motion.p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Formularz kontaktowy */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Wyślij wiadomość
              </h3>
              <p className="text-white/60 text-lg">
                Uzupełnij krótki formularz — odpowiem maksymalnie w ciągu 24
                godzin.
              </p>
            </div>

            <AnimatePresence mode="wait">
              {!isSubmitted ? (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="space-y-6"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Imię */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text"
                        placeholder="Imię"
                        value={formData.imie}
                        onChange={(e) =>
                          handleInputChange("imie", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.imie ? "border-red-400" : "border-white/[0.15]"
                        }`}
                      />
                      {errors.imie && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.imie}
                        </motion.p>
                      )}
                    </div>

                    {/* Nazwisko */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="text"
                        placeholder="Nazwisko"
                        value={formData.nazwisko}
                        onChange={(e) =>
                          handleInputChange("nazwisko", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.nazwisko
                            ? "border-red-400"
                            : "border-white/[0.15]"
                        }`}
                      />
                      {errors.nazwisko && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.nazwisko}
                        </motion.p>
                      )}
                    </div>

                    {/* E-mail */}
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="email"
                        placeholder="E-mail"
                        value={formData.email}
                        onChange={(e) =>
                          handleInputChange("email", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.email
                            ? "border-red-400"
                            : "border-white/[0.15]"
                        }`}
                      />
                      {errors.email && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.email}
                        </motion.p>
                      )}
                    </div>

                    {/* Telefon */}
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="tel"
                        placeholder="Numer telefonu"
                        value={formData.telefon}
                        onChange={(e) =>
                          handleInputChange("telefon", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.telefon
                            ? "border-red-400"
                            : "border-white/[0.15]"
                        }`}
                      />
                      {errors.telefon && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.telefon}
                        </motion.p>
                      )}
                    </div>

                    {/* Wiek */}
                    <div className="relative">
                      <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <input
                        type="number"
                        min={10}
                        max={100}
                        placeholder="Wiek"
                        value={formData.wiek}
                        onChange={(e) =>
                          handleInputChange("wiek", e.target.value)
                        }
                        className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all ${
                          errors.wiek ? "border-red-400" : "border-white/[0.15]"
                        }`}
                      />
                      {errors.wiek && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.wiek}
                        </motion.p>
                      )}
                    </div>

                    {/* Płeć */}
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-white/40" />
                      <select
                        value={formData.plec}
                        onChange={(e) =>
                          handleInputChange("plec", e.target.value)
                        }
                        className={`w-full pl-10 pr-10 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all appearance-none ${
                          errors.plec ? "border-red-400" : "border-white/[0.15]"
                        }`}
                      >
                        <option value="" className="bg-black">
                          Płeć
                        </option>
                        <option value="Kobieta" className="bg-black">
                          Kobieta
                        </option>
                        <option value="Mężczyzna" className="bg-black">
                          Mężczyzna
                        </option>
                        <option
                          value="Inna / wolę nie mówić"
                          className="bg-black"
                        >
                          Inna / wolę nie mówić
                        </option>
                      </select>
                      {errors.plec && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2"
                        >
                          {errors.plec}
                        </motion.p>
                      )}
                    </div>
                  </div>

                  {/* Cele i oczekiwania */}
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-4 h-5 w-5 text-white/40" />
                    <textarea
                      placeholder="Napisz mi swoje cele krótko- i długoterminowe, bądź swoją propozycję — czego byś ode mnie oczekiwał/a (trener personalny)."
                      rows={6}
                      value={formData.cele}
                      onChange={(e) =>
                        handleInputChange("cele", e.target.value)
                      }
                      className={`w-full pl-10 pr-4 py-4 bg-white/[0.08] border rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-indigo-400 transition-all resize-none ${
                        errors.cele ? "border-red-400" : "border-white/[0.15]"
                      }`}
                    />
                    {errors.cele && (
                      <motion.p
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-red-400 text-sm mt-2"
                      >
                        {errors.cele}
                      </motion.p>
                    )}
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full relative group overflow-hidden bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-medium py-4 px-6 rounded-xl transition-all disabled:opacity-50"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                      initial={{ x: "-100%" }}
                      whileHover={{ x: "100%" }}
                      transition={{ duration: 0.5 }}
                    />
                    <span className="relative flex items-center justify-center gap-2">
                      {isSubmitting ? (
                        <motion.div
                          className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            ease: "linear",
                          }}
                        />
                      ) : (
                        <>
                          <Send className="h-5 w-5" />
                          Wyślij wiadomość
                          <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </span>
                  </motion.button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center py-12"
                >
                  <motion.div
                    className="w-20 h-20 rounded-full bg-green-500/20 border border-green-400/30 flex items-center justify-center mx-auto mb-6"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                  >
                    <CheckCircle className="w-10 h-10 text-green-400" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    Wiadomość wysłana!
                  </h3>
                  <p className="text-white/60 text-lg mb-6">
                    Dziękuję za kontakt. Odpowiem w ciągu 24 godzin.
                  </p>
                  <motion.button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        imie: "",
                        nazwisko: "",
                        email: "",
                        telefon: "",
                        wiek: "",
                        plec: "",
                        cele: "",
                      });
                    }}
                    className="px-6 py-3 bg-white/[0.08] border border-white/[0.15] rounded-full text-white hover:bg-white/[0.12] transition-all"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Wyślij kolejną wiadomość
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Metody kontaktu */}
          <motion.div className="space-y-8" variants={fadeInUp}>
            <div>
              <h3 className="text-3xl font-bold text-white mb-4">
                Inne formy kontaktu
              </h3>
              <p className="text-white/60 text-lg">
                Wybierz sposób, który najbardziej Ci odpowiada.
              </p>
            </div>

            <div className="space-y-6">
              {contactMethods.map((method, index) => (
                <motion.a
                  key={index}
                  href={method.link}
                  className="block p-6 bg-white/[0.05] backdrop-blur-xl rounded-2xl border border-white/[0.15] hover:bg-white/[0.08] transition-all group"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, y: -2 }}
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${method.gradient} border border-white/20 flex items-center justify-center`}
                      whileHover={{ scale: 1.1, rotateY: 180 }}
                      transition={{ duration: 0.6 }}
                    >
                      <method.icon className="w-7 h-7 text-white" />
                    </motion.div>
                    <div className="flex-1">
                      <h4 className="text-xl font-semibold text-white mb-1">
                        {method.title}
                      </h4>
                      <p className="text-white/60 text-sm mb-2">
                        {method.description}
                      </p>
                      <p className="text-white font-medium">{method.value}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-white/40 group-hover:text-white group-hover:translate-x-1 transition-all" />
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Pływające elementy */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            style={{ left: `${10 + i * 12}%`, top: `${20 + i * 10}%` }}
            animate={{
              y: [0, -40, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.6,
            }}
          />
        ))}
      </motion.div>
    </section>
  );
}
