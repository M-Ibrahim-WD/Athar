import { useState, useEffect } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navigation() {
  const { t, language, setLanguage, isRTL } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { key: 'nav.home', href: '#hero' },
    { key: 'nav.about', href: '#about' },
    { key: 'nav.vision', href: '#vision' },
    { key: 'nav.mission', href: '#mission' },
    { key: 'nav.values', href: '#values' },
    { key: 'nav.goals', href: '#goals' },
    { key: 'nav.services', href: '#services' },
    { key: 'nav.team', href: '#team' },
    { key: 'nav.work', href: '#work' },
    { key: 'nav.contact', href: '#contact' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? 'bg-background/80 backdrop-blur-xl shadow-lg py-3'
            : 'bg-transparent py-5'
        }`}
      >
        <div className="w-full section-padding">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('#hero');
              }}
              className="relative z-10"
            >
              <img
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt="Athar"
                className="h-10 md:h-12 w-auto object-contain"
              />
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-1">
              {navItems.slice(0, 6).map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href)}
                  className="px-3 py-2 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors relative group"
                >
                  {t(item.key) as string}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-athar-light transition-all duration-300 group-hover:w-4/5" />
                </button>
              ))}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Language Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setLanguage(language === 'ar' ? 'en' : 'ar')}
                className="rounded-full hover:bg-athar-light/10"
                aria-label="Toggle language"
              >
                <Globe className="h-5 w-5" />
              </Button>

              {/* Theme Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="rounded-full hover:bg-athar-light/10"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? (
                  <Sun className="h-5 w-5" />
                ) : (
                  <Moon className="h-5 w-5" />
                )}
              </Button>

              {/* CTA Button - Desktop */}
              <Button
                onClick={() => scrollToSection('#contact')}
                className="hidden md:flex bg-athar-dark hover:bg-athar-darker text-white dark:bg-athar-light dark:text-athar-darker dark:hover:bg-athar-medium transition-all duration-300"
              >
                {t('hero.cta') as string}
              </Button>

              {/* Mobile Menu Toggle */}
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden rounded-full"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          isMobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-background/95 backdrop-blur-xl"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        <div
          className={`absolute top-20 left-0 right-0 section-padding transition-transform duration-500 ${
            isMobileMenuOpen
              ? 'translate-y-0'
              : isRTL
              ? 'translate-x-full'
              : '-translate-x-full'
          }`}
        >
          <div className="flex flex-col gap-2">
            {navItems.map((item, index) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href)}
                className="text-left px-4 py-3 text-lg font-medium text-foreground/80 hover:text-foreground hover:bg-athar-light/10 rounded-lg transition-all duration-300"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                {t(item.key) as string}
              </button>
            ))}
            <Button
              onClick={() => scrollToSection('#contact')}
              className="mt-4 bg-athar-dark hover:bg-athar-darker text-white dark:bg-athar-light dark:text-athar-darker dark:hover:bg-athar-medium"
            >
              {t('hero.cta') as string}
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
