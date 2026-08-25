import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Quote } from 'lucide-react';

export default function FounderSection() {
  return (
    <section id="founder" className="py-24 md:py-32 px-6 lg:px-10 relative overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-[#2ecc71]/5 blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-[#2ecc71]/20 to-transparent blur-2xl" />
            <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 aspect-[4/5]">
              <img
                   src="/assets/images/founder-photo.png"
                alt="Founder of BioSovereign"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#04140e] via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="text-white font-semibold text-lg">[Anish Kumar Sreedharan]</p>
                <p className="text-[#2ecc71] text-sm">Founder & Visionary</p>
              </div>
            </div>
          </motion.div>

          {/* Right: content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
              Meet the Founder
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-8 leading-tight">
              <span className="gradient-text-light">Meet the Founder</span>
            </h2>

            <div className="relative mb-8">
              <Quote size={32} className="text-[#2ecc71]/30 absolute -top-2 -left-2" />
              <p className="text-lg text-gray-300 leading-relaxed pl-8">
                The founder of BioSovereign, envisions humanity's evolution from
                citizens to ecozens — moving beyond exploitation toward coexistence. He integrates
                ecology, neuroscience, regenerative economics, and indigenous wisdom into actionable
                solutions for planetary well-being.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {[
                { label: 'Ecozens', value: 'Vision' },
                { label: 'Disciplines', value: '4+' },
                { label: 'Wisdom', value: 'Indigenous' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="glass-card rounded-xl p-4 text-center"
                >
                  <p className="text-[#2ecc71] font-bold text-lg">{stat.value}</p>
                  <p className="text-xs text-gray-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>

            <Link
              to="/founder"
              className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold hover:bg-[#34d97b] transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] group"
            >
              Read Full Profile
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
