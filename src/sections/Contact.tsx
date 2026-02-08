import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { useScrollReveal } from '@/hooks/useScrollReveal';
import { 
  Mail, 
  Phone, 
  Send, 
  Facebook, 
  Instagram, 
  Linkedin,
  MessageCircle,
  User,
  ChevronDown,
  CheckCircle
} from 'lucide-react';

// Custom icons for TikTok, Snapchat, X
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

export default function Contact() {
  const { language, t } = useLanguage();
  const { theme } = useTheme();
  const { ref, isVisible } = useScrollReveal<HTMLElement>({ threshold: 0.1 });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Create styled email content
    const emailSubject = encodeURIComponent(`New Message from ${formData.name} - Athar Website`);
    const emailBody = encodeURIComponent(`
================================
    ATHAR AGENCY - NEW MESSAGE
================================

Sender Information:
-------------------
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone || 'Not provided'}
Service: ${formData.service || 'All Services'}

Message:
--------
${formData.message}

--------------------------------
Sent from: Athar Agency Website
Date: ${new Date().toLocaleString()}
================================
    `);
    
    // Open mailto link
    window.location.href = `mailto:Support@atharagency.co?subject=${emailSubject}&body=${emailBody}`;
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    
    // Reset after showing success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const services = [
    { value: '', ar: 'جميع الخدمات', en: 'All Services' },
    { value: 'ecommerce', ar: 'التجارة الإلكترونية', en: 'E-commerce' },
    { value: 'website', ar: 'تصميم المواقع', en: 'Website Design' },
    { value: 'graphic', ar: 'التصميم الجرافيكي', en: 'Graphic Design' },
    { value: 'social', ar: 'التواصل الاجتماعي', en: 'Social Media' },
    { value: 'ads', ar: 'الإعلانات المدفوعة', en: 'Paid Ads' },
    { value: 'branding', ar: 'بناء الهوية', en: 'Branding' },
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
    <section
      ref={ref}
      id="contact"
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: theme === 'dark'
              ? 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.1) 0%, transparent 60%)'
              : 'radial-gradient(ellipse at center, rgba(1, 102, 90, 0.05) 0%, transparent 60%)',
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
            <MessageCircle className="w-6 h-6 text-athar-accent" />
            <div className="w-12 h-1 bg-gradient-to-l from-transparent to-athar-accent rounded-full" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            <span className={theme === 'dark' ? 'text-white' : 'text-gray-900'}>
              {t('تواصل معنا', 'Contact Us')}
            </span>
          </h2>
          <p className={`text-lg max-w-2xl mx-auto ${theme === 'dark' ? 'text-gray-400' : 'text-gray-500'}`}>
            {t('نحن هنا لمساعدتك في تحقيق أهدافك', 'We are here to help you achieve your goals')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact Info */}
          <div
            className={`transition-all duration-700 delay-200 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[-50px]'
            }`}
          >
            <div className="space-y-6">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {/* Phone */}
                <a
                  href="tel:01515852552"
                  className={`group p-5 rounded-2xl transition-all duration-500 ${
                    theme === 'dark'
                      ? 'bg-white/[0.05] hover:bg-white/[0.1]'
                      : 'bg-white hover:shadow-lg'
                  } border border-athar-primary/10 hover:border-athar-accent/30`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('الهاتف', 'Phone')}
                  </h3>
                  <p className="text-athar-accent">01515852552</p>
                </a>

                {/* Email */}
                <a
                  href="mailto:Support@atharagency.co"
                  className={`group p-5 rounded-2xl transition-all duration-500 ${
                    theme === 'dark'
                      ? 'bg-white/[0.05] hover:bg-white/[0.1]'
                      : 'bg-white hover:shadow-lg'
                  } border border-athar-primary/10 hover:border-athar-accent/30`}
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-athar-primary to-athar-primary-light flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-500">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`font-bold mb-1 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                    {t('البريد الإلكتروني', 'Email')}
                  </h3>
                  <p className="text-athar-accent text-sm">Support@atharagency.co</p>
                </a>
              </div>

              {/* Social Links */}
              <div>
                <h3 className={`font-bold mb-4 ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
                  {t('تابعنا على', 'Follow Us')}
                </h3>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] hover:bg-athar-primary text-gray-400 hover:text-white'
                          : 'bg-white hover:bg-athar-primary text-gray-600 hover:text-white'
                      } border border-athar-primary/10 hover:border-athar-accent/30 hover:scale-110`}
                      aria-label={social.label}
                    >
                      {social.isCustom ? (
                        <social.icon />
                      ) : (
                        <social.icon className="w-5 h-5" />
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div
            className={`transition-all duration-700 delay-300 ease-expo-out ${
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-[50px]'
            }`}
          >
            <form
              onSubmit={handleSubmit}
              className={`p-6 md:p-8 rounded-3xl ${
                theme === 'dark'
                  ? 'bg-white/[0.05]'
                  : 'bg-white'
              } border border-athar-primary/10`}
            >
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('الاسم', 'Name')}
                  </label>
                  <div className="relative">
                    <User className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-athar-primary/50 ${language === 'ar' ? 'right-4' : 'left-4'}`} />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className={`w-full ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-athar-accent/50 ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] border-athar-primary/20 text-white placeholder-gray-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      } ${language === 'ar' ? 'text-right placeholder:text-right' : 'text-left placeholder:text-left'}`}
                      placeholder={t('أدخل اسمك', 'Enter your name')}
                      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('البريد الإلكتروني', 'Email')}
                  </label>
                  <div className="relative">
                    <Mail className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-athar-primary/50 ${language === 'ar' ? 'right-4' : 'left-4'}`} />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className={`w-full ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-athar-accent/50 ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] border-athar-primary/20 text-white placeholder-gray-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      } ${language === 'ar' ? 'text-right placeholder:text-right' : 'text-left placeholder:text-left'}`}
                      placeholder={t('أدخل بريدك', 'Enter your email')}
                      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('رقم الهاتف', 'Phone Number')}
                  </label>
                  <div className="relative">
                    <Phone className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-athar-primary/50 ${language === 'ar' ? 'right-4' : 'left-4'}`} />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full ${language === 'ar' ? 'pr-12 pl-4' : 'pl-12 pr-4'} py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-athar-accent/50 ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] border-athar-primary/20 text-white placeholder-gray-500'
                          : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                      } ${language === 'ar' ? 'text-right placeholder:text-right' : 'text-left placeholder:text-left'}`}
                      placeholder={t('أدخل رقم هاتفك', 'Enter your phone')}
                      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                    />
                  </div>
                </div>

                {/* Service - Styled Dropdown */}
                <div className="space-y-2">
                  <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                    {t('الخدمة', 'Service')}
                  </label>
                  <div className="relative">
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className={`w-full ${language === 'ar' ? 'pr-4 pl-12 text-right' : 'pl-4 pr-12 text-left'} py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-athar-accent/50 appearance-none cursor-pointer ${
                        theme === 'dark'
                          ? 'bg-white/[0.05] border-athar-primary/20 text-white'
                          : 'bg-gray-50 border-gray-200 text-gray-900'
                      }`}
                      style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                    >
                      {services.map(service => (
                        <option 
                          key={service.value} 
                          value={service.value}
                          className={theme === 'dark' 
                            ? 'bg-[#0d1412] text-white py-2' 
                            : 'bg-white text-gray-900 py-2'
                          }
                          style={{ 
                            backgroundColor: theme === 'dark' ? '#0d1412' : '#ffffff',
                            color: theme === 'dark' ? '#ffffff' : '#1f2937',
                            padding: '8px 12px'
                          }}
                        >
                          {t(service.ar, service.en)}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 text-athar-primary/50 pointer-events-none ${language === 'ar' ? 'left-4' : 'right-4'}`} />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2 mt-5">
                <label className={`text-sm font-medium ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                  {t('الرسالة', 'Message')}
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  required
                  className={`w-full px-4 py-3 rounded-xl border transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-athar-accent/50 resize-none ${
                    theme === 'dark'
                      ? 'bg-white/[0.05] border-athar-primary/20 text-white placeholder-gray-500'
                      : 'bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400'
                  } ${language === 'ar' ? 'text-right placeholder:text-right' : 'text-left placeholder:text-left'}`}
                  placeholder={t('اكتب رسالتك هنا...', 'Write your message here...')}
                  style={{ direction: language === 'ar' ? 'rtl' : 'ltr' }}
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting || isSubmitted}
                className={`w-full mt-6 py-4 rounded-xl font-medium text-white transition-all duration-500 flex items-center justify-center gap-2 ${
                  isSubmitted
                    ? 'bg-green-500'
                    : 'bg-gradient-to-r from-athar-primary to-athar-primary-light hover:shadow-lg hover:shadow-athar-primary/30'
                } disabled:cursor-not-allowed`}
              >
                {isSubmitting ? (
                  <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                ) : isSubmitted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>{t('تم الإرسال!', 'Sent!')}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t('إرسال الرسالة', 'Send Message')}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
