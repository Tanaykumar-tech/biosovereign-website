import { Link } from 'react-router-dom';
import { Twitter, Linkedin, Github, Youtube, Mail, ArrowUpRight } from 'lucide-react';

const quickLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Founder', path: '/founder' },
  { label: 'Emissions Explorer', path: '/#emissions' },
  { label: 'Contact', path: '/#contact' },
];

const pillarLinks = [
  { label: 'Planetary Consciousness', path: '/planetary-consciousness' },
  { label: 'Symbiotic Design', path: '/symbiotic-design' },
  { label: 'Equitable Earthenomics', path: '/equitable-earthenomics' },
];

const socials = [
  { icon: Twitter, href: '#', color: 'hover:text-sky-400' },
  { icon: Linkedin, href: '#', color: 'hover:text-blue-500' },
  { icon: Github, href: '#', color: 'hover:text-orange-400' },
  { icon: Youtube, href: '#', color: 'hover:text-red-500' },
  { icon: Mail, href: '#', color: 'hover:text-[#2ecc71]' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#061d14] border-t border-emerald-500/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
                 src="/assets/images/biosovereign_logo_new_.png"
              alt="BioSovereign — Designing Sovereignty for Life"
              className="h-10 w-auto object-contain mb-5"
            />
            <p className="text-sm text-gray-400 leading-relaxed max-w-xs">
              Designing sovereignty for life. Bridging ecological independence, biological
              innovation, and planetary stewardship.
            </p>
            <div className="flex items-center gap-4 mt-6">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className={`text-gray-400 ${s.color} transition-colors duration-300`}
                  aria-label="Social link"
                >
                  <s.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#2ecc71] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Pillars */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Three Pillars
            </h4>
            <ul className="space-y-3">
              {pillarLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm text-gray-400 hover:text-[#2ecc71] transition-colors duration-300 flex items-center gap-1 group"
                  >
                    {link.label}
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 group-hover:opacity-100 transition-opacity"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-5">
              Get in Touch
            </h4>
            <p className="text-sm text-gray-400 mb-4">
              Join the movement toward planetary sovereignty.
            </p>
            <a
              href="mailto:hello@biosovereign.earth"
              className="inline-flex items-center px-5 py-2.5 rounded-full bg-[#2ecc71]/10 border border-[#2ecc71]/30 text-[#2ecc71] font-medium text-sm hover:bg-[#2ecc71]/20 transition-all duration-300"
            >
              hello@biosovereign.earth
            </a>
          </div>
        </div>

        <div className="pt-8 border-t border-emerald-500/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} BioSovereign. Designing Sovereignty for Life. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
            Rooted in Nature, Driven by Sovereignty.
          </p>
        </div>
      </div>
    </footer>
  );
}
