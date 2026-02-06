import { useLanguage } from '@/contexts/LanguageContext';
import { Target, Wrench, BarChart3, HeartHandshake } from 'lucide-react';

export default function Goals() {
  const { t, isRTL } = useLanguage();

  const goals = [
    {
      key: 'branding',
      icon: Target,
    },
    {
      key: 'solutions',
      icon: Wrench,
    },
    {
      key: 'results',
      icon: BarChart3,
    },
    {
      key: 'partner',
      icon: HeartHandshake,
    },
  ];

  return (
    <section
      id="goals"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-l from-athar-dark/5 via-transparent to-athar-light/5 dark:from-athar-dark/10 dark:to-athar-light/5" />

      {/* Decorative Elements */}
      <div className="absolute top-1/2 right-0 w-96 h-96 rounded-full bg-athar-light/5 dark:bg-athar-light/5 blur-3xl -translate-y-1/2" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left - Visual */}
            <div className="relative order-2 lg:order-1">
              <div className="relative aspect-square max-w-md mx-auto">
                {/* Central Circle */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-athar-dark to-athar-medium flex items-center justify-center shadow-2xl">
                    <div className="text-center text-white">
                      <Target className="w-12 h-12 mx-auto mb-2" />
                      <span className="text-lg font-bold">
                        {isRTL ? 'أهدافنا' : 'Our Goals'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Orbiting Elements */}
                {[0, 90, 180, 270].map((angle, index) => (
                  <div
                    key={angle}
                    className="absolute top-1/2 left-1/2"
                    style={{
                      transform: `rotate(${angle}deg) translateX(${isRTL ? '-' : ''}140px) rotate(-${angle}deg)`,
                    }}
                  >
                    <div className="w-14 h-14 rounded-xl bg-card border border-athar-light/30 flex items-center justify-center shadow-lg">
                      {(() => {
                        const Icon = goals[index]?.icon;
                        return Icon ? <Icon className="w-6 h-6 text-athar-medium dark:text-athar-light" /> : null;
                      })()}
                    </div>
                  </div>
                ))}

                {/* Orbit Ring */}
                <div className="absolute inset-0 border-2 border-dashed border-athar-light/20 rounded-full" />
              </div>
            </div>

            {/* Right - Content */}
            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
                <Target className="w-4 h-4 text-athar-medium dark:text-athar-light" />
                <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                  {isRTL ? 'أهدافنا' : 'Our Goals'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-foreground">
                {t('goals.title') as string}
              </h2>

              <div className="space-y-6">
                {goals.map((goal) => (
                  <div
                    key={goal.key}
                    className="flex items-start gap-4 p-4 rounded-xl hover:bg-athar-light/5 transition-colors duration-300"
                  >
                    <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center">
                      <goal.icon className="w-5 h-5 text-athar-dark dark:text-athar-light" />
                    </div>
                    <div>
                      <p className="text-lg text-foreground leading-relaxed">
                        {t(`goals.${goal.key}`) as string}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
