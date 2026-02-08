import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Compass, Lightbulb, Megaphone, Award, CheckCircle2 } from 'lucide-react';

export default function Mission() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const pillars = [
    { icon: Lightbulb, ar: 'تحويل الأفكار', en: 'Transform Ideas' },
    { icon: Megaphone, ar: 'بناء الحضور', en: 'Build Presence' },
    { icon: Award, ar: 'صناعة القصص', en: 'Create Stories' },
    { icon: CheckCircle2, ar: 'تحقيق النتائج', en: 'Deliver Results' },
  ];

  return (
    <section
      ref={ref}
      id="mission"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Radial gradient from center */}
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.08) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.04) 0%, transparent 60%)',
          }}
        />
        {/* Concentric circles */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          {[1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute rounded-full border border-athar-accent/10"
              style={{
                width: `${i * 300}px`,
                height: `${i * 300}px`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                opacity: isVisible ? 0.3 / i : 0,
                transition: `opacity 1s ease-out ${i * 200}ms`,
              }}
            />
          ))}
        </div>
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
            <Compass className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('مهمتنا', 'Our Mission')}
            </span>
          </h2>
        </div>

        {/* Main Mission Statement */}
        <div
          className={`max-w-4xl mx-auto text-center mb-16 transition-all duration-700 delay-200 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div
            className={`relative p-8 md:p-12 rounded-3xl ${
              theme === 'dark'
                ? 'bg-gradient-to-br from-athar-primary/20 to-athar-primary/5'
                : 'bg-gradient-to-br from-athar-primary/10 to-athar-primary/5'
            } border border-athar-accent/20`}
          >
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-3xl bg-athar-accent/5 blur-2xl" />
            
            <div className="relative">
              {language === 'ar' ? (
                <p className="text-xl md:text-2xl leading-relaxed text-white">
                  نعتمد على فلسفة قائمة وهي أن نحول{' '}
                  <span className="text-athar-accent font-semibold">الأفكار إلى حضور</span>{' '}
                  والعلامات إلى{' '}
                  <span className="text-athar-accent font-semibold">قصص نجاح</span>{' '}
                  والقصص إلى{' '}
                  <span className="text-athar-accent font-semibold">نتائج ملموسة</span>
                </p>
              ) : (
                <p className={`text-xl md:text-2xl leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  We operate with a clear philosophy transform{' '}
                  <span className="text-athar-accent font-semibold">ideas into presence</span>,
                  brands into{' '}
                  <span className="text-athar-accent font-semibold">successful stories</span>{' '}
                  and stories into{' '}
                  <span className="text-athar-accent font-semibold">tangible results</span>
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Secondary Statement */}
        <div
          className={`max-w-3xl mx-auto text-center mb-12 transition-all duration-700 delay-300 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {language === 'ar'
              ? 'حيث نرافق شركاء النجاح من أول الفكرة وصولاً للنتائج المطلوبة بعملٍ صادق، وتخطيط ذكي، وتنفيذ بعد دراسة'
              : 'We walk alongside our partners in success from the very first idea till achieving the desired outcomes through honest work, smart planning and execution based on through study and analysis'}
          </p>
        </div>

        {/* Mission Pillars */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.en}
              className={`group transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
              }`}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              <div
                className={`relative p-6 rounded-2xl text-center transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-white/5 hover:bg-white/10'
                    : 'bg-white hover:shadow-lg'
                } border border-athar-primary/10 hover:border-athar-accent/30`}
              >
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500">
                    <pillar.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                {/* Label */}
                <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t(pillar.ar, pillar.en)}
                </span>

                {/* Hover glow */}
                <div className="absolute inset-0 rounded-2xl bg-athar-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
