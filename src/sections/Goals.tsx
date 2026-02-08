import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Target, Wrench, Heart, BarChart3, Flag } from 'lucide-react';

export default function Goals() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const goals = [
    {
      icon: Flag,
      title: { ar: 'بناء علامات تجارية', en: 'Building Brands' },
      description: {
        ar: 'بناء علامات تجارية ذات هوية واضحة بأثر طويل المدى',
        en: 'Building brands with a clear identity and long term impact',
      },
      position: 0, // top
    },
    {
      icon: Wrench,
      title: { ar: 'حلول تسويقية', en: 'Marketing Solutions' },
      description: {
        ar: 'تقديم حلول تسويقية تحل مشاكل العملاء لنصل بهم إلى بر الأمان',
        en: 'Delivering marketing solutions that solve real client challenges and lead them to sustainable success',
      },
      position: 1, // right
    },
    {
      icon: BarChart3,
      title: { ar: 'نتائج قابلة للقياس', en: 'Measurable Results' },
      description: {
        ar: 'تحقيق نتائج قابلة للقياس',
        en: 'Achieving measurable and data driven results',
      },
      position: 2, // bottom
    },
    {
      icon: Heart,
      title: { ar: 'شريك نمو', en: 'Growth Partnership' },
      description: {
        ar: 'أن تكون أثَر شريك نمو حقيقي وليس مجرد مزود لخدمة التسويق',
        en: 'Positioning Athar as a true growth partner, not merely a marketing service provider',
      },
      position: 3, // left
    },
  ];

  return (
    <section
      ref={ref}
      id="goals"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.15) 0%, transparent 50%)'
              : 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.08) 0%, transparent 50%)',
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
            <Target className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('أهدافنا', 'Our Goals')}
            </span>
          </h2>
        </div>

        {/* Orbital Goals Display - Desktop Only */}
        <div
          className={`hidden md:block relative mx-auto transition-all duration-1000 ease-expo-out ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
          }`}
          style={{
            width: 'min(500px, 80vw)',
            height: 'min(500px, 80vw)',
          }}
        >
          {/* Outer Orbit Ring */}
          <div
            className="absolute inset-0 rounded-full border-2 border-dashed border-athar-accent/30"
            style={{
              animation: isVisible ? 'orbit 60s linear infinite' : 'none',
            }}
          />

          {/* Inner Orbit Ring */}
          <div
            className="absolute inset-[15%] rounded-full border border-athar-primary/20"
            style={{
              animation: isVisible ? 'counter-orbit 45s linear infinite' : 'none',
            }}
          />

          {/* Center Hub */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20">
            <div
              className={`relative w-28 h-28 md:w-32 md:h-32 rounded-full flex flex-col items-center justify-center transition-all duration-700 ${
                theme === 'dark'
                  ? 'bg-gradient-to-br from-athar-primary to-athar-primary-dark'
                  : 'bg-gradient-to-br from-athar-primary to-athar-primary-light'
              }`}
              style={{
                boxShadow: isVisible
                  ? '0 0 40px rgba(42, 243, 152, 0.4), 0 0 80px rgba(42, 243, 152, 0.2), inset 0 0 40px rgba(255, 255, 255, 0.1)'
                  : 'none',
                animation: isVisible ? 'pulse-glow 4s ease-in-out infinite' : 'none',
              }}
            >
              <Target className="w-8 h-8 md:w-10 md:h-10 text-athar-accent mb-1" />
              <span className="text-white font-bold text-xs md:text-sm">
                {t('أهدافنا', 'Our Goals')}
              </span>
            </div>
          </div>

          {/* Orbiting Goal Cards with Internal Hover Popup */}
          {goals.map((goal, index) => {
            const angle = (index * 90 - 90) * (Math.PI / 180); // Start from top
            const radius = 42; // percentage from center
            const x = 50 + radius * Math.cos(angle);
            const y = 50 + radius * Math.sin(angle);

            return (
              <div
                key={goal.title.en}
                className={`absolute z-30 transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  transform: 'translate(-50%, -50%)',
                  transitionDelay: `${400 + index * 150}ms`,
                }}
              >
                {/* Card with internal hover popup */}
                <div
                  className={`group relative w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-500 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-athar-primary/80 to-athar-primary-dark/80'
                      : 'bg-gradient-to-br from-athar-primary to-athar-primary-light'
                  } border-2 border-athar-accent/50 hover:border-athar-accent hover:scale-110 cursor-pointer`}
                  style={{
                    boxShadow: '0 0 20px rgba(42, 243, 152, 0.3)',
                    animation: isVisible ? `float ${4 + index * 0.5}s ease-in-out infinite ${index * 0.5}s` : 'none',
                  }}
                >
                  <goal.icon className="w-6 h-6 md:w-8 md:h-8 text-athar-accent" />

                  {/* Internal Popup - Appears on top of the card */}
                  <div
                    className={`absolute ${
                      index === 0 ? 'bottom-full mb-2' :
                      index === 1 ? language === 'ar' ? 'right-full mr-2' : 'left-full ml-2' :
                      index === 2 ? 'top-full mt-2' :
                      language === 'ar' ? 'left-full ml-2' : 'right-full mr-2'
                    } w-56 md:w-64 p-4 rounded-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-[100] ${
                      theme === 'dark'
                        ? 'bg-gradient-to-br from-athar-primary to-athar-primary-dark'
                        : 'bg-gradient-to-br from-athar-primary to-athar-primary-light'
                    } border border-athar-accent/50 shadow-2xl`}
                    style={{
                      transformOrigin: index === 0 ? 'center bottom' :
                                        index === 1 ? (language === 'ar' ? 'right center' : 'left center') :
                                        index === 2 ? 'center top' :
                                        (language === 'ar' ? 'left center' : 'right center'),
                    }}
                  >
                    <h4 className="font-bold text-sm md:text-base text-white mb-2 whitespace-normal">
                      {t(goal.title.ar, goal.title.en)}
                    </h4>
                    <p className="text-xs md:text-sm text-white/80 leading-relaxed whitespace-normal">
                      {t(goal.description.ar, goal.description.en)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Goals Cards Grid - Mobile & Tablet */}
        <div className="md:hidden grid grid-cols-2 gap-4 mt-8">
          {goals.map((goal, index) => (
            <div
              key={goal.title.en}
              className={`group transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`p-4 rounded-2xl h-full transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white hover:shadow-lg'
                } border border-athar-primary/10 hover:border-athar-accent/30`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center mb-3">
                  <goal.icon className="w-6 h-6 text-athar-accent" />
                </div>
                <h4 className={`font-bold text-sm mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t(goal.title.ar, goal.title.en)}
                </h4>
                <p className={`text-xs leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t(goal.description.ar, goal.description.en)}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop Goals Cards Below Orbit */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {goals.map((goal, index) => (
            <div
              key={goal.title.en}
              className={`group transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${800 + index * 100}ms` }}
            >
              <div
                className={`p-6 rounded-2xl h-full transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white hover:shadow-lg'
                } border border-athar-primary/10 hover:border-athar-accent/30`}
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-500">
                  <goal.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className={`font-bold mb-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t(goal.title.ar, goal.title.en)}
                </h4>
                <p className={`text-sm leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                  {t(goal.description.ar, goal.description.en)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
