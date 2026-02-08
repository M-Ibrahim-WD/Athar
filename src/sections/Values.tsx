import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Heart, Award, Lightbulb, Handshake, Star } from 'lucide-react';

export default function Values() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.15 });

  const values = [
    {
      icon: Award,
      title: { ar: 'الإلتزام', en: 'Commitment' },
      description: {
        ar: 'نلتزم بتقديم خدماتنا وفق نموذج قائم على مسؤولية الوصول للنتائج الموعود بها',
        en: 'We are committed to delivering our services through a result driven model, grounded in responsibility towards achieving the promised outcomes',
      },
    },
    {
      icon: Star,
      title: { ar: 'الاحترافية', en: 'Professionalism' },
      description: {
        ar: 'أن تكون خدماتنا التسويقية على مستوى عالٍ من الاحترافية بعيدًا عن القوالب الجاهزة والتكرار',
        en: 'We ensure that our marketing services are delivered at the highest level of professionalism, far from ready made templates and repetition',
      },
    },
    {
      icon: Lightbulb,
      title: { ar: 'الإبداع المسؤول', en: 'Responsible Creativity' },
      description: {
        ar: 'نقدم خدمات إبداعية لخدمة الهدف الأساسي وليس لمجرد عرض للفكرة',
        en: 'We provide creative solutions that serve the core objective, not creativity for the sake of display alone',
      },
    },
    {
      icon: Handshake,
      title: { ar: 'الشراكة', en: 'Partnership' },
      description: {
        ar: 'نجاحك ليس مشروعًا عابرًا بل علاقة شراكة مستمرة',
        en: 'Your success is not a temporary project it\'s a continuous partnership',
      },
    },
  ];

  return (
    <section
      ref={ref}
      id="values"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-0 ${language === 'ar' ? 'right-0' : 'left-0'} w-1/2 h-full opacity-30`}
          style={{
            background: theme === 'dark'
              ? 'linear-gradient(135deg, rgba(1, 102, 90, 0.1) 0%, transparent 50%)'
              : 'linear-gradient(135deg, rgba(1, 102, 90, 0.05) 0%, transparent 50%)',
          }}
        />
      </div>

      <div className="container-athar relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-athar-accent rounded-full" />
            <Heart className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('قيمنا', 'Our Values')}
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('المبادئ التي توجهنا في كل خطوة', 'The principles that guide us every step of the way')}
          </p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {values.map((value, index) => (
            <div
              key={value.title.en}
              className={`group transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{
                transitionDelay: `${200 + index * 100}ms`,
                transform: isVisible
                  ? `translateY(${index % 2 === 0 ? '0' : '20px'})`
                  : 'translateY(50px)',
              }}
            >
              <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02]'
                    : 'bg-white'
                } border border-athar-primary/10 hover:border-athar-accent/40 overflow-hidden`}
              >
                {/* Hover background effect */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-athar-primary/20 to-athar-accent/10'
                      : 'bg-gradient-to-br from-athar-primary/5 to-athar-accent/5'
                  }`}
                />

                <div className="relative z-10">
                  {/* Icon & Title Row */}
                  <div className="flex items-start gap-4 mb-4">
                    <div className="relative flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                        <value.icon className="w-7 h-7 text-white" />
                      </div>
                      {/* Glow */}
                      <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-athar-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>
                    <h3 className={`text-xl md:text-2xl font-bold mt-2 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                      {t(value.title.ar, value.title.en)}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t(value.description.ar, value.description.en)}
                  </p>
                </div>

                {/* Corner decoration */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-athar-accent/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Connection Lines SVG */}
        <svg
          className={`absolute inset-0 w-full h-full pointer-events-none transition-opacity duration-1000 ${
            isVisible ? 'opacity-20' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#01665a" stopOpacity="0" />
              <stop offset="50%" stopColor="#2af398" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#01665a" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
}
