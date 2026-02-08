import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useSmoothScroll } from '@/hooks/useScrollReveal';
import { Sun, Moon, Menu, X, Globe } from 'lucide-react';

const navLinks = [
  { id: 'about', ar: 'من نحن', en: 'About' },
  { id: 'vision', ar: 'رؤيتنا', en: 'Vision' },
  { id: 'mission', ar: 'مهمتنا', en: 'Mission' },
  { id: 'values', ar: 'قيمنا', en: 'Values' },
  { id: 'goals', ar: 'أهدافنا', en: 'Goals' },
  { id: 'services', ar: 'خدماتنا', en: 'Services' },
  { id: 'team', ar: 'فريقنا', en: 'Team' },
  { id: 'work', ar: 'أعمالنا', en: 'Work' },
  { id: 'contact', ar: 'تواصل', en: 'Contact' },
];

export default function Navigation() {
  const { language, direction, toggleLanguage, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const scrollToSection = useSmoothScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
          isScrolled
            ? 'py-3 backdrop-blur-xl bg-white/80 dark:bg-black/70 shadow-lg'
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="container-athar">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <button
              onClick={() => handleNavClick('hero')}
              className="relative group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt="Athar"
                className={`h-10 md:h-12 w-auto object-contain transition-all duration-300 ${
                  isScrolled ? 'scale-90' : 'scale-100'
                }`}
              />
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="relative px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors duration-300 group"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span className="relative z-10">{t(link.ar, link.en)}</span>
                  <span className="absolute inset-0 rounded-full bg-primary/10 scale-0 group-hover:scale-100 transition-transform duration-300 ease-expo-out" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <button
                onClick={toggleLanguage}
                className="flex items-center gap-1.5 px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:bg-primary/10"
                aria-label={t('تغيير اللغة', 'Change Language')}
              >
                <Globe className="w-4 h-4" />
                <span className="hidden sm:inline">{language === 'ar' ? 'EN' : 'AR'}</span>
              </button>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full transition-all duration-300 hover:bg-primary/10"
                aria-label={t('تغيير المظهر', 'Toggle Theme')}
              >
                {theme === 'dark' ? (
                  <Sun className="w-5 h-5 text-athar-accent" />
                ) : (
                  <Moon className="w-5 h-5 text-athar-primary" />
                )}
              </button>

              {/* CTA Button - Desktop */}
              <button
                onClick={() => handleNavClick('contact')}
                className="hidden md:flex btn-primary text-sm"
              >
                {t('ابدأ الآن', 'Get Started')}
              </button>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-full transition-all duration-300 hover:bg-primary/10"
                aria-label={t('القائمة', 'Menu')}
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen ? 'visible' : 'invisible'
        }`}
      >
        {/* Backdrop */}
        <div
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-500 ${
            isMobileMenuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setIsMobileMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={`absolute top-0 ${direction === 'rtl' ? 'right-0' : 'left-0'} h-full w-80 max-w-[85vw] bg-background shadow-2xl transition-transform duration-500 ease-expo-out ${
            isMobileMenuOpen
              ? 'translate-x-0'
              : direction === 'rtl'
              ? 'translate-x-full'
              : '-translate-x-full'
          }`}
        >
          <div className="p-6 pt-20">
            <div className="flex flex-col gap-2">
              {navLinks.map((link, index) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className="text-left px-4 py-3 rounded-xl text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-primary/10 transition-all duration-300"
                  style={{
                    animationDelay: `${index * 50}ms`,
                    textAlign: direction === 'rtl' ? 'right' : 'left',
                  }}
                >
                  {t(link.ar, link.en)}
                </button>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-border">
              <button onClick={() => handleNavClick('contact')} className="w-full btn-primary">
                {t('ابدأ الآن', 'Get Started')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
