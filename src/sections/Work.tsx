import { useLanguage } from '@/contexts/LanguageContext';
import { Briefcase, Star } from 'lucide-react';

export default function Work() {
  const { t, isRTL } = useLanguage();

  // Client logos - using placeholder styled divs since we don't have actual client logos
  const clients = [
    { name: 'Client 1', initials: 'C1' },
    { name: 'Client 2', initials: 'C2' },
    { name: 'Client 3', initials: 'C3' },
    { name: 'Client 4', initials: 'C4' },
    { name: 'Client 5', initials: 'C5' },
    { name: 'Client 6', initials: 'C6' },
    { name: 'Client 7', initials: 'C7' },
    { name: 'Client 8', initials: 'C8' },
  ];

  // Duplicate for seamless loop
  const allClients = [...clients, ...clients];

  return (
    <section
      id="work"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-athar-dark/5 to-athar-light/5 dark:from-athar-dark/10 dark:to-athar-light/5" />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 section-padding">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
            <Briefcase className="w-4 h-4 text-athar-medium dark:text-athar-light" />
            <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
              {isRTL ? 'أعمالنا' : 'Our Work'}
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
            {t('work.title') as string}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('work.subtitle') as string}
          </p>
        </div>

        {/* Scrolling Logos Marquee */}
        <div className="relative">
          {/* Gradient Masks */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

          {/* Marquee Container */}
          <div className="flex overflow-hidden">
            <div className="flex animate-marquee">
              {allClients.map((client, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 mx-6 md:mx-10"
                >
                  <div className="w-32 h-20 md:w-40 md:h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-athar-light/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-athar-dark group-hover:dark:bg-athar-light transition-colors duration-300">
                        <span className="text-sm font-bold text-athar-dark dark:text-athar-light group-hover:text-white group-hover:dark:text-athar-darker transition-colors duration-300">
                          {client.initials}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{client.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* Duplicate for seamless loop */}
            <div className="flex animate-marquee" aria-hidden="true">
              {allClients.map((client, index) => (
                <div
                  key={`dup-${index}`}
                  className="flex-shrink-0 mx-6 md:mx-10"
                >
                  <div className="w-32 h-20 md:w-40 md:h-24 rounded-xl bg-card border border-border flex items-center justify-center hover:border-athar-light/50 hover:shadow-lg transition-all duration-300 group">
                    <div className="text-center">
                      <div className="w-12 h-12 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center mx-auto mb-2 group-hover:bg-athar-dark group-hover:dark:bg-athar-light transition-colors duration-300">
                        <span className="text-sm font-bold text-athar-dark dark:text-athar-light group-hover:text-white group-hover:dark:text-athar-darker transition-colors duration-300">
                          {client.initials}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">{client.name}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 section-padding">
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: '50+', label: isRTL ? 'مشروع' : 'Projects' },
              { value: '30+', label: isRTL ? 'عميل' : 'Clients' },
              { value: '5+', label: isRTL ? 'سنوات' : 'Years' },
              { value: '100%', label: isRTL ? 'التزام' : 'Commitment' },
            ].map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-2xl bg-card border border-border"
              >
                <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial */}
        <div className="mt-16 section-padding">
          <div className="max-w-3xl mx-auto">
            <div className="relative p-8 md:p-12 rounded-3xl bg-gradient-to-br from-athar-dark to-athar-medium text-white text-center">
              {/* Quote Icon */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-athar-light flex items-center justify-center">
                <Star className="w-6 h-6 text-athar-darker" />
              </div>

              <p className="text-lg md:text-xl leading-relaxed mb-6">
                {isRTL
                  ? 'عملت مع وكالة أثَر على عدة مشاريع وكانت النتائج دائماً مبهرة. فريق محترف يفهم احتياجات العملاء ويقدم حلولاً إبداعية.'
                  : 'I have worked with Athar Agency on several projects and the results have always been impressive. A professional team that understands client needs and delivers creative solutions.'}
              </p>

              <div className="flex items-center justify-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-lg font-bold">A</span>
                </div>
                <div className="text-left">
                  <div className="font-semibold">
                    {isRTL ? 'عميل سعيد' : 'Happy Client'}
                  </div>
                  <div className="text-sm text-white/70">
                    {isRTL ? 'مدير تنفيذي' : 'CEO'}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
