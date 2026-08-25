import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden">
      {/* Background video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=1920"
      >
        <source
          src="/assets/hero-video.mp4"
          type="video/mp4"
        />
      </video>

      {/* Gradient overlays for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#04140e]/80 via-[#04140e]/50 to-[#04140e]" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#04140e] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[#04140e]/30" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#2ecc71]/30 bg-[#2ecc71]/5 backdrop-blur-sm mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#2ecc71] animate-pulse" />
          <span className="text-xs font-medium text-[#2ecc71] tracking-wide uppercase">
            Designing Sovereignty for Life
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold max-w-5xl leading-[1.05] tracking-tight"
        >
          <span className="block text-white">Rooted in Nature,</span>
          <span className="block gradient-text text-glow-emerald">Driven by Sovereignty</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 text-lg md:text-xl text-gray-300 max-w-2xl leading-relaxed"
        >
          A blueprint for living systems — bridging ecological independence, biological innovation,
          and planetary stewardship.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row items-center gap-4"
        >
          <a
            href="#about"
            className="inline-flex items-center px-8 py-4 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold text-base hover:bg-[#34d97b] transition-all duration-300 hover:shadow-[0_0_40px_rgba(46,204,113,0.5)]"
          >
            Explore the Vision
          </a>
          <a
            href="#pillars"
            className="inline-flex items-center px-8 py-4 rounded-full border border-white/20 bg-white/5 backdrop-blur-sm text-white font-medium text-base hover:bg-white/10 transition-all duration-300"
          >
            Three Pillars
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-[#2ecc71]"
        >
          <span className="text-xs uppercase tracking-widest text-gray-400">Scroll</span>
          <ChevronDown size={24} />
        </motion.div>
      </motion.div>
    </section>
  );
}
