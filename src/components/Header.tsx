import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/#about' },
  { label: 'Founder', path: '/#founder' },
  { label: 'Data', path: '/#emissions' },
  { label: 'Contact', path: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (path: string) => {
    setMobileOpen(false);
    if (path.includes('#')) {
      const [route, hash] = path.split('#');
      if (route === '/' || route === '') {
        if (location.pathname !== '/') {
          window.location.href = `/#${hash}`;
        } else {
          document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#04140e]/85 backdrop-blur-xl border-b border-emerald-500/10'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center" onClick={() => handleNavClick('/')}>
          <img
            src="/assets/images/Biosovereign.logo_New_.png"
            alt="BioSovereign — Designing Sovereignty for Life"
            className="h-9 w-auto object-contain"
          />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              {link.path.includes('#') ? (
                <button
                  onClick={() => handleNavClick(link.path)}
                  className="text-sm font-medium text-gray-300 hover:text-[#2ecc71] transition-colors duration-300"
                >
                  {link.label}
                </button>
              ) : (
                <Link
                  to={link.path}
                  className="text-sm font-medium text-gray-300 hover:text-[#2ecc71] transition-colors duration-300"
                >
                  {link.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        <Link
          to="/#contact"
          onClick={() => handleNavClick('/#contact')}
          className="hidden lg:inline-flex items-center px-6 py-2.5 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold text-sm hover:bg-[#34d97b] transition-all duration-300 hover:shadow-[0_0_25px_rgba(46,204,113,0.5)]"
        >
          Contact Us
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden p-2 text-[#2ecc71] rounded-lg hover:bg-[#0f3322]/60 transition-colors"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden bg-[#04140e]/95 backdrop-blur-xl border-b border-emerald-500/10"
          >
            <ul className="px-6 py-6 flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.label}>
                  {link.path.includes('#') ? (
                    <button
                      onClick={() => handleNavClick(link.path)}
                      className="block text-base font-medium text-gray-200 hover:text-[#2ecc71] transition-colors py-1"
                    >
                      {link.label}
                    </button>
                  ) : (
                    <Link
                      to={link.path}
                      className="block text-base font-medium text-gray-200 hover:text-[#2ecc71] transition-colors py-1"
                    >
                      {link.label}
                    </Link>
                  )}
                </li>
              ))}
              <li>
                <Link
                  to="/#contact"
                  onClick={() => handleNavClick('/#contact')}
                  className="inline-flex items-center px-6 py-3 rounded-full bg-[#2ecc71] text-[#04140e] font-semibold text-sm"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
