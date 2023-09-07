'use client'
import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

interface LanguageContextType {
  currentLocale: string;
  handleLanguageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  translations: any;
}

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageContext = createContext<LanguageContextType>({
  currentLocale: 'en.json',
  handleLanguageChange: () => {},
  translations: null,
});

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [currentLocale, setCurrentLocale] = useState('en.json');
  const [translations, setTranslations] = useState(null);

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentLocale(e.target.value);
  };






  useEffect(() => {
    const fetchTranslations = async () => {
        try {
            const response = await axios.get(`https://storage.googleapis.com/jiffybook_public_files/${currentLocale}`);
            console.log('Response: testinggggg', response);
            setTranslations(response.data);
          } 
          
              
          catch (error) {
            console.error('Error fetching translations:', error);
          }
    };

    fetchTranslations();
  }, [currentLocale]);















  const contextValue: LanguageContextType = {
    currentLocale,
    handleLanguageChange,
    translations,
  };

  return (
    <LanguageContext.Provider value={contextValue}>
      {children}
    </LanguageContext.Provider>
  );
};
