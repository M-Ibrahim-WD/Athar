import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  ShoppingCart, 
  Code2, 
  Palette, 
  Share2, 
  Megaphone, 
  Fingerprint,
  Briefcase
} from 'lucide-react';

export default function Services() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const services = [
    {
      icon: ShoppingCart,
      title: { ar: 'حلول التجارة الإلكترونية', en: 'E-commerce Solutions' },
      description: {
        ar: 'حلول متكاملة للمتاجر الإلكترونية لزيادة المبيعات وتحسين تجربة العملاء',
        en: 'Comprehensive e-commerce solutions to increase sales and improve customer experience',
      },
    },
    {
      icon: Code2,
      title: { ar: 'تصميم وتطوير المواقع', en: 'Website Design & Development' },
      description: {
        ar: 'تصميم وتطوير مواقع احترافية تعكس هوية علامتك التجارية',
        en: 'Professional website design and development that reflects your brand identity',
      },
    },
    {
      icon: Palette,
      title: { ar: 'التصميم الجرافيكي', en: 'Graphic Design' },
      description: {
        ar: 'تصاميم إبداعية تجذب الانتباه وتترك انطباعًا دائمًا',
        en: 'Creative designs that capture attention and leave a lasting impression',
      },
    },
    {
      icon: Share2,
      title: { ar: 'إدارة صفحات التواصل الاجتماعي', en: 'Social Media Management' },
      description: {
        ar: 'إدارة احترافية لحضورك على منصات التواصل الاجتماعي',
        en: 'Professional management of your presence on social media platforms',
      },
    },
    {
      icon: Megaphone,
      title: { ar: 'الإعلانات المدفوعة', en: 'Paid Advertising' },
      description: {
        ar: 'حملات إعلانية مدفوعة مستهدفة لتحقيق أعلى عائد على الاستثمار',
        en: 'Targeted paid advertising campaigns to achieve highest ROI',
      },
    },
    {
      icon: Fingerprint,
      title: { ar: 'بناء الهوية والعلامة التجارية', en: 'Brand Identity & Branding' },
      description: {
        ar: 'بناء هوية تجارية فريدة تميزك عن المنافسين',
        en: 'Building a unique brand identity that sets you apart from competitors',
      },
    },
  ];

  return (
    <section
      ref={ref}
      id="services"
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
          className={`text-center mb-8 transition-all duration-700 ease-expo-out ${
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
              {t('خدماتنا', 'Our Services')}
            </span>
          </h2>
        </div>

        {/* Introduction */}
        <div
          className={`max-w-3xl mx-auto text-center mb-16 transition-all duration-700 delay-100 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <p className={`text-lg leading-relaxed ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
            {language === 'ar'
              ? 'في أثَر نقدم حلولًا تسويقية متكاملة ولكن نركز على التجارة الإلكترونية والمواقع، بهدف صناعة أثر قابل للقياس والنمو'
              : 'At Athar, we provide integrated marketing solutions with a strong focus on e-commerce and websites, aiming to create measurable impact and scalable growth'}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title.en}
              className={`group transition-all duration-700 ease-expo-out ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div
                className={`relative h-full p-8 rounded-3xl transition-all duration-500 overflow-hidden ${
                  theme === 'dark'
                    ? 'bg-gradient-to-br from-white/5 to-white/[0.02]'
                    : 'bg-white'
                } border border-athar-primary/10 hover:border-athar-accent/40`}
              >
                {/* Hover gradient background */}
                <div
                  className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${
                    theme === 'dark'
                      ? 'bg-gradient-to-br from-athar-primary/30 to-athar-accent/10'
                      : 'bg-gradient-to-br from-athar-primary/10 to-athar-accent/5'
                  }`}
                />

                {/* Animated border glow */}
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div
                    className="absolute inset-0 rounded-3xl"
                    style={{
                      background: 'linear-gradient(135deg, rgba(42, 243, 152, 0.3) 0%, transparent 50%, rgba(1, 102, 90, 0.3) 100%)',
                      padding: '1px',
                      mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                      maskComposite: 'exclude',
                    }}
                  />
                </div>

                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 relative">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-500">
                      <service.icon className="w-8 h-8 text-white" />
                    </div>
                    {/* Glow effect */}
                    <div className="absolute inset-0 w-16 h-16 rounded-2xl bg-athar-accent/40 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className={`text-xl font-bold mb-3 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t(service.title.ar, service.title.en)}
                  </h3>

                  {/* Description */}
                  <p className={`text-base leading-relaxed ${theme === 'dark' ? 'text-gray-400' : 'text-gray-600'}`}>
                    {t(service.description.ar, service.description.en)}
                  </p>
                </div>

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="absolute -top-10 -right-10 w-20 h-20 bg-athar-accent/20 rounded-full blur-xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
