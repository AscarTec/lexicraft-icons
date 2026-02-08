import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import en from './en.json';
import ar from './ar.json';

type Language = 'en' | 'ar';
type Direction = 'ltr' | 'rtl';

interface Translations {
  gallery: Record<string, string>;
  categories: Record<string, string>;
  collections: Record<string, string>;
  language: Record<string, string>;
}

interface LanguageContextType {
  language: Language;
  direction: Direction;
  t: Translations;
  setLanguage: (lang: Language) => void;
  toggleLanguage: () => void;
}

const translations: Record<Language, Translations> = { en, ar };

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const STORAGE_KEY = 'legal-icons-language';

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored === 'ar' || stored === 'en') return stored;
    }
    return 'en';
  });

  const direction: Direction = language === 'ar' ? 'rtl' : 'ltr';
  const t = translations[language];

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, language);
    document.documentElement.dir = direction;
    document.documentElement.lang = language;
  }, [language, direction]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const toggleLanguage = () => {
    setLanguageState(prev => prev === 'en' ? 'ar' : 'en');
  };

  return (
    <LanguageContext.Provider value={{ language, direction, t, setLanguage, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}

export function useDirection() {
  const { direction } = useLanguage();
  return direction;
}