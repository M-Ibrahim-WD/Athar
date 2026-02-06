import { useLanguage } from '@/contexts/LanguageContext';
import { Shield, Award, Palette, Handshake } from 'lucide-react';

export default function Values() {
  const { t, isRTL } = useLanguage();

  const values = [
    {
      key: 'commitment',
      icon: Shield,
      color: 'from-emerald-500 to-teal-600',
    },
    {
      key: 'professionalism',
      icon: Award,
      color: 'from-blue-500 to-cyan-600',
    },
    {
      key: 'creativity',
      icon: Palette,
      color: 'from-violet-500 to-purple-600',
    },
    {
      key: 'partnership',
      icon: Handshake,
      color: 'from-amber-500 to-orange-600',
    },
  ];

  return (
    <section
      id="values"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-athar-light/5 to-transparent dark:via-athar-light/5" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
              <Award className="w-4 h-4 text-athar-medium dark:text-athar-light" />
              <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                {isRTL ? 'قيمنا' : 'Our Values'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
              {t('values.title') as string}
            </h2>
          </div>

          {/* Values Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={value.key}
                className="group relative p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-transparent transition-all duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Gradient Background on Hover */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6 w-14 h-14 rounded-xl bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                    <value.icon className="w-7 h-7 text-athar-dark dark:text-athar-light group-hover:text-white transition-colors duration-500" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-500">
                    {t(`values.${value.key}.title`) as string}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {t(`values.${value.key}.desc`) as string}
                  </p>
                </div>

                {/* Corner Decoration */}
                <div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Number */}
                <div className="absolute top-4 right-4 text-6xl font-bold text-foreground/5 group-hover:text-white/10 transition-colors duration-500">
                  {index + 1}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
