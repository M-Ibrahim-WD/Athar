import { useLanguage } from '@/contexts/LanguageContext';
import { Compass, Lightbulb, CheckCircle } from 'lucide-react';

export default function Mission() {
  const { t, isRTL } = useLanguage();

  const missionSteps = [
    {
      icon: Lightbulb,
      title: isRTL ? 'الفكرة' : 'Idea',
      description: isRTL ? 'نبدأ بفهم رؤيتك وأهدافك' : 'We start by understanding your vision and goals',
    },
    {
      icon: Compass,
      title: isRTL ? 'التخطيط' : 'Planning',
      description: isRTL ? 'نضع استراتيجية مخصصة لنجاحك' : 'We create a customized strategy for your success',
    },
    {
      icon: CheckCircle,
      title: isRTL ? 'التنفيذ' : 'Execution',
      description: isRTL ? 'ننفذ باحترافية لتحقيق النتائج' : 'We execute professionally to achieve results',
    },
  ];

  return (
    <section
      id="mission"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-tr from-athar-dark/5 via-transparent to-athar-light/5 dark:from-athar-dark/10 dark:to-athar-light/5" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
                <Compass className="w-4 h-4 text-athar-medium dark:text-athar-light" />
                <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                  {isRTL ? 'مهمتنا' : 'Our Mission'}
                </span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-8 text-foreground">
                {t('mission.title') as string}
              </h2>

              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('mission.content') as string}
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {t('mission.content2') as string}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="mt-10 flex items-center gap-3">
                <div className="w-12 h-1 rounded-full bg-athar-light" />
                <div className="w-6 h-1 rounded-full bg-athar-medium/50" />
                <div className="w-3 h-1 rounded-full bg-athar-dark/30" />
              </div>
            </div>

            {/* Right Content - Steps */}
            <div className="relative">
              {/* Connection Line */}
              <div className="absolute top-0 bottom-0 left-8 w-0.5 bg-gradient-to-b from-athar-dark via-athar-medium to-athar-light hidden md:block" />

              <div className="space-y-8">
                {missionSteps.map((step, index) => (
                  <div
                    key={index}
                    className="relative flex items-start gap-6 group"
                  >
                    {/* Step Number & Icon */}
                    <div className="relative z-10 flex-shrink-0">
                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-athar-dark to-athar-medium flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg">
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 pt-2">
                      <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-athar-dark dark:group-hover:text-athar-light transition-colors duration-300">
                        {step.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {step.description}
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
