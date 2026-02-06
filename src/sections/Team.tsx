import { useLanguage } from '@/contexts/LanguageContext';
import { Users, Code, ShoppingBag, UserCircle, PenTool, Paintbrush, Headphones } from 'lucide-react';

export default function Team() {
  const { t, isRTL } = useLanguage();

  const teamMembers = [
    {
      name: 'Mohamed Moustafa',
      roleKey: 'team.role.senior_software',
      icon: Code,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      name: 'Mohamed Ibrahim',
      roleKey: 'team.role.web_developer',
      icon: Code,
      color: 'from-emerald-500 to-teal-500',
    },
    {
      name: 'Hady Khaled',
      roleKey: 'team.role.media_buyer',
      icon: ShoppingBag,
      color: 'from-violet-500 to-purple-500',
    },
    {
      name: 'Muhanad Mohamed',
      roleKey: 'team.role.account_manager',
      icon: UserCircle,
      color: 'from-amber-500 to-orange-500',
    },
    {
      name: 'Engy Nasr',
      roleKey: 'team.role.content_creator',
      icon: PenTool,
      color: 'from-pink-500 to-rose-500',
    },
    {
      name: 'Aya Osama',
      roleKey: 'team.role.designer',
      icon: Paintbrush,
      color: 'from-indigo-500 to-blue-500',
    },
    {
      name: 'Mohamed Salah',
      roleKey: 'team.role.designer',
      icon: Paintbrush,
      color: 'from-cyan-500 to-sky-500',
    },
    {
      name: 'Abd Elrahman',
      roleKey: 'team.role.seller',
      icon: Headphones,
      color: 'from-green-500 to-emerald-500',
    },
  ];

  return (
    <section
      id="team"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-athar-light/5 via-transparent to-athar-dark/5 dark:from-athar-light/5 dark:to-athar-dark/10" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
              <Users className="w-4 h-4 text-athar-medium dark:text-athar-light" />
              <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                {isRTL ? 'فريقنا' : 'Our Team'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('team.title') as string}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {isRTL
                ? 'فريق من الخبراء المكرسين لتحقيق نجاحك'
                : 'A team of experts dedicated to your success'}
            </p>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-card border border-border hover:border-athar-light/30 transition-all duration-500 hover:-translate-y-2 text-center"
              >
                {/* Avatar */}
                <div className="relative mx-auto mb-4 w-20 h-20">
                  <div
                    className={`absolute inset-0 rounded-full bg-gradient-to-br ${member.color} opacity-20 group-hover:opacity-40 transition-opacity duration-500`}
                  />
                  <div className="absolute inset-1 rounded-full bg-card flex items-center justify-center">
                    <member.icon className="w-8 h-8 text-athar-dark dark:text-athar-light" />
                  </div>
                  {/* Status Indicator */}
                  <div className="absolute bottom-0 right-0 w-5 h-5 rounded-full bg-green-500 border-2 border-card" />
                </div>

                {/* Name */}
                <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-athar-dark dark:group-hover:text-athar-light transition-colors duration-300">
                  {member.name}
                </h3>

                {/* Role */}
                <p className="text-sm text-muted-foreground">
                  {t(member.roleKey) as string}
                </p>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-athar-light/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
