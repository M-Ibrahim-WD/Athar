import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { Users, Code, ShoppingBag, UserCheck, PenTool, Headphones } from 'lucide-react';

// Custom avatar icons for each team member
const avatarIcons: Record<string, React.ElementType> = {
  'Mohamed Moustafa': Code,
  'Mohamed Ibrahim': Code,
  'Hady Khaled': ShoppingBag,
  'Muhanad Mohamed': UserCheck,
  'Engy Nasr': PenTool,
  'Aya Osama': PenTool,
  'Mohamed Salah': PenTool,
  'Abd Elrahman': Headphones,
};

// Gradient colors for each member
const memberGradients = [
  'from-cyan-400 to-blue-500',
  'from-emerald-400 to-teal-500',
  'from-violet-400 to-purple-500',
  'from-amber-400 to-orange-500',
  'from-rose-400 to-pink-500',
  'from-sky-400 to-indigo-500',
  'from-lime-400 to-green-500',
  'from-fuchsia-400 to-purple-500',
];

export default function Team() {
  const { t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });

  const teamMembers = [
    { name: 'Mohamed Moustafa', role: { ar: 'مهندس برمجيات أول', en: 'Senior Software Engineer' } },
    { name: 'Mohamed Ibrahim', role: { ar: 'مطور ويب أول', en: 'Senior Web Developer' } },
    { name: 'Hady Khaled', role: { ar: 'مشتري إعلامي', en: 'Media Buyer' } },
    { name: 'Muhanad Mohamed', role: { ar: 'مدير حسابات', en: 'Account Manager' } },
    { name: 'Engy Nasr', role: { ar: 'صانعة محتوى', en: 'Content Creator' } },
    { name: 'Aya Osama', role: { ar: 'مصممة', en: 'Designer' } },
    { name: 'Mohamed Salah', role: { ar: 'مصمم', en: 'Designer' } },
    { name: 'Abd Elrahman', role: { ar: 'مبيعات', en: 'Seller' } },
  ];

  return (
    <section
      ref={ref}
      id="team"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.08) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.04) 0%, transparent 60%)',
          }}
        />
      </div>

      <div className="container-athar relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-12 transition-all duration-700 ease-expo-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-1 bg-gradient-to-r from-transparent to-athar-accent rounded-full" />
            <Users className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('فريقنا', 'Our Team')}
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('نخبة من المحترفين المكرسين لنجاحك', 'A team of professionals dedicated to your success')}
          </p>
        </div>

        {/* Team Grid - Professional Design */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {teamMembers.map((member, index) => {
            const IconComponent = avatarIcons[member.name] || UserCheck;
            const gradient = memberGradients[index % memberGradients.length];
            
            return (
              <div
                key={member.name}
                className={`group transition-all duration-700 ease-expo-out ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{ transitionDelay: `${200 + index * 80}ms` }}
              >
                <div
                  className={`relative p-5 md:p-6 rounded-2xl text-center transition-all duration-500 overflow-hidden ${
                    theme === 'dark'
                      ? 'bg-gradient-to-b from-white/[0.08] to-white/[0.02] hover:from-white/[0.12] hover:to-white/[0.05]'
                      : 'bg-white hover:shadow-xl'
                  } border border-athar-primary/10 hover:border-athar-accent/40`}
                >
                  {/* Top gradient line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${gradient} opacity-60 group-hover:opacity-100 transition-opacity`} />
                  
                  {/* Avatar with gradient background */}
                  <div className="relative inline-flex items-center justify-center mb-4">
                    {/* Outer glow ring */}
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-br ${gradient} opacity-30 blur-md group-hover:opacity-50 transition-opacity`} />
                    
                    {/* Avatar circle */}
                    <div className={`relative w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg`}>
                      <IconComponent className="w-7 h-7 md:w-8 md:h-8 text-white" />
                    </div>
                    
                    {/* Status indicator */}
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-athar-accent border-2 border-athar-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                  </div>

                  {/* Info */}
                  <h3 className={`font-bold text-sm md:text-base mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {member.name}
                  </h3>
                  <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
                    {t(member.role.ar, member.role.en)}
                  </p>

                  {/* Hover accent */}
                  <div className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r ${gradient} group-hover:w-1/2 transition-all duration-500`} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
