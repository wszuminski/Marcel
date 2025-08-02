//@ts-nocheck
import { useState } from "react";
import { motion } from "framer-motion";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";

export function TrainingVideosSection() {
  const [playingVideo, setPlayingVideo] = useState(null);
  const [mutedVideos, setMutedVideos] = useState({});

  const videos = [
    {
      id: 1,
      title: "Trening Siłowy",
      description:
        "Intensywny trening na budowę masy mięśniowej z wykorzystaniem ciężarów",
      videoUrl: "/training-video-1.mp4",
      thumbnail: "/video-thumb-1.jpg",
      duration: "45 min",
      category: "Siła",
    },
    {
      id: 2,
      title: "HIIT & Cardio",
      description:
        "Wysokointensywny trening interwałowy dla maksymalnego spalania tłuszczu",
      videoUrl: "/training-video-2.mp4",
      thumbnail: "/video-thumb-2.jpg",
      duration: "30 min",
      category: "Cardio",
    },
    {
      id: 3,
      title: "Mobilność & Stretching",
      description:
        "Rozciąganie i ćwiczenia mobilności dla lepszej elastyczności ciała",
      videoUrl: "/training-video-3.mp4",
      thumbnail: "/video-thumb-3.jpg",
      duration: "20 min",
      category: "Mobilność",
    },
  ];

  const togglePlay = (videoId) => {
    setPlayingVideo(playingVideo === videoId ? null : videoId);
  };

  const toggleMute = (videoId, e) => {
    e.stopPropagation();
    setMutedVideos((prev) => ({
      ...prev,
      [videoId]: !prev[videoId],
    }));
  };

  return (
    <section className="py-20 px-4 bg-zinc-950 relative overflow-hidden">
      {/* Background decoration */}

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
            Zobacz Mnie w{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
              Akcji
            </span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            Poznaj mój styl treningu. Każda sesja to połączenie profesjonalizmu,
            motywacji i indywidualnego podejścia do klienta.
          </p>
        </motion.div>

        {/* Videos Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {videos.map((video, index) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative rounded-xl overflow-hidden bg-zinc-800 border border-zinc-700 hover:border-purple-500/50 transition-all duration-300">
                {/* Video/Thumbnail Container */}
                <div className="relative aspect-video">
                  {playingVideo === video.id ? (
                    <video
                      src={video.videoUrl}
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted={mutedVideos[video.id] !== false}
                      playsInline
                    />
                  ) : (
                    <img
                      src={video.thumbnail}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  )}

                  {/* Overlay with Play Button */}
                  <div
                    className="absolute inset-0 bg-black/40 flex items-center justify-center cursor-pointer transition-opacity duration-300 group-hover:bg-black/50"
                    onClick={() => togglePlay(video.id)}
                  >
                    {playingVideo === video.id ? (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <Pause className="w-8 h-8 text-white" />
                      </div>
                    ) : (
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform">
                        <Play className="w-8 h-8 text-white fill-current" />
                      </div>
                    )}
                  </div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4 bg-purple-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {video.category}
                  </div>

                  {/* Duration Badge */}
                  <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
                    {video.duration}
                  </div>

                  {/* Mute Button */}
                  {playingVideo === video.id && (
                    <button
                      onClick={(e) => toggleMute(video.id, e)}
                      className="absolute bottom-4 right-4 bg-black/70 text-white p-2 rounded-full hover:bg-black/90 transition-colors"
                    >
                      {mutedVideos[video.id] === false ? (
                        <Volume2 className="w-4 h-4" />
                      ) : (
                        <VolumeX className="w-4 h-4" />
                      )}
                    </button>
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {video.title}
                  </h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {video.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-400 mb-6">Chcesz trenować ze mną?</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105">
              Umów się na trening
            </button>
            <button className="px-8 py-3 border-2 border-purple-500 text-purple-400 font-semibold rounded-full hover:bg-purple-500 hover:text-white transition-all duration-300">
              Zobacz więcej filmów
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
