import { useEffect, useState, useRef } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useSmoothScroll } from '@/hooks/useScrollReveal';
import { ArrowRight, Sparkles, TrendingUp, Users } from 'lucide-react';

export default function Hero() {
  const { direction, t } = useLanguage();
  const { theme } = useTheme();
  const scrollToSection = useSmoothScroll();
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  // Parallax effect for floating elements
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;
      setMousePosition({ x: x * 20, y: y * 20 });
    };

    const hero = heroRef.current;
    if (hero) {
      hero.addEventListener('mousemove', handleMouseMove, { passive: true });
    }

    return () => {
      if (hero) {
        hero.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);

  const stats = [
    { value: '150+', label: t('مشروع منجز', 'Projects Delivered'), icon: Sparkles },
    { value: '98%', label: t('رضا العملاء', 'Client Satisfaction'), icon: TrendingUp },
    { value: '5+', label: t('سنوات من التميز', 'Years of Excellence'), icon: Users },
  ];

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Base Gradient */}
        <div
          className={`absolute inset-0 transition-opacity duration-1000 ${
            theme === 'dark'
              ? 'bg-gradient-to-br from-[#0a0f0e] via-[#0d1412] to-[#111917]'
              : 'bg-gradient-to-br from-[#f8faf9] via-[#f0f4f3] to-[#e8eeec]'
          }`}
        />

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-60">
          <div
            className="absolute inset-0 animate-gradient"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, ${theme === 'dark' ? 'rgba(1, 102, 90, 0.25)' : 'rgba(1, 102, 90, 0.12)'} 0%, transparent 50%),
                radial-gradient(ellipse at 80% 70%, ${theme === 'dark' ? 'rgba(42, 243, 152, 0.15)' : 'rgba(42, 243, 152, 0.08)'} 0%, transparent 50%),
                radial-gradient(ellipse at 50% 50%, ${theme === 'dark' ? 'rgba(24, 140, 116, 0.12)' : 'rgba(24, 140, 116, 0.06)'} 0%, transparent 60%)
              `,
              backgroundSize: '200% 200%',
            }}
          />
        </div>

        {/* Floating Orbs */}
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full opacity-30 blur-3xl transition-transform duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(42, 243, 152, 0.4) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.5}px, ${mousePosition.y * 0.5}px)`,
          }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full opacity-25 blur-3xl transition-transform duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(1, 102, 90, 0.5) 0%, transparent 70%)',
            transform: `translate(${-mousePosition.x * 0.3}px, ${-mousePosition.y * 0.3}px)`,
          }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-48 h-48 rounded-full opacity-20 blur-2xl transition-transform duration-300"
          style={{
            background: 'radial-gradient(circle, rgba(24, 140, 116, 0.5) 0%, transparent 70%)',
            transform: `translate(${mousePosition.x * 0.7}px, ${-mousePosition.y * 0.5}px)`,
          }}
        />

        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px),
              linear-gradient(90deg, ${theme === 'dark' ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.1)'} 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-athar pt-24 pb-16">
        <div className="flex flex-col items-center text-center">
          {/* Logo Animation */}
          <div
            className={`mb-8 transition-all duration-1000 ease-expo-out ${
              isLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <img
              src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
              alt="Athar"
              className="h-20 md:h-28 w-auto object-contain animate-float-slow"
            />
          </div>

          {/* Main Headline */}
          <div className="overflow-hidden mb-4">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-300 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className="gradient-text">
                {t('أثَر يُرى', 'A visible impact')}
              </span>
            </h1>
          </div>

          <div className="overflow-hidden mb-8">
            <h1
              className={`text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight transition-all duration-1000 delay-500 ease-expo-out ${
                isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
            >
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {t('ونجاح يُروى', 'a narrated success')}
              </span>
            </h1>
          </div>

          {/* Subheadline */}
          <div
            className={`max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ease-expo-out ${
              isLoaded ? 'opacity-100 translate-y-0 blur-0' : 'opacity-0 translate-y-8 blur-sm'
            }`}
          >
            <p className={`text-lg md:text-xl leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
              {t(
                'نحول العلامات التجارية إلى انطباعات دائمة من خلال التميز في التسويق الاستراتيجي',
                'Transforming brands into lasting impressions through strategic marketing excellence'
              )}
            </p>
          </div>

          {/* CTA Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 mb-16 transition-all duration-1000 delay-900 ease-expo-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary flex items-center justify-center gap-2 group"
            >
              <span>{t('ابدأ رحلتك', 'Start Your Journey')}</span>
              <ArrowRight
                className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${
                  direction === 'rtl' ? 'rotate-180' : ''
                }`}
              />
            </button>
            <button
              onClick={() => scrollToSection('work')}
              className="btn-secondary"
            >
              {t('شاهد أعمالنا', 'View Our Work')}
            </button>
          </div>

          {/* Stats Row */}
          <div
            className={`grid grid-cols-3 gap-6 md:gap-12 max-w-3xl mx-auto transition-all duration-1000 delay-1100 ease-expo-out ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            }`}
          >
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="text-center group"
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-5 h-5 text-athar-accent opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="text-2xl md:text-4xl font-bold gradient-text mb-1">
                  {stat.value}
                </div>
                <div className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div
        className={`absolute bottom-0 left-0 right-0 h-32 pointer-events-none ${
          theme === 'dark'
            ? 'bg-gradient-to-t from-[#0a0f0e] to-transparent'
            : 'bg-gradient-to-t from-[#f8faf9] to-transparent'
        }`}
      />
    </section>
  );
}
