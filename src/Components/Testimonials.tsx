import { motion } from "motion/react";

/**
 * Animated marquee row that loops a strip of testimonial images.
 * Images are expected in the Next.js /public folder (e.g., "/opinion1.webp").
 */
function MarqueeRow({
  sources,
  duration = 28,
  reverse = false,
  className = "",
}: {
  sources: string[];
  duration?: number; // seconds for one full cycle
  reverse?: boolean; // scroll direction
  className?: string;
}) {
  // Duplicate the list once so that translating -50% yields a seamless loop
  const strip = [...sources, ...sources];

  return (
    <div
      className={
        "relative overflow-hidden w-full " +
        // soft edge fade for nicer looping
        "[mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] " +
        className
      }
    >
      <motion.div
        aria-hidden
        className="flex items-center gap-6 min-w-max will-change-transform"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {strip.map((src, i) => (
          <img
            key={`${src}-${i}`}
            src={src}
            alt={`Customer testimonial ${((i % sources.length) + 1)
              .toString()
              .padStart(2, "0")}`}
            loading="lazy"
            className={
              // Big, readable, never cropped
              "h-64 sm:h-72 md:h-80 lg:h-[26rem] xl:h-[28rem] w-auto object-contain " +
              "rounded-xl border shadow-lg bg-background"
            }
          />
        ))}
      </motion.div>
    </div>
  );
}

const IMAGES = [
  "/opinion1.webp",
  "/opinion2.webp",
  "/opinion3.webp",
  "/opinion4.webp",
  "/opinion5.webp",
  "/opinion6.webp",
  "/opinion7.webp",
];

export default function Testimonials() {
  // Split images between rows for variety (odd/even split keeps sizes balanced)
  const rowA = IMAGES.filter((_, i) => i % 2 === 0); // 1,3,5,7
  const rowB = IMAGES.filter((_, i) => i % 2 === 1); // 2,4,6

  return (
    <section className="bg-background my-20 relative">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-center max-w-[720px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            Co mówią moi podopieczni?
          </h2>
          <p className="text-lg md:text-xl text-center mt-5 opacity-75">
            Nic tak nie świadczy o efektywności trenera jak rezultaty jego
            podopiecznych.
          </p>
        </motion.div>

        {/* Rows */}
        <div className="mt-10 flex flex-col gap-8">
          {/* Row 1: always visible */}
          <MarqueeRow sources={rowA} duration={26} />

          {/* Row 2: desktop only (hidden on mobile) */}
          <div className="hidden md:block">
            <MarqueeRow sources={rowB} duration={32} reverse />
          </div>
        </div>
      </div>
    </section>
  );
}
