import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence, useMotionTemplate } from 'framer-motion';
import { useTheme } from './theme-provider';
import { useScrollVelocity } from '../hooks/useScrollVelocity';

const languages = [
  { code: '', name: 'Original (EN)' },
  { code: 'fr', name: 'Français' },
  { code: 'es', name: 'Español' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' },
  { code: 'ar', name: 'العربية' },
  { code: 'zh-CN', name: '中文 (简体)' },
  { code: 'zh-TW', name: '中文 (繁體)' },
  { code: 'ja', name: '日本語' },
  { code: 'ko', name: '한국어' },
  { code: 'ru', name: 'Русский' },
  { code: 'hi', name: 'हिन्दी' },
  { code: 'it', name: 'Italiano' },
  { code: 'nl', name: 'Nederlands' },
  { code: 'sv', name: 'Svenska' },
  { code: 'tr', name: 'Türkçe' },
];

function translatePage(langCode: string) {
  const combo = document.querySelector('.goog-te-combo') as HTMLSelectElement | null;
  if (combo) {
    combo.value = langCode;
    combo.dispatchEvent(new Event('change', { bubbles: true }));
  }
}

const navItems = [
  { name: 'ABOUT', href: '/#about' },
  { name: 'TEAM', href: '/team' },
  { name: 'MIRROR TRADES', href: '/#mirror-trades' },
  { 
    name: 'INVESTMENT PRODUCTS', 
    href: '/#services',
    dropdown: [
      { label: 'Option Trading', href: '/services/options-copy-trading' },
      { label: 'Tesla Ecosystem', href: '/services/tesla' },
      { label: 'Real Estate', href: '/services/real-estate' },
      { label: 'Stocks', href: '/services/stock' },
      { label: 'Infrastructure', href: '/services/infrastructure' },
      { label: 'Forex Trading', href: '/services/forex' },
      { label: 'Crypto Asset', href: '/services/crypto' },
      { label: 'Fixed Income', href: '/services/fixed-income' },
      { label: 'Agriculture', href: '/services/agriculture' }
    ]
  },
  { 
    name: 'PLANNING SERVICES', 
    href: '/#planning',
    dropdown: [
      { label: 'Planning Services', href: '/#planning' },
      { label: 'Assets Management', href: '/#services' },
    ]
  },
  { name: 'INSIGHT', href: '/#insight' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [hoveredNav, setHoveredNav] = useState<string | null>(null);
  const location = useLocation();
  const currentPath = location.pathname + location.hash;
  const { theme, setTheme } = useTheme();
  const [langOpen, setLangOpen] = useState(false);
  const [activeLang, setActiveLang] = useState('Original (EN)');
  const langRef = useRef<HTMLDivElement>(null);

  const { blurFilter, bgOpacity } = useScrollVelocity();
  const dynamicBg = useMotionTemplate`rgba(${theme === 'dark' ? '19, 19, 24' : '255, 255, 255'}, ${bgOpacity})`;

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      style={{
        backdropFilter: isScrolled ? blurFilter : 'none',
        backgroundColor: isScrolled ? dynamicBg : undefined,
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-shadow duration-300 ${
        isScrolled 
          ? 'shadow-md dark:shadow-white/5 border-b border-black/5 dark:border-white/5' 
          : 'bg-white dark:bg-[#131318]'
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[88px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 flex-shrink-0">
            <div className="flex items-end gap-[2px] h-8">
              <div className="w-[3px] h-4 bg-[#3b82f6]"></div>
              <div className="w-[3px] h-6 bg-[#facc15]"></div>
              <div className="w-[3px] h-8 bg-[#3b82f6]"></div>
            </div>
            <div className="flex flex-col ml-1 leading-none justify-center">
              <span className="text-[13px] font-bold text-[#facc15] tracking-wide m-0 p-0 leading-tight">STOCKMARKET</span>
              <span className="text-[13px] font-bold text-[#7c3aed] tracking-widest m-0 p-0 leading-tight">LUMINATOR</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center gap-6 ml-auto mr-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative group"
                onMouseEnter={() => {
                  if (item.dropdown) {
                    setActiveDropdown(item.name);
                  }
                  setHoveredNav(item.name);
                }}
                onMouseLeave={() => {
                  setActiveDropdown(null);
                  setHoveredNav(null);
                }}
              >
                <Link
                  to={item.href}
                  className="flex items-center gap-1 py-6 px-3 text-[13px] font-semibold text-gray-800 dark:text-gray-200 hover:text-[#7c3aed] transition-colors tracking-wide relative z-10"
                >
                  <span className="relative z-10">{item.name}</span>
                  {(hoveredNav === item.name || currentPath === item.href) && (
                    <motion.div 
                      layoutId="nav-indicator" 
                      className="absolute left-0 right-0 top-4 bottom-4 bg-[#7c3aed]/10 dark:bg-white/10 rounded-full z-0"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </Link>
                
                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 w-56 bg-white dark:bg-[#131318] shadow-lg py-2 z-50"
                    >
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.label}
                          to={subItem.href}
                          className="block px-4 py-2 text-[13px] text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#7c3aed] dark:hover:text-[#7c3aed] transition-colors"
                        >
                          {subItem.label}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </nav>

          {/* Right Side */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2  hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Toggle Theme"
            >
              {theme === 'dark' ? (
                <Sun className="w-5 h-5 text-gray-300 hover:text-white" />
              ) : (
                <Moon className="w-5 h-5 text-gray-600 hover:text-gray-900" />
              )}
            </button>
            {/* Language Selector - Click to open */}
            <div className="relative" ref={langRef}>
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1.5 px-3 py-1.5 text-[12px] font-semibold text-gray-700 dark:text-gray-300 hover:border-[#7c3aed] hover:text-[#7c3aed] dark:hover:text-[#a78bfa] transition-colors "
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span className="max-w-[80px] truncate">{activeLang.split(' ')[0]}</span>
                <svg className={`w-3 h-3 transition-transform ${langOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.15 }}
                    className="absolute top-full right-0 mt-2 w-48 bg-white dark:bg-[#1b1b20] shadow-xl z-[200]  overflow-hidden"
                  >
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => {
                          translatePage(lang.code);
                          setActiveLang(lang.name);
                          setLangOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2.5 text-[13px] transition-colors ${
                          activeLang === lang.name
                            ? 'bg-[#7c3aed]/10 text-[#7c3aed] font-semibold'
                            : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-white/5 hover:text-[#7c3aed]'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>


            </div>
            <Link to="/signup" className="bg-[#7c3aed] hover:bg-[#6d28d9] text-white px-6 py-3 text-[13px] font-bold tracking-wider transition-colors inline-block text-center">
              GET STARTED
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-gray-700 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-[#131318] dark:border-white/10"
          >
            <nav className="px-4 py-4 space-y-2">
              <div className="flex justify-end p-2 mb-2">
                <button
                  onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                  className="p-2  hover:bg-gray-100 dark:hover:bg-white/10 transition-colors flex items-center gap-2"
                >
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-300">Toggle Theme</span>
                  {theme === 'dark' ? <Sun className="w-5 h-5 text-gray-300" /> : <Moon className="w-5 h-5 text-gray-600" />}
                </button>
              </div>
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="block px-4 py-3 text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-[#7c3aed] hover:bg-gray-50 dark:hover:bg-white/5 "
                    onClick={() => !item.dropdown && setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
              <div className="pt-4 space-y-4">
                <Link to="/signup" className="block w-full text-center bg-[#7c3aed] text-white px-6 py-4 text-sm font-bold tracking-wider">
                  GET STARTED
                </Link>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
