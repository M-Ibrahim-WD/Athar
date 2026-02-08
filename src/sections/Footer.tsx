import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useSmoothScroll } from '@/hooks/useScrollReveal';
import { 
  Facebook, 
  Instagram, 
  Linkedin,
} from 'lucide-react';

// Custom icons
const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

// Proper Snapchat ghost icon
const SnapchatIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12.206 1c.577 0 2.553.166 4.26 2.064.878 1.01 1.852 2.847 1.852 5.436 0 .485-.035.885-.09 1.227.286.149.717.307 1.175.307.455 0 .913-.155 1.2-.31-.055.342-.09.742-.09 1.227 0 2.59.974 4.426 1.852 5.436 1.194 1.374 2.918 1.944 3.67 2.11-.168.752-.738 2.476-2.112 3.67-1.01.878-2.846 1.852-5.435 1.852-.485 0-.885-.035-1.227-.09-.155.287-.307.718-.307 1.176 0 .455.155.913.31 1.2-.342-.055-.742-.09-1.227-.09-2.589 0-4.425.974-5.435 1.852-1.374 1.194-1.944 2.918-2.11 3.67-.752-.168-2.476-.738-3.67-2.112-.878-1.01-1.852-2.846-1.852-5.435 0-.485.035-.885.09-1.227-.287-.155-.718-.307-1.176-.307-.455 0-.913.155-1.2.31.055-.342.09-.742.09-1.227 0-2.589-.974-4.425-1.852-5.435-1.194-1.374-2.918-1.944-3.67-2.11.168-.752.738-2.476 2.112-3.67 1.01-.878 2.846-1.852 5.435-1.852.485 0 .885.035 1.227.09.155-.287.307-.718.307-1.176 0-.455-.155-.913-.31-1.2.342.055.742.09 1.227.09 2.589 0 4.425-.974 5.435-1.852 1.374-1.194 1.944-2.918 2.11-3.67.752.168 2.476.738 3.67 2.112z"/>
  </svg>
);

const XIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
  </svg>
);

export default function Footer() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const scrollToSection = useSmoothScroll();

  const quickLinks = [
    { id: 'about', ar: 'من نحن', en: 'About' },
    { id: 'vision', ar: 'رؤيتنا', en: 'Vision' },
    { id: 'mission', ar: 'مهمتنا', en: 'Mission' },
    { id: 'values', ar: 'قيمنا', en: 'Values' },
    { id: 'goals', ar: 'أهدافنا', en: 'Goals' },
    { id: 'services', ar: 'خدماتنا', en: 'Services' },
    { id: 'team', ar: 'فريقنا', en: 'Team' },
    { id: 'work', ar: 'أعمالنا', en: 'Work' },
    { id: 'contact', ar: 'تواصل', en: 'Contact' },
  ];

  const serviceLinks = [
    { id: 'services', ar: 'حلول التجارة الإلكترونية', en: 'E-commerce Solutions' },
    { id: 'services', ar: 'تصميم المواقع', en: 'Website Design' },
    { id: 'services', ar: 'التصميم الجرافيكي', en: 'Graphic Design' },
    { id: 'services', ar: 'إدارة التواصل الاجتماعي', en: 'Social Media' },
    { id: 'services', ar: 'الإعلانات المدفوعة', en: 'Paid Advertising' },
    { id: 'services', ar: 'بناء الهوية', en: 'Brand Identity' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: TikTokIcon, href: '#', label: 'TikTok', isCustom: true },
    { icon: SnapchatIcon, href: '#', label: 'Snapchat', isCustom: true },
    { icon: XIcon, href: '#', label: 'X', isCustom: true },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative overflow-hidden">
      {/* Top Border Gradient */}
      <div className="h-px bg-gradient-to-r from-transparent via-athar-accent/50 to-transparent" />

      <div className={`py-12 md:py-16 ${theme === 'dark' ? 'bg-[#0a0f0e]' : 'bg-gray-50'}`}>
        <div className="container-athar">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-3 gap-8 md:gap-12 mb-10">
            {/* Logo & Description */}
            <div className="md:col-span-1">
              <img
                src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                alt="Athar"
                className="h-14 md:h-16 w-auto object-contain mb-4"
              />
              <p className={`text-base md:text-lg mb-2 ${theme === 'dark' ? 'text-gray-300' : 'text-gray-600'}`}>
                {t('أثَر يُرى ونجاح يُروى', 'A visible impact, a narrated success')}
              </p>
              <p className={`text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                {t('وكالة تسويقية متخصصة في صناعة الأثر', 'A marketing agency specialized in creating impact')}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className={`font-bold text-base md:text-lg mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('روابط سريعة', 'Quick Links')}
              </h4>
              <div className="grid grid-cols-2 gap-2">
                {quickLinks.map(link => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className={`text-left text-sm transition-colors duration-300 hover:text-athar-accent ${
                      theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                    }`}
                    style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
                  >
                    {t(link.ar, link.en)}
                  </button>
                ))}
              </div>
            </div>

            {/* Services - Now Clickable */}
            <div>
              <h4 className={`font-bold text-base md:text-lg mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                {t('خدماتنا', 'Services')}
              </h4>
              <ul className="space-y-2">
                {serviceLinks.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => scrollToSection('services')}
                      className={`text-sm transition-colors duration-300 hover:text-athar-accent ${
                        theme === 'dark' ? 'text-gray-400' : 'text-gray-600'
                      }`}
                      style={{ textAlign: language === 'ar' ? 'right' : 'left' }}
                    >
                      {t(service.ar, service.en)}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Bottom Bar - Copyright | Social Icons | Policies */}
          <div className="pt-6 md:pt-8 border-t border-athar-primary/10">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              {/* Copyright */}
              <p className={`text-xs md:text-sm ${theme === 'dark' ? 'text-gray-500' : 'text-gray-500'}`}>
                © 2026 Athar Agency. {t('جميع الحقوق محفوظة.', 'All rights reserved.')}
              </p>
              
              {/* Social Links - Centered */}
              <div className="flex justify-center gap-2 md:gap-3">
                {socialLinks.map(social => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-9 h-9 md:w-10 md:h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 ${
                      theme === 'dark'
                        ? 'bg-white/[0.1] text-gray-400 hover:bg-athar-primary hover:text-white'
                        : 'bg-gray-200 text-gray-600 hover:bg-athar-primary hover:text-white'
                    }`}
                    aria-label={social.label}
                  >
                    {social.isCustom ? (
                      <social.icon />
                    ) : (
                      <social.icon className="w-4 h-4 md:w-5 md:h-5" />
                    )}
                  </a>
                ))}
              </div>
              
              {/* Policies */}
              <div className="flex gap-4 md:gap-6">
                <button className={`text-xs md:text-sm transition-colors duration-300 hover:text-athar-accent ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {t('سياسة الخصوصية', 'Privacy Policy')}
                </button>
                <button className={`text-xs md:text-sm transition-colors duration-300 hover:text-athar-accent ${
                  theme === 'dark' ? 'text-gray-500' : 'text-gray-500'
                }`}>
                  {t('شروط الخدمة', 'Terms of Service')}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
