import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Briefcase, Building2, Store, Globe, Laptop, Smartphone } from 'lucide-react';

export default function Work() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  // Client logos represented as icons with names
  const clients = [
    { name: 'TechCorp', icon: Laptop },
    { name: 'GlobalMart', icon: Globe },
    { name: 'SmartShop', icon: Store },
    { name: 'BuildPro', icon: Building2 },
    { name: 'AppWorks', icon: Smartphone },
    { name: 'BusinessHub', icon: Briefcase },
  ];

  // Create many duplicates for truly seamless infinite scroll
  const createInfiniteItems = (items: typeof clients, count: number) => {
    const result: typeof clients = [];
    for (let i = 0; i < count; i++) {
      result.push(...items);
    }
    return result;
  };

  const infiniteClients = createInfiniteItems(clients, 10);
  const infiniteClientsReversed = createInfiniteItems([...clients].reverse(), 10);

  return (
    <section
      ref={ref}
      id="work"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(180deg, rgba(10, 15, 14, 0) 0%, rgba(1, 102, 90, 0.05) 50%, rgba(10, 15, 14, 0) 100%)'
              : 'linear-gradient(180deg, rgba(248, 250, 249, 0) 0%, rgba(1, 102, 90, 0.03) 50%, rgba(248, 250, 249, 0) 100%)',
          }}
        />
      </div>

      <div className="container-athar relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-athar-accent rounded-full" />
            <Briefcase className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('أعمالنا', 'Our Work')}
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('شركاء نفتخر بالعمل معهم', 'Partners we are proud to work with')}
          </p>
        </div>
      </div>

      {/* Scrolling Logos - Professional Infinite Scroll */}
      <div className="relative space-y-6">
        {/* Gradient Masks */}
        <div
          className={`absolute left-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none ${
            theme === 'dark'
              ? 'bg-gradient-to-r from-[#0a0f0e] to-transparent'
              : 'bg-gradient-to-r from-[#f8faf9] to-transparent'
          }`}
        />
        <div
          className={`absolute right-0 top-0 bottom-0 w-24 md:w-40 z-10 pointer-events-none ${
            theme === 'dark'
              ? 'bg-gradient-to-l from-[#0a0f0e] to-transparent'
              : 'bg-gradient-to-l from-[#f8faf9] to-transparent'
          }`}
        />

        {/* Row 1 - Scrolls Left - Professional Animation */}
        <div className="relative overflow-hidden py-2">
          <div 
            className={`flex gap-6 ${isVisible ? 'animate-scroll-infinite' : ''}`}
            style={{ width: 'max-content' }}
          >
            {infiniteClients.map((client, index) => (
              <div
                key={`row1-${index}`}
                className={`flex-shrink-0 w-32 md:w-40 h-20 md:h-24 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/[0.05] hover:bg-white/[0.1]'
                    : 'bg-white hover:shadow-lg'
                } border border-athar-primary/10 hover:border-athar-accent/50 group backdrop-blur-sm`}
              >
                <client.icon className="w-6 h-6 md:w-8 md:h-8 text-athar-primary/60 group-hover:text-athar-accent transition-colors duration-300" />
                <span className={`text-xs md:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Scrolls Right - Professional Animation */}
        <div className="relative overflow-hidden py-2">
          <div 
            className={`flex gap-6 ${isVisible ? 'animate-scroll-infinite-reverse' : ''}`}
            style={{ width: 'max-content' }}
          >
            {infiniteClientsReversed.map((client, index) => (
              <div
                key={`row2-${index}`}
                className={`flex-shrink-0 w-32 md:w-40 h-20 md:h-24 rounded-xl flex flex-col items-center justify-center gap-2 transition-all duration-300 ${
                  theme === 'dark'
                    ? 'bg-white/[0.05] hover:bg-white/[0.1]'
                    : 'bg-white hover:shadow-lg'
                } border border-athar-primary/10 hover:border-athar-accent/50 group backdrop-blur-sm`}
              >
                <client.icon className="w-6 h-6 md:w-8 md:h-8 text-athar-primary/60 group-hover:text-athar-accent transition-colors duration-300" />
                <span className={`text-xs md:text-sm font-medium ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="container-athar mt-12 md:mt-16">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 transition-all duration-700 delay-600 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          {[
            { value: '150+', label: t('عميل سعيد', 'Happy Clients') },
            { value: '300+', label: t('مشروع منجز', 'Projects Completed') },
            { value: '50+', label: t('علامة تجارية', 'Brands Built') },
            { value: '98%', label: t('معدل رضا', 'Satisfaction Rate') },
          ].map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center p-4 md:p-6 rounded-2xl ${
                theme === 'dark' ? 'bg-white/[0.05]' : 'bg-white'
              } border border-athar-primary/10`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div className="text-2xl md:text-4xl font-bold gradient-text mb-1 md:mb-2">
                {stat.value}
              </div>
              <div className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
