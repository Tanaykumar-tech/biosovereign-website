import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Check } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export type ArticleSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

type ArticlePageProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  icon: LucideIcon;
  iconColor: string;
  sections: ArticleSection[];
  closingStatement: string;
};

export default function ArticlePage({
  eyebrow,
  title,
  subtitle,
  icon: Icon,
  iconColor,
  sections,
  closingStatement,
}: ArticlePageProps) {
  return (
    <div className="min-h-screen bg-[#04140e] pt-20">
      {/* Hero band */}
      <div className="relative overflow-hidden py-20 md:py-28 px-6 lg:px-10">
        <div className="absolute inset-0 bg-gradient-to-b from-[#061d14] to-[#04140e]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-[#2ecc71]/5 blur-3xl" />

        <div className="max-w-4xl mx-auto relative z-10">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-[#2ecc71] transition-colors mb-8 group"
          >
            <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-2xl bg-[#04140e] border border-emerald-500/20 flex items-center justify-center">
                <Icon size={28} className={iconColor} />
              </div>
              <span className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest">
                {eyebrow}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold gradient-text mb-6 leading-tight">
              {title}
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">{subtitle}</p>
          </motion.div>
        </div>
      </div>

      {/* Article body */}
      <div className="max-w-4xl mx-auto px-6 lg:px-10 py-16 md:py-24">
        <div className="space-y-16 md:space-y-20">
          {sections.map((section, idx) => (
            <motion.article
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-6 flex items-start gap-3">
                <span className="text-[#2ecc71] text-sm font-mono mt-2">0{idx + 1}</span>
                {section.heading}
              </h2>
              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="text-lg text-gray-300 leading-relaxed mb-5">
                  {para}
                </p>
              ))}
              {section.bullets && (
                <ul className="space-y-3 mt-6">
                  {section.bullets.map((bullet, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-3 text-gray-300">
                      <Check
                        size={20}
                        className="text-[#2ecc71] shrink-0 mt-0.5"
                      />
                      <span className="leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.article>
          ))}
        </div>

        {/* Closing callout */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-20 relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#2ecc71]/15 via-[#0f3322]/40 to-transparent" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#2ecc71]/10 blur-3xl" />
          <div className="relative z-10 p-8 md:p-12 border border-[#2ecc71]/20 rounded-3xl">
            <p className="text-sm font-medium text-[#2ecc71] uppercase tracking-widest mb-4">
              Closing Statement
            </p>
            <p className="text-2xl md:text-3xl font-bold text-white leading-snug">
              {closingStatement}
            </p>
          </div>
        </motion.div>

        {/* Back link */}
        <div className="mt-16 text-center">
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
