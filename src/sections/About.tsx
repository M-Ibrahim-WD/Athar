import { useLanguage } from '@/contexts/LanguageContext';
import { Target, TrendingUp, Users } from 'lucide-react';

export default function About() {
  const { t, isRTL } = useLanguage();

  const stats = [
    { icon: Target, value: '50+', label: isRTL ? 'حملة ناجحة' : 'Successful Campaigns' },
    { icon: TrendingUp, value: '95%', label: isRTL ? 'نسبة رضا العملاء' : 'Client Satisfaction' },
    { icon: Users, value: '30+', label: isRTL ? 'عميل سعيد' : 'Happy Clients' },
  ];

  return (
    <section
      id="about"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-athar-light/5 to-transparent dark:from-athar-light/5" />
      
      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Content */}
            <div>
              {/* Section Label */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
                <span className="w-2 h-2 rounded-full bg-athar-medium dark:bg-athar-light" />
                <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                  {isRTL ? 'من نحن' : 'About Us'}
                </span>
              </div>

              {/* Title */}
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground">
                {t('about.title') as string}
              </h2>

              {/* Content Paragraphs */}
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.content') as string}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('about.content2') as string}
                </p>
              </div>

              {/* Decorative Line */}
              <div className="mt-8 flex items-center gap-4">
                <div className="h-1 w-20 rounded-full bg-gradient-to-r from-athar-dark to-athar-light" />
                <div className="h-1 w-10 rounded-full bg-athar-light/50" />
                <div className="h-1 w-5 rounded-full bg-athar-light/30" />
              </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative p-6 md:p-8 rounded-2xl bg-card border border-border hover:border-athar-light/50 transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center group-hover:bg-athar-dark group-hover:dark:bg-athar-light transition-all duration-500">
                      <stat.icon className="w-8 h-8 text-athar-dark dark:text-athar-light group-hover:text-white group-hover:dark:text-athar-darker transition-colors duration-500" />
                    </div>
                    <div>
                      <div className="text-3xl md:text-4xl font-bold gradient-text mb-1">
                        {stat.value}
                      </div>
                      <div className="text-muted-foreground">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
