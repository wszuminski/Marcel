import { motion } from "framer-motion";

type Reel = {
  title: string;
  mp4: string;
  webm?: string;
  poster?: string;
};

const reels: Reel[] = [
  {
    title: "Dynamika",
    mp4: "https://spimywukimroriapcuwj.supabase.co/storage/v1/object/public/videos/video1.mp4",
  },
  {
    title: "Technika",
    mp4: "https://spimywukimroriapcuwj.supabase.co/storage/v1/object/public/videos/video2.mp4",
  },
  {
    title: "Mobilność",
    mp4: "https://spimywukimroriapcuwj.supabase.co/storage/v1/object/public/videos/video3.mp4",
  },
];

export default function ReelsSection() {
  return (
    <section id="reels" className="py-24 bg-black">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight">
            Zobacz mnie w akcji
          </h2>
          <p className="mt-4 text-base sm:text-lg md:text-xl text-white/70">
            Krótkie materiały - zobacz co możesz osiągnąć
          </p>
        </div>

        {/* Reels grid */}
        {/* CHANGE VIDEO CARD SIZE HERE: 
            - Adjust max-w-xs (20rem/320px) to make cards smaller/larger
            - Options: max-w-[200px], max-w-[250px], max-w-xs (320px), max-w-sm (384px)
            - The mx-auto centers each card in its grid cell
            - gap-4 controls spacing: gap-2 (tighter), gap-4 (current), gap-6, gap-8 (wider)
        */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-4 lg:gap-0">
          {reels.map((r, i) => (
            <motion.figure
              key={i}
              className="relative group max-w-xs mx-auto w-full" // <- CARD MAX WIDTH SET HERE
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Neon glow under the card - remp4ed since we have border glow */}

              {/* Glowing Border Container */}
              <div className="relative rounded-2xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500">
                {/* Inner glow effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 blur-xl opacity-50" />

                {/* Card */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="
                    relative rounded-2xl overflow-hidden
                    bg-black
                    shadow-[0_10px_30px_rgba(0,0,0,0.35)]
                  "
                >
                  {/* 9:16 aspect ratio box 
                    - The aspect ratio is controlled here
                    - aspect-[9/16] maintains vertical video format
                    - You can change to aspect-[3/4] for less tall cards
                */}
                  <div className="aspect-[9/16] bg-black">
                    {" "}
                    {/* <- ASPECT RATIO SET HERE */}
                    <video
                      className="h-full w-full object-cover"
                      playsInline
                      muted
                      loop
                      autoPlay
                      preload="metadata"
                      poster={r.poster}
                    >
                      {r.webm && <source src={r.webm} type="video/webm" />}
                      <source src={r.mp4} type="video/mp4" />
                      {/* Fallback text */}
                      Twój przeglądarka nie obsługuje wideo.
                    </video>
                  </div>
                </motion.div>
              </div>

              {/* Caption */}
              <figcaption className="mt-4 text-center">
                <h3 className="font-semibold text-lg">{r.title}</h3>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        {/* Alternative centered layout for even smaller cards:
            Uncomment this section and comment out the grid above to use
        */}
        {/* 
        <div className="mt-12 flex flex-wrap justify-center gap-6">
          {reels.map((r, i) => (
            <motion.figure
              key={i}
              className="relative group w-[200px]" // <- FIXED WIDTH VERSION
              // ... rest of the component
            >
            ...
            </motion.figure>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
