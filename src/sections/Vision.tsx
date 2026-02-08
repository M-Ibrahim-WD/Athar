import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Eye, Globe, TrendingUp, Target } from 'lucide-react';

export default function Vision() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.2 });

  const visions = [
    {
      icon: Target,
      ar: 'أن نكون وكالة تسويقية يُقاس نجاحها بما تتركه من أثر بقيمة الحملة وليس بعددها',
      en: 'To become a marketing agency whose success is measured by the value of the impact it creates, not by the number of campaigns it delivers',
    },
    {
      icon: Globe,
      ar: 'نطمح بالتوسع داخل السوق العربي حاليًا من خلال خدماتنا التسويقية، ولأننا لا نضع حدًا للإبداع نسعى لوصول خدماتنا للسوق الأوروبي',
      en: 'We aspire to expand within the Arab Market through our marketing services and because we set no limits on creativity, we also seek to extend our services into the European market',
    },
    {
      icon: TrendingUp,
      ar: 'نعلم أن الوصول لأكفأ النتائج يتطلب سعيًا دؤوبًا ومرونة حتى نصل بعجلة الإنجاز إلى أقصاها وهذا ما يدفعنا إلى تحقيق أعلى نسب التحويل التي نطمح لها',
      en: 'We believe that achieving optimal results requires continuous efforts and flexibility, enabling us to push the wheel of execution to its fullest potential driving us towards the highest conversion rates we strive to achieve',
    },
  ];

  return (
    <section
      ref={ref}
      id="vision"
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
        {/* Decorative Elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full opacity-10">
          <div
            className="w-full h-full rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(42, 243, 152, 0.2) 0%, transparent 70%)',
            }}
          />
        </div>
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
            <Eye className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('رؤيتنا', 'Our Vision')}
            </span>
          </h2>
        </div>

        {/* Vision Cards */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {visions.map((vision, index) => (
            <div
              key={index}
              className={`group relative transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-500 ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02] hover:from-white/10 hover:to-white/5'
                    : 'bg-gradient-to-br from-white to-gray-50 hover:shadow-xl'
                } border border-athar-primary/10 hover:border-athar-accent/30`}
              >
                {/* Icon */}
                <div className="mb-6 relative">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                    <vision.icon className="w-7 h-7 text-white" />
                  </div>
                  {/* Glow effect */}
                  <div className="absolute inset-0 w-14 h-14 rounded-2xl bg-athar-accent/30 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <p
                  className={`text-lg leading-relaxed ${
                    theme === 'dark' ? 'text-gray-300' : 'text-gray-600'
                  }`}
                >
                  {t(vision.ar, vision.en)}
                </p>

                {/* Decorative corner */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-athar-accent/20 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-athar-accent/20 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Decorative Line */}
        <div
          className={`mt-16 flex justify-center transition-all duration-1000 ease-expo-out ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-athar-accent/50" />
            <div className="w-2 h-2 rounded-full bg-athar-accent animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-athar-accent/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
