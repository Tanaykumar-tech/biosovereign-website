import { motion } from 'framer-motion';
import { Clock, Brain, Globe, Leaf, Recycle, Sparkles, Zap } from 'lucide-react';

const conceptCards = [
  {
    icon: Clock,
    color: 'text-amber-400',
    bg: 'bg-amber-400/10',
    title: 'Chronosymbinomics',
    desc: 'Temporal responsibility & intergenerational equity.',
  },
  {
    icon: Brain,
    color: 'text-pink-400',
    bg: 'bg-pink-400/10',
    title: 'Neurosymbinomics',
    desc: 'Re-patterning the anthropocentric brain.',
  },
  {
    icon: Globe,
    color: 'text-sky-400',
    bg: 'bg-sky-400/10',
    title: 'Anthrogeosophy',
    desc: 'Earth-rooted philosophy & ethics.',
  },
  {
    icon: Leaf,
    color: 'text-[#2ecc71]',
    bg: 'bg-[#2ecc71]/10',
    title: 'Earthenomics',
    desc: 'Regenerative and equitable economies.',
  },
  {
    icon: Recycle,
    color: 'text-teal-300',
    bg: 'bg-teal-300/10',
    title: 'Biojuris',
    desc: 'Biojuris governs the legal covenant between all forms of life.',
  },
];

const whyNow = [
  {
    icon: Globe,
    color: 'text-sky-400',
    text: 'Climate breakdown demands regeneration, not resilience.',
  },
  {
    icon: Brain,
    color: 'text-pink-400',
    text: 'Neuroscience shows we can rewire towards ecological empathy.',
  },
  {
    icon: Zap,
    color: 'text-amber-400',
    text: 'AI & quantum systems must evolve into symbiotic infrastructures.',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 px-6 lg:px-10 overflow-hidden">
      {/* Ambient glow */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#2ecc71]/5 blur-3xl" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 rounded-full bg-[#0f3322]/40 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          {/* Left column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <Sparkles size={20} className="text-[#2ecc71]" />
              <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
                About
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8 leading-tight"
            >
              <span className="gradient-text">About BioSovereign</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-300 leading-relaxed mb-12 max-w-xl"
            >
              BioSovereign is not just a brand: it is a blueprint for living systems. It bridges
              ecological independence, biological innovation, and planetary stewardship to address
              climate change, systemic imbalance, and the future of life on Earth.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {conceptCards.map((card, idx) => (
                <motion.div
                  key={card.title}
                  variants={itemVariants}
                  className={`glass-card rounded-2xl p-5 flex items-start gap-4 ${
                    idx === 4 ? 'sm:col-span-2' : ''
                  }`}
                >
                  <div className={`shrink-0 w-11 h-11 rounded-xl ${card.bg} flex items-center justify-center`}>
                    <card.icon size={22} className={card.color} />
                  </div>
                  <div>
                    <h3 className="font-semibold text-white text-base mb-1">{card.title}</h3>
                    <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right column — Why Now */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="lg:mt-20"
          >
            <div className="glass-card rounded-3xl p-8 md:p-10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 rounded-full bg-[#2ecc71]/10 blur-3xl" />
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 relative z-10">
                Why Now?
              </h3>
              <p className="text-sm text-gray-400 mb-8 relative z-10">
                The convergence of crisis and capability.
              </p>

              <div className="space-y-6 relative z-10">
                {whyNow.map((point, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.15 }}
                    className="flex items-start gap-4"
                  >
                    <div className="shrink-0 w-12 h-12 rounded-xl bg-[#04140e] border border-emerald-500/20 flex items-center justify-center">
                      <point.icon size={22} className={point.color} />
                    </div>
                    <p className="text-base text-gray-200 leading-relaxed pt-2">{point.text}</p>
                  </motion.div>
                ))}
              </div>

              <div className="mt-10 pt-8 border-t border-emerald-500/10 relative z-10">
                <p className="text-sm text-gray-400 italic">
                  "The question is no longer whether we must change, but whether we can change fast
                  enough."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
