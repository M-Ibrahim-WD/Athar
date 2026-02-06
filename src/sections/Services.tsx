import { useLanguage } from '@/contexts/LanguageContext';
import {
  ShoppingCart,
  Globe,
  Palette,
  Share2,
  Megaphone,
  Fingerprint,
  ArrowUpRight,
} from 'lucide-react';

export default function Services() {
  const { t, isRTL } = useLanguage();

  const services = [
    {
      key: 'ecommerce',
      icon: ShoppingCart,
      gradient: 'from-emerald-500 to-teal-600',
    },
    {
      key: 'webdesign',
      icon: Globe,
      gradient: 'from-blue-500 to-cyan-600',
    },
    {
      key: 'graphic',
      icon: Palette,
      gradient: 'from-violet-500 to-purple-600',
    },
    {
      key: 'social',
      icon: Share2,
      gradient: 'from-pink-500 to-rose-600',
    },
    {
      key: 'ads',
      icon: Megaphone,
      gradient: 'from-amber-500 to-orange-600',
    },
    {
      key: 'branding',
      icon: Fingerprint,
      gradient: 'from-indigo-500 to-blue-600',
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-athar-dark/5 via-transparent to-athar-medium/5 dark:from-athar-dark/10 dark:to-athar-medium/10" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
              <Palette className="w-4 h-4 text-athar-medium dark:text-athar-light" />
              <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                {isRTL ? 'خدماتنا' : 'Our Services'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('services.title') as string}
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              {t('services.subtitle') as string}
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {services.map((service, index) => (
              <div
                key={service.key}
                className="group relative p-6 md:p-8 rounded-3xl bg-card border border-border hover:border-transparent transition-all duration-500 hover:-translate-y-2 overflow-hidden cursor-pointer"
              >
                {/* Hover Gradient */}
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Arrow */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="w-14 h-14 rounded-xl bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-500">
                      <service.icon className="w-7 h-7 text-athar-dark dark:text-athar-light group-hover:text-white transition-colors duration-500" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-athar-light/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-x-4 group-hover:translate-x-0">
                      <ArrowUpRight className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-white transition-colors duration-500">
                    {t(`services.${service.key}.title`) as string}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground group-hover:text-white/90 leading-relaxed transition-colors duration-500">
                    {t(`services.${service.key}.desc`) as string}
                  </p>
                </div>

                {/* Number Badge */}
                <div className="absolute top-4 right-4 w-8 h-8 rounded-full bg-athar-light/10 text-athar-dark dark:text-athar-light text-sm font-bold flex items-center justify-center group-hover:bg-white/20 group-hover:text-white transition-all duration-500">
                  {String(index + 1).padStart(2, '0')}
                </div>

                {/* Bottom Glow */}
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-athar-light to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
