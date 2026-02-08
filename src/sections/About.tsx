import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Quote } from 'lucide-react';

export default function About() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const content = {
    ar: {
      title: 'من نحن؟',
      paragraphs: [
        'تعتبر الخدمات التسويقية من أكثر الخدمات التي تتطلب خبرة واستراتيجية تسويقية مبنية على فهم للسوق والجمهور المستهدف ومع ذلك، يظل السؤال حاضرًا:',
        'لماذا تمر كثير من الحملات الإعلانية بلا صدى؟',
        'من هنا بدأت أثَر حيث اخترنا ألا نكون ضجيجًا إضافيًا بل أثرًا باقيًا',
        'ونؤمن أن نجاح الحملات لا يقوم على اختلاف الصياغات البيعية وحدها، بل على فهم دقيق للسوق ووعي باحتياجات العملاء، وبناء رسالة تصل في الوقت الصحيح وبالشكل الصحيح',
      ],
    },
    en: {
      title: 'About Us',
      paragraphs: [
        'Marketing services are among the fields that most require expertise and well built strategy based on a deep understanding of the market and the target audience, Yet one question remains persistent: why do so many advertising campaigns pass without impact?',
        'From here Athar was born we choose not to be additional noise, but lasting impact We believe that the success of campaigns is not built on different sales copy formulations, but on a precise understanding of the market, genuine awareness of customer needs And crafting a message that reaches the right audience at the right time in the right way',
      ],
    },
  };

  const currentContent = language === 'ar' ? content.ar : content.en;

  return (
    <section
      ref={ref}
      id="about"
      className="section-padding relative overflow-hidden"
    >
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className={`absolute top-20 ${language === 'ar' ? 'right-0' : 'left-0'} w-96 h-96 rounded-full opacity-20 blur-3xl`}
          style={{
            background: 'radial-gradient(circle, rgba(1, 102, 90, 0.3) 0%, transparent 70%)',
          }}
        />
        <div
          className={`absolute bottom-20 ${language === 'ar' ? 'left-0' : 'right-0'} w-80 h-80 rounded-full opacity-15 blur-3xl`}
          style={{
            background: 'radial-gradient(circle, rgba(42, 243, 152, 0.25) 0%, transparent 70%)',
          }}
        />
      </div>

      <div className="container-athar relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Title & Visual */}
          <div
            className={`transition-all duration-700 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            {/* Section Label */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-1 bg-gradient-to-r from-athar-primary to-athar-accent rounded-full" />
              <span className="text-athar-accent font-medium text-sm tracking-wider uppercase">
                {t('تعرف علينا', 'Get to Know Us')}
              </span>
            </div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-8">
              <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
                {currentContent.title}
              </span>
            </h2>

            {/* Decorative Quote Icon */}
            <div className="relative">
              <Quote className="w-16 h-16 text-athar-accent/20 absolute -top-4 -left-2" />
            </div>

            {/* Visual Element */}
            <div className="hidden lg:block mt-12">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-athar-primary/20 to-athar-accent/20 rounded-3xl transform rotate-3" />
                <div
                  className={`relative p-8 rounded-3xl ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-white'
                  } border border-athar-primary/10`}
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-3 h-3 rounded-full bg-athar-accent animate-pulse" />
                    <div className="text-athar-primary font-semibold">
                      {t('فلسفتنا', 'Our Philosophy')}
                    </div>
                  </div>
                  <p className={`text-lg ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {t('أثر باقٍ وليس ضجيجًا عابرًا', 'Lasting impact, not fleeting noise')}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div
            className={`transition-all duration-700 delay-200 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <div className="space-y-6">
              {language === 'ar' ? (
                // Arabic content with special formatting
                <>
                  <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    تعتبر الخدمات التسويقية من أكثر الخدمات التي تتطلب خبرة واستراتيجية تسويقية مبنية على فهم للسوق والجمهور المستهدف ومع ذلك، يظل السؤال حاضرًا:
                  </p>
                  <p className={`text-xl font-semibold leading-relaxed ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    لماذا تمر كثير من الحملات الإعلانية بلا صدى؟
                  </p>
                  <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    من هنا بدأت أثَر حيث اخترنا ألا نكون ضجيجًا إضافيًا بل أثرًا باقيًا
                  </p>
                  <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                    ونؤمن أن نجاح الحملات لا يقوم على اختلاف الصياغات البيعية وحدها، بل على فهم دقيق للسوق ووعي باحتياجات العملاء، وبناء رسالة تصل في الوقت الصحيح وبالشكل الصحيح
                  </p>
                </>
              ) : (
                // English content
                currentContent.paragraphs.map((paragraph, index) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed ${
                      index === 0
                        ? theme === 'dark'
                          ? 'text-gray-300'
                          : 'text-gray-600'
                        : theme === 'dark'
                        ? 'text-gray-300'
                        : 'text-gray-600'
                    }`}
                  >
                    {paragraph}
                  </p>
                ))
              )}
            </div>

            {/* Key Points */}
            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                { ar: 'فهم دقيق', en: 'Deep Understanding' },
                { ar: 'استراتيجية مبنية', en: 'Built Strategy' },
                { ar: 'رسالة واضحة', en: 'Clear Message' },
                { ar: 'توقيت مثالي', en: 'Perfect Timing' },
              ].map((point, index) => (
                <div
                  key={point.en}
                  className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-500 ${
                    theme === 'dark' ? 'bg-white/5' : 'bg-white'
                  } border border-athar-primary/10`}
                  style={{
                    transitionDelay: `${400 + index * 100}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <div className="w-2 h-2 rounded-full bg-athar-accent flex-shrink-0" />
                  <span className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t(point.ar, point.en)}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
