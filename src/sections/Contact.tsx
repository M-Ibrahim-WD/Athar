import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Phone,
  Mail,
  Send,
  MessageCircle,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const { t, isRTL } = useLanguage();
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Twitter, href: '#', label: 'X' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  const services = [
    { value: 'all', label: t('contact.form.service.all') as string },
    { value: 'ecommerce', label: t('services.ecommerce.title') as string },
    { value: 'webdesign', label: t('services.webdesign.title') as string },
    { value: 'graphic', label: t('services.graphic.title') as string },
    { value: 'social', label: t('services.social.title') as string },
    { value: 'ads', label: t('services.ads.title') as string },
    { value: 'branding', label: t('services.branding.title') as string },
  ];

  return (
    <section
      id="contact"
      className="relative py-24 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-athar-dark/5 via-transparent to-athar-light/5 dark:from-athar-dark/10 dark:to-athar-light/10" />

      {/* Decorative Shapes */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-athar-light/5 dark:bg-athar-light/5 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-48 h-48 rounded-full bg-athar-medium/5 dark:bg-athar-medium/10 blur-2xl" />

      <div className="relative z-10 w-full section-padding">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-athar-dark/10 dark:bg-athar-light/10 mb-6">
              <MessageCircle className="w-4 h-4 text-athar-medium dark:text-athar-light" />
              <span className="text-sm font-medium text-athar-dark dark:text-athar-light">
                {isRTL ? 'اتصل بنا' : 'Contact Us'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-foreground">
              {t('contact.title') as string}
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              {t('contact.subtitle') as string}
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div>
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center">
                    <Phone className="w-6 h-6 text-athar-dark dark:text-athar-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('contact.phone') as string}</h3>
                    <a
                      href="tel:01515852552"
                      className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors"
                    >
                      01515852552
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-athar-dark/10 dark:bg-athar-light/10 flex items-center justify-center">
                    <Mail className="w-6 h-6 text-athar-dark dark:text-athar-light" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{t('contact.email') as string}</h3>
                    <a
                      href="mailto:Support@atharagency.co"
                      className="text-muted-foreground hover:text-athar-dark dark:hover:text-athar-light transition-colors"
                    >
                      Support@atharagency.co
                    </a>
                  </div>
                </div>

                {/* Social Media */}
                <div>
                  <h3 className="text-lg font-semibold mb-4">{t('contact.social') as string}</h3>
                  <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.href}
                        aria-label={social.label}
                        className="w-12 h-12 rounded-xl bg-card border border-border flex items-center justify-center hover:border-athar-light/50 hover:bg-athar-light/10 transition-all duration-300"
                      >
                        <social.icon className="w-5 h-5 text-athar-dark dark:text-athar-light" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Decorative Card */}
              <div className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-athar-dark to-athar-medium text-white">
                <h3 className="text-xl font-bold mb-3">
                  {isRTL ? 'هل لديك مشروع في mind؟' : 'Have a project in mind?'}
                </h3>
                <p className="text-white/80 mb-4">
                  {isRTL
                    ? 'دعنا نناقش كيف يمكننا مساعدتك في تحقيق أهدافك التسويقية'
                    : 'Let us discuss how we can help you achieve your marketing goals'}
                </p>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse" />
                  <span className="text-sm">
                    {isRTL ? 'متاحون للعمل الجديد' : 'Available for new projects'}
                  </span>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <form
                onSubmit={handleSubmit}
                className="p-6 md:p-8 rounded-3xl bg-card border border-border"
              >
                {isSubmitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">
                      {t('contact.form.success') as string}
                    </h3>
                  </div>
                ) : (
                  <div className="space-y-6">
                    {/* Name */}
                    <div>
                      <Label htmlFor="name" className="mb-2 block">
                        {t('contact.form.name') as string}
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isRTL ? 'أدخل اسمك' : 'Enter your name'}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <Label htmlFor="email" className="mb-2 block">
                        {t('contact.form.email') as string}
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder={isRTL ? 'أدخل بريدك الإلكتروني' : 'Enter your email'}
                        className="rounded-xl"
                        required
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <Label htmlFor="phone" className="mb-2 block">
                        {t('contact.form.phone') as string}
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder={isRTL ? 'أدخل رقم هاتفك' : 'Enter your phone number'}
                        className="rounded-xl"
                      />
                    </div>

                    {/* Service */}
                    <div>
                      <Label htmlFor="service" className="mb-2 block">
                        {t('contact.form.service') as string}
                      </Label>
                      <Select
                        value={formData.service}
                        onValueChange={(value) => setFormData({ ...formData, service: value })}
                      >
                        <SelectTrigger className="rounded-xl">
                          <SelectValue placeholder={t('contact.form.service') as string} />
                        </SelectTrigger>
                        <SelectContent>
                          {services.map((service) => (
                            <SelectItem key={service.value} value={service.value}>
                              {service.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div>
                      <Label htmlFor="message" className="mb-2 block">
                        {t('contact.form.message') as string}
                      </Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder={isRTL ? 'أدخل رسالتك...' : 'Enter your message...'}
                        className="rounded-xl min-h-[120px]"
                        required
                      />
                    </div>

                    {/* Submit Button */}
                    <Button
                      type="submit"
                      className="w-full bg-athar-dark hover:bg-athar-darker text-white dark:bg-athar-light dark:text-athar-darker dark:hover:bg-athar-medium rounded-xl py-6"
                    >
                      <Send className="w-5 h-5 mr-2" />
                      {t('contact.form.submit') as string}
                    </Button>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
