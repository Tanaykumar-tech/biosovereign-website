import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  Brain,
  Leaf,
  Scale,
  Globe2,
  Heart,
  Target,
  Quote,
  Sparkles,
} from 'lucide-react';

const disciplines = [
  { icon: Leaf, label: 'Ecology', color: 'text-[#2ecc71]' },
  { icon: Brain, label: 'Neuroscience', color: 'text-pink-400' },
  { icon: Scale, label: 'Regenerative Economics', color: 'text-amber-400' },
  { icon: Globe2, label: 'Indigenous Wisdom', color: 'text-sky-400' },
];

const galleryImages = [
  'https://images.pexels.com/photos/1268076/pexels-photo-1268076.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/1108572/pexels-photo-1108572.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/957024/forest-trees-perspective-bright-957024.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/33109/fall-autumn-red-season.jpg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&w=600',
  'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=600',
];

export default function Founder() {
  return (
    <div className="min-h-screen bg-[#04140e] pt-20">
      {/* Hero band */}
      <div className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#061d14] to-[#04140e]" />
        <div className="absolute top-1/4 right-1/4 w-96 h-96 rounded-full bg-[#2ecc71]/5 blur-3xl" />

        <div className="max-w-5xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#2ecc71] transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="lg:col-span-2"
            >
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl bg-gradient-to-br from-[#2ecc71]/20 to-transparent blur-2xl" />
                <div className="relative rounded-3xl overflow-hidden border border-emerald-500/20 aspect-square">
                  <img
                    src="/assets/images/founder-photo.png"
                    alt="[Anish Kumar Sreedharan]"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="lg:col-span-3"
            >
              <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
                Meet the Founder
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-6 leading-tight">
                <span className="gradient-text-light">[Anish Kumar Sreedharan]</span>
              </h1>
              <p className="text-lg text-gray-300 leading-relaxed mb-6">
                Founder & Visionary behind BioSovereign. An integration of ecology, neuroscience,
                regenerative economics, and indigenous wisdom into a single, actionable framework
                for planetary well-being.
              </p>
              <div className="flex flex-wrap gap-3">
                {disciplines.map((d) => (
                  <span
                    key={d.label}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0f3322]/60 border border-emerald-500/15 text-sm text-gray-300"
                  >
                    <d.icon size={16} className={d.color} />
                    {d.label}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        {/* Extended bio */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Sparkles size={24} className="text-[#2ecc71]" />
            The Journey
          </h2>
          <div className="space-y-5">
            <p className="text-lg text-gray-300 leading-relaxed">
              [Anish Kumar Sreedharan]'s path to BioSovereign began with a simple but radical observation: the
              frameworks we use to understand the world — economic, political, scientific — are
              themselves products of the same worldview that created our current crises. You cannot
              solve a problem with the thinking that created it.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This led to years of cross-disciplinary study: ecology and systems theory to
              understand how living systems work; neuroscience to understand how the human brain can
              rewire itself toward ecological empathy; regenerative economics to design systems that
              build rather than deplete; and deep engagement with indigenous wisdom traditions that
              have maintained relational, Earth-rooted worldviews for millennia.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              The result is BioSovereign — not a single solution, but a blueprint. A coherent
              framework that connects the cognitive shift (Planetary Consciousness), the design
              practice (Symbiotic Design), and the economic architecture (Equitable Earthenomics)
              into an integrated whole. Each pillar reinforces the others, and together they form a
              path from citizenship to ecozenship.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              [Anish Kumar Sreedharan] continues to develop and refine this framework through research,
              dialogue, and real-world implementation — working with communities, innovators, and
              institutions that are already building pieces of the regenerative future.
            </p>
          </div>
        </motion.section>

        {/* Mission statement */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/15 via-[#0f3322]/40 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2ecc71]/10 blur-3xl" />
          <div className="relative z-10 p-8 md:p-12 border border-[#2ecc71]/20 rounded-3xl">
            <div className="flex items-center gap-3 mb-6">
              <Target size={24} className="text-[#2ecc71]" />
              <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
                Mission Statement
              </span>
            </div>
            <Quote size={36} className="text-[#2ecc71]/30 mb-4" />
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug mb-6">
              "To midwife humanity's transition from citizens to ecozens — from a species that
              extracts to a species that coexists — by building the cognitive, design, and economic
              infrastructure for a regenerative civilization."
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              This mission is not about returning to a romanticized past. It is about building
              forward — using the best of what we have learned from science, indigenous wisdom, and
              systems thinking to create something that has never existed before: a civilization
              aligned with the living systems that sustain it.
            </p>
          </div>
        </motion.section>

        {/* Photo gallery */}
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 flex items-center gap-3">
            <Heart size={24} className="text-[#2ecc71]" />
            Gallery
          </h2>
          <p className="text-sm text-gray-400 mb-6">
            Photo gallery placeholder — replace with founder's images.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                className="relative rounded-2xl overflow-hidden border border-emerald-500/10 aspect-square group"
              >
                <img
                  src={src}
                  alt={`Gallery ${idx + 1}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#04140e]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* CTA */}
        <div className="text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold hover:bg-[#34d97b] transition-all duration-300 hover:shadow-[0_0_30px_rgba(46,204,113,0.5)] group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Return to Home
          </Link>
        </div>
      </div>
    </div>
  );
}
