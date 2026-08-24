import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Globe2, Layers, Scale, ArrowRight } from 'lucide-react';

const pillars = [
  {
    icon: Globe2,
    title: 'Planetary Consciousness',
    subtitle: 'Identity beyond individualism.',
    path: '/planetary-consciousness',
    accent: 'from-emerald-400/20 to-teal-500/5',
    iconColor: 'text-emerald-400',
  },
  {
    icon: Layers,
    title: 'Symbiotic Design',
    subtitle: 'Commons + biosphere as decision stakeholders.',
    path: '/symbiotic-design',
    accent: 'from-sky-400/20 to-cyan-500/5',
    iconColor: 'text-sky-400',
  },
  {
    icon: Scale,
    title: 'Equitable Earthenomics',
    subtitle: 'Profitability aligned with regeneration.',
    path: '/equitable-earthenomics',
    accent: 'from-amber-400/20 to-orange-500/5',
    iconColor: 'text-amber-400',
  },
];

export default function Pillars() {
  return (
    <section id="pillars" className="py-24 md:py-32 px-6 lg:px-10 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#061d14]/50 to-transparent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
            Three Pillars
          </span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6">
            <span className="gradient-text-light">The Foundations of Sovereignty</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Three interconnected domains that together form a complete framework for planetary
            coexistence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              <Link
                to={pillar.path}
                className="glass-card glass-card-hover rounded-3xl p-8 lg:p-10 block group relative overflow-hidden h-full"
              >
                {/* Gradient accent */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${pillar.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-2xl bg-[#04140e] border border-emerald-500/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <pillar.icon size={28} className={pillar.iconColor} />
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-3">{pillar.title}</h3>
                  <p className="text-base text-gray-400 mb-8 leading-relaxed">{pillar.subtitle}</p>

                  <div className="flex items-center gap-2 text-[#2ecc71] font-medium text-sm group-hover:gap-3 transition-all duration-300">
                    Explore
                    <ArrowRight size={16} />
                  </div>
                </div>

                {/* Bottom glow line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-[#2ecc71] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
