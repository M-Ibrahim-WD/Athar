import { useLanguage } from '@/contexts/LanguageContext';
import { Eye, Globe, Rocket } from 'lucide-react';

export default function Vision() {
  const { t, isRTL } = useLanguage();

  const visionPoints = [
    {
      icon: Eye,
      content: t('vision.content') as string,
    },
    {
      icon: Globe,
      content: t('vision.content2') as string,
    },
    {
      icon: Rocket,
      content: t('vision.content3') as string,
    },
  ];

  return (
    <section
      id="vision"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-athar-medium/5 via-transparent to-athar-dark/5 dark:from-athar-medium/10 dark:to-athar-dark/10" />

      {/* Decorative Shapes */}
      <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-athar-light/5 dark:bg-athar-light/5 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-48 h-48 rounded-full bg-athar-medium/5 dark:bg-athar-medium/10 blur-2xl" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
              <Eye className="w-4 h-4 text-athar-medium dark:text-athar-light" />
              <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                {isRTL ? 'رؤيتنا' : 'Our Vision'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {t('vision.title') as string}
            </h2>
          </div>

          {/* Vision Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {visionPoints.map((point, index) => (
              <div
                key={index}
                className="group relative p-8 rounded-3xl bg-card border border-border hover:border-athar-light/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >
                {/* Icon */}
                <div className="mb-6 w-16 h-16 rounded-2xl bg-gradient-to-br from-athar-dark to-athar-medium flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <point.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {point.content}
                </p>

                {/* Decorative Corner */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-3xl">
                  <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-athar-light/10 to-transparent" />
                </div>

                {/* Number Badge */}
                <div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-athar-light text-athar-darker text-sm font-bold flex items-center justify-center">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Quote */}
          <div className="mt-16 text-center">
            <div className="inline-block relative">
              <span className="absolute -top-8 -left-8 text-6xl text-athar-light/30 font-serif">
                &ldquo;
              </span>
              <p className="text-xl md:text-2xl font-medium text-foreground italic max-w-3xl mx-auto">
                {isRTL
                  ? 'نصنع الأثر، لا مجرد الحضور'
                  : 'We create impact, not just presence'}
              </p>
              <span className="absolute -bottom-8 -right-8 text-6xl text-athar-light/30 font-serif">
                &rdquo;
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
