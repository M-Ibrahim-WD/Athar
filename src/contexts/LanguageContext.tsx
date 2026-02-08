import { createContext, useContext, useState, useEffect, type ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  direction: 'rtl' | 'ltr';
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
  t: (ar: string, en: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  // Detect browser language on initial load
  const detectBrowserLanguage = (): Language => {
    if (typeof window === 'undefined') return 'ar';
    
    const browserLang = navigator.language || navigator.languages?.[0] || 'ar';
    const isArabic = browserLang.toLowerCase().startsWith('ar');
    return isArabic ? 'ar' : 'en';
  };

  const [language, setLanguageState] = useState<Language>('ar');
  const [isInitialized, setIsInitialized] = useState(false);

  useEffect(() => {
    // Check localStorage first, then detect browser language
    const storedLang = localStorage.getItem('athar-language') as Language | null;
    const initialLang = storedLang || detectBrowserLanguage();
    setLanguageState(initialLang);
    setIsInitialized(true);
  }, []);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('athar-language', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLang);
    localStorage.setItem('athar-language', newLang);
  };

  const direction: 'rtl' | 'ltr' = language === 'ar' ? 'rtl' : 'ltr';

  // Translation helper
  const t = (ar: string, en: string): string => {
    return language === 'ar' ? ar : en;
  };

  // Update document direction and language
  useEffect(() => {
    if (!isInitialized) return;
    
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
    document.documentElement.setAttribute('data-language', language);
  }, [language, direction, isInitialized]);

  const value: LanguageContextType = {
    language,
    direction,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
