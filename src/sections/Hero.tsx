import { useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const { t, isRTL } = useLanguage();
  const { theme } = useTheme();
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-athar-dark/5 via-transparent to-athar-light/5 dark:from-athar-dark/20 dark:via-transparent dark:to-athar-light/10" />

      {/* Floating Shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-shape absolute top-20 left-[10%] w-32 h-32 md:w-48 md:h-48 rounded-full bg-athar-medium/10 dark:bg-athar-light/5 blur-2xl animate-float" />
        <div className="floating-shape absolute top-40 right-[15%] w-24 h-24 md:w-40 md:h-40 rounded-full bg-athar-light/15 dark:bg-athar-medium/10 blur-xl animate-float animation-delay-400" />
        <div className="floating-shape absolute bottom-32 left-[20%] w-40 h-40 md:w-64 md:h-64 rounded-full bg-athar-dark/5 dark:bg-athar-dark/20 blur-3xl animate-float animation-delay-800" />
        <div className="floating-shape absolute bottom-20 right-[10%] w-28 h-28 md:w-44 md:h-44 rounded-full bg-athar-medium/10 dark:bg-athar-light/5 blur-2xl animate-float animation-delay-600" />
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(to right, ${theme === 'dark' ? '#2af398' : '#01665a'} 1px, transparent 1px),
                           linear-gradient(to bottom, ${theme === 'dark' ? '#2af398' : '#01665a'} 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content */}
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-5xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-light/10 dark:bg-athar-light/10 border border-athar-light/20 mb-8 animate-fade-in">
            <Sparkles className="w-4 h-4 text-athar-medium dark:text-athar-light" />
            <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
              {isRTL ? 'وكالة تسويقية إلكترونية' : 'E-Marketing Agency'}
            </span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in animation-delay-200">
            <span className="gradient-text">{t('hero.slogan')}</span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in animation-delay-400">
            {t('hero.subtitle') as string}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in animation-delay-600">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-athar-dark hover:bg-athar-darker text-white dark:bg-athar-light dark:text-athar-darker dark:hover:bg-athar-medium px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300 hover:shadow-glow dark:hover:shadow-glow-dark"
            >
              {t('hero.cta') as string}
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={scrollToAbout}
              className="border-athar-dark/30 dark:border-athar-light/30 hover:bg-athar-light/10 dark:hover:bg-athar-light/10 px-8 py-6 text-lg font-semibold rounded-full transition-all duration-300"
            >
              {isRTL ? 'تعرف علينا' : 'Learn More'}
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer animate-bounce"
        onClick={scrollToAbout}
      >
        <span className="text-sm text-muted-foreground">{t('hero.scroll') as string}</span>
        <div className="w-10 h-10 rounded-full border-2 border-athar-dark/30 dark:border-athar-light/30 flex items-center justify-center">
          <ArrowDown className="w-5 h-5 text-athar-dark dark:text-athar-light" />
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 left-[5%] w-2 h-2 rounded-full bg-athar-light animate-pulse" />
      <div className="absolute top-1/3 right-[8%] w-3 h-3 rounded-full bg-athar-medium animate-pulse animation-delay-400" />
      <div className="absolute bottom-1/3 left-[12%] w-2 h-2 rounded-full bg-athar-dark animate-pulse animation-delay-800" />
    </section>
  );
}
