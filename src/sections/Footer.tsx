import { useLanguage } from '@/contexts/LanguageContext';
import { useTheme } from '@/contexts/ThemeContext';
import { Facebook, Instagram, Twitter, Linkedin, MessageCircle } from 'lucide-react';

export default function Footer() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const quickLinks = [
    { label: t('nav.about'), href: '#about' },
    { label: t('nav.vision'), href: '#vision' },
    { label: t('nav.mission'), href: '#mission' },
    { label: t('nav.values'), href: '#values' },
    { label: t('nav.goals'), href: '#goals' },
  ];

  const services = [
    { label: t('services.ecommerce.title'), href: '#services' },
    { label: t('services.webdesign.title'), href: '#services' },
    { label: t('services.graphic.title'), href: '#services' },
    { label: t('services.social.title'), href: '#services' },
    { label: t('services.ads.title'), href: '#services' },
    { label: t('services.branding.title'), href: '#services' },
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: MessageCircle, href: '#', label: 'Snapchat' },
    { icon: Twitter, href: '#', label: 'X' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative pt-20 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-athar-dark/10 via-background to-background dark:from-athar-dark/20" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-16">
            {/* Logo & Description */}
            <div className="lg:col-span-1">
              <a href="#hero" onClick={(e) => { e.preventDefault(); scrollToSection('#hero'); }}>
                <img
                  src={theme === 'dark' ? '/logo-dark.png' : '/logo-light.png'}
                  alt="Athar"
                  className="h-12 w-auto object-contain mb-6"
                />
              </a>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('footer.description') as string}
              </p>
              {/* Social Links */}
              <div className="flex gap-2">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-lg bg-card border border-border flex items-center justify-center hover:border-athar-light/50 hover:bg-athar-light/10 transition-all duration-300"
                  >
                    <social.icon className="w-4 h-4 text-athar-dark dark:text-athar-light" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">
                {t('footer.quick_links') as string}
              </h3>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(link.href); }}
                      className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
                    >
                      {link.label as string}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">
                {t('footer.services') as string}
              </h3>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <a
                      href={service.href}
                      onClick={(e) => { e.preventDefault(); scrollToSection(service.href); }}
                      className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
                    >
                      {service.label as string}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-bold mb-6 text-foreground">
                {t('footer.contact') as string}
              </h3>
              <ul className="space-y-4">
                <li>
                  <a
                    href="tel:01515852552"
                    className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
                  >
                    01515852552
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:Support@atharagency.co"
                    className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
                  >
                    Support@atharagency.co
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-border mb-8" />

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-sm text-muted-foreground text-center md:text-left">
              {t('footer.rights') as string}
            </p>

            {/* Social Icons - Center */}
            <div className="flex items-center gap-4">
              {socialLinks.slice(0, 4).map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
              >
                {t('footer.privacy') as string}
              </a>
              <a
                href="#"
                className="text-sm text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors duration-300"
              >
                {t('footer.terms') as string}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
