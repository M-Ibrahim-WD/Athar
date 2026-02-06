import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string | string[];
  isRTL: boolean;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.about': 'من نحن',
    'nav.vision': 'رؤيتنا',
    'nav.mission': 'مهمتنا',
    'nav.values': 'قيمنا',
    'nav.goals': 'أهدافنا',
    'nav.services': 'خدماتنا',
    'nav.team': 'فريقنا',
    'nav.work': 'أعمالنا',
    'nav.contact': 'اتصل بنا',
    
    // Hero
    'hero.slogan': 'أثرٌ واضح، نجاحٌ مُروى',
    'hero.subtitle': 'وكالة تسويقية إلكترونية متخصصة في صناعة الأثر الرقمي',
    'hero.cta': 'ابدأ مشروعك',
    'hero.scroll': 'اسحب للأسفل',
    
    // About
    'about.title': 'من نحن؟',
    'about.content': 'تعتبر الخدمات التسويقية من أكثر الخدمات التي تتطلب خبرة واستراتيجية تسويقية مبنية على فهم للسوق والجمهور المستهدف ومع ذلك، يظل السؤال حاضرًا: لماذا تمر كثير من الحملات الإعلانية بلا صدى؟',
    'about.content2': 'من هنا بدأت أثَر حيث اخترنا ألا نكون ضجيجًا إضافيًا بل أثرًا باقيًا ونؤمن أن نجاح الحملات لا يقوم على اختلاف الصياغات البيعية وحدها، بل على فهم دقيق للسوق ووعي باحتياجات العملاء، وبناء رسالة تصل في الوقت الصحيح وبالشكل الصحيح',
    
    // Vision
    'vision.title': 'رؤيتنا',
    'vision.content': 'أن نكون وكالة تسويقية يُقاس نجاحها بما تتركه من أثر بقيمة الحملة وليس بعددها',
    'vision.content2': 'نطمح بالتوسع داخل السوق العربي حاليًا من خلال خدماتنا التسويقية، ولأننا لا نضع حدًا للإبداع نسعى لوصول خدماتنا للسوق الأوروبي',
    'vision.content3': 'نعلم أن الوصول لأكفأ النتائج يتطلب سعيًا دؤوبًا ومرونة حتى نصل بعجلة الإنجاز إلى أقصاها وهذا ما يدفعنا إلى تحقيق أعلى نسب التحويل التي نطمح لها',
    
    // Mission
    'mission.title': 'مهمتنا',
    'mission.content': 'نعتمد على فلسفة قائمة وهي أن نحول الأفكار إلى حضور والعلامات إلى قصص نجاح والقصص إلى نتائج ملموسة',
    'mission.content2': 'حيث نرافق شركاء النجاح من أول الفكرة وصولاً للنتائج المطلوبة بعملٍ صادق، وتخطيط ذكي، وتنفيذ بعد دراسة',
    
    // Values
    'values.title': 'قيمنا',
    'values.commitment.title': 'الإلتزام',
    'values.commitment.desc': 'نلتزم بتقديم خدماتنا وفق نموذج قائم على مسؤولية الوصول للنتائج الموعود بها',
    'values.professionalism.title': 'الاحترافية',
    'values.professionalism.desc': 'أن تكون خدماتنا التسويقية على مستوى عالٍ من الاحترافية بعيدًا عن القوالب الجاهزة والتكرار',
    'values.creativity.title': 'الإبداع المسؤول',
    'values.creativity.desc': 'نقدم خدمات إبداعية لخدمة الهدف الأساسي وليس لمجرد عرض للفكرة',
    'values.partnership.title': 'الشراكة',
    'values.partnership.desc': 'نجاحك ليس مشروعًا عابرًا بل علاقة شراكة مستمرة',
    
    // Goals
    'goals.title': 'أهدافنا',
    'goals.branding': 'بناء علامات تجارية ذات هوية واضحة بأثر طويل المدى',
    'goals.solutions': 'تقديم حلول تسويقية تحل مشاكل العملاء لنصل بهم إلى بر الأمان',
    'goals.results': 'تحقيق نتائج قابلة للقياس',
    'goals.partner': 'أن تكون أثَر شريك نمو حقيقي وليس مجرد مزود لخدمة التسويق',
    
    // Services
    'services.title': 'خدماتنا',
    'services.subtitle': 'في أثَر نقدم حلولًا تسويقية متكاملة ولكن نركز على التجارة الإلكترونية والمواقع، بهدف صناعة أثر قابل للقياس والنمو',
    'services.ecommerce.title': 'حلول التجارة الإلكترونية',
    'services.ecommerce.desc': 'استراتيجيات تسويق مخصصة لزيادة المبيعات، تحسين تجربة الشراء، ورفع معدلات التحويل',
    'services.webdesign.title': 'تصميم وتطوير المواقع',
    'services.webdesign.desc': 'مواقع تعكس هوية العلامة التجارية ومُصممة لتحقيق الأداء والتحويل، لا مجرد الحضور',
    'services.graphic.title': 'التصميم الجرافيكي',
    'services.graphic.desc': 'تصميمات بصرية احترافية تخدم الرسالة التسويقية وتدعم الصورة الذهنية للعلامة التجارية',
    'services.social.title': 'إدارة صفحات التواصل الاجتماعي',
    'services.social.desc': 'عن طريق استراتيجية محتوى تسويقية توازن بين بناء الثقة وتحقيق الأهداف التسويقية',
    'services.ads.title': 'الإعلانات المدفوعة',
    'services.ads.desc': 'حملات إعلانية مدروسة مبنية على تحليل وبيانات للوصول للنتائج الفعلية',
    'services.branding.title': 'بناء الهوية والعلامة التجارية',
    'services.branding.desc': 'نحوّل العلامات التجارية إلى حضور واضح وأثر طويل المدى',
    
    // Team
    'team.title': 'فريقنا',
    'team.role.senior_software': 'مهندس برمجيات أول',
    'team.role.web_developer': 'مطور ويب أول',
    'team.role.media_buyer': 'مشتري إعلانات',
    'team.role.account_manager': 'مدير حسابات',
    'team.role.content_creator': 'صانع محتوى',
    'team.role.designer': 'مصمم',
    'team.role.seller': 'مبيعات',
    
    // Work
    'work.title': 'أعمالنا',
    'work.subtitle': 'شركاء نفتخر بالعمل معهم',
    
    // Contact
    'contact.title': 'اتصل بنا',
    'contact.subtitle': 'نحن هنا لمساعدتك في تحقيق أهدافك التسويقية',
    'contact.phone': 'الهاتف',
    'contact.email': 'البريد الإلكتروني',
    'contact.social': 'وسائل التواصل الاجتماعي',
    'contact.form.name': 'الاسم',
    'contact.form.email': 'البريد الإلكتروني',
    'contact.form.phone': 'رقم الهاتف',
    'contact.form.service': 'اختر الخدمة',
    'contact.form.service.all': 'جميع الخدمات',
    'contact.form.message': 'الرسالة',
    'contact.form.submit': 'إرسال',
    'contact.form.success': 'تم إرسال رسالتك بنجاح!',
    
    // Footer
    'footer.description': 'وكالة تسويقية إلكترونية متخصصة في صناعة الأثر الرقمي الملموس',
    'footer.quick_links': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'تواصل معنا',
    'footer.privacy': 'سياسة الخصوصية',
    'footer.terms': 'شروط الخدمة',
    'footer.rights': '© 2026 وكالة أثَر. جميع الحقوق محفوظة.',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About Us',
    'nav.vision': 'Vision',
    'nav.mission': 'Mission',
    'nav.values': 'Values',
    'nav.goals': 'Goals',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.work': 'Our Work',
    'nav.contact': 'Contact Us',
    
    // Hero
    'hero.slogan': 'A visible impact, a narrated success',
    'hero.subtitle': 'An e-marketing agency specialized in creating measurable digital impact',
    'hero.cta': 'Start Your Project',
    'hero.scroll': 'Scroll Down',
    
    // About
    'about.title': 'About Us',
    'about.content': 'Marketing services are among the fields that most require expertise and well-built strategy based on a deep understanding of the market and the target audience. Yet one question remains persistent: why do so many advertising campaigns pass without impact?',
    'about.content2': 'From here Athar was born. We chose not to be additional noise, but lasting impact. We believe that the success of campaigns is not built on different sales copy formulations, but on a precise understanding of the market, genuine awareness of customer needs, and crafting a message that reaches the right audience at the right time in the right way.',
    
    // Vision
    'vision.title': 'Our Vision',
    'vision.content': 'To become a marketing agency whose success is measured by the value of the impact it creates, not by the number of campaigns it delivers.',
    'vision.content2': 'We aspire to expand within the Arab Market through our marketing services, and because we set no limits on creativity, we also seek to extend our services into the European market.',
    'vision.content3': 'We believe that achieving optimal results requires continuous efforts and flexibility, enabling us to push the wheel of execution to its fullest potential, driving us towards the highest conversion rates we strive to achieve.',
    
    // Mission
    'mission.title': 'Our Mission',
    'mission.content': 'We operate with a clear philosophy: transform ideas into presence, brands into successful stories, and stories into tangible results.',
    'mission.content2': 'We walk alongside our partners in success from the very first idea till achieving the desired outcomes through honest work, smart planning, and execution based on thorough study and analysis.',
    
    // Values
    'values.title': 'Our Values',
    'values.commitment.title': 'Commitment',
    'values.commitment.desc': 'We are committed to delivering our services through a result-driven model, grounded in responsibility towards achieving the promised outcomes.',
    'values.professionalism.title': 'Professionalism',
    'values.professionalism.desc': 'We ensure that our marketing services are delivered at the highest level of professionalism, far from ready-made templates and repetition.',
    'values.creativity.title': 'Responsible Creativity',
    'values.creativity.desc': 'We provide creative solutions that serve the core objective, not creativity for the sake of display alone.',
    'values.partnership.title': 'Partnership',
    'values.partnership.desc': 'Your success is not a temporary project, it\'s a continuous partnership.',
    
    // Goals
    'goals.title': 'Our Goals',
    'goals.branding': 'Building brands with a clear identity and long-term impact',
    'goals.solutions': 'Delivering marketing solutions that solve real client challenges and lead them to sustainable success',
    'goals.results': 'Achieving measurable and data-driven results',
    'goals.partner': 'Positioning Athar as a true growth partner, not merely a marketing service provider',
    
    // Services
    'services.title': 'Our Services',
    'services.subtitle': 'At Athar, we provide integrated marketing solutions with a strong focus on e-commerce and websites, aiming to create measurable impact and scalable growth.',
    'services.ecommerce.title': 'E-commerce Solutions',
    'services.ecommerce.desc': 'Tailored marketing strategies designed to increase sales, enhance the shopping experience, and boost conversion rates.',
    'services.webdesign.title': 'Website Design & Development',
    'services.webdesign.desc': 'Websites that reflect brand identity and are built for performance and conversion, not just online presence.',
    'services.graphic.title': 'Graphic Design',
    'services.graphic.desc': 'Professional visual designs that support the marketing message and strengthen brand perception.',
    'services.social.title': 'Social Media Management',
    'services.social.desc': 'Through a marketing-driven content strategy that balances trust-building with achieving business goals.',
    'services.ads.title': 'Paid Advertising',
    'services.ads.desc': 'Well-planned advertising campaigns based on data and analysis to achieve real and measurable results.',
    'services.branding.title': 'Brand Identity & Branding',
    'services.branding.desc': 'We transform brands into clear, recognizable presences with long-term impact.',
    
    // Team
    'team.title': 'Our Team',
    'team.role.senior_software': 'Senior Software Engineer',
    'team.role.web_developer': 'Senior Web Developer',
    'team.role.media_buyer': 'Media Buyer',
    'team.role.account_manager': 'Account Manager',
    'team.role.content_creator': 'Content Creator',
    'team.role.designer': 'Designer',
    'team.role.seller': 'Sales',
    
    // Work
    'work.title': 'Our Work',
    'work.subtitle': 'Partners we are proud to work with',
    
    // Contact
    'contact.title': 'Contact Us',
    'contact.subtitle': 'We are here to help you achieve your marketing goals',
    'contact.phone': 'Phone',
    'contact.email': 'Email',
    'contact.social': 'Social Media',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone Number',
    'contact.form.service': 'Select Service',
    'contact.form.service.all': 'All Services',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send',
    'contact.form.success': 'Your message has been sent successfully!',
    
    // Footer
    'footer.description': 'An e-marketing agency specialized in creating measurable digital impact',
    'footer.quick_links': 'Quick Links',
    'footer.services': 'Services',
    'footer.contact': 'Contact Us',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.rights': '© 2026 Athar Agency. All rights reserved.',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  language: 'ar',
  setLanguage: () => {},
  t: (key: string) => key,
  isRTL: true,
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('ar');

  useEffect(() => {
    // Detect browser language
    const browserLang = navigator.language.toLowerCase();
    const isArabic = browserLang.startsWith('ar');
    setLanguageState(isArabic ? 'ar' : 'en');
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  };

  useEffect(() => {
    document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = language;
  }, [language]);

  const t = (key: string): string | string[] => {
    const translation = translations[language][key as keyof typeof translations.ar];
    return translation || key;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRTL: language === 'ar',
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
