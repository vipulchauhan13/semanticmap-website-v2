'use client'; // This makes it a Client Component

import { ReactNode } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/lib/i18n'; // Ensure this import path is correct
import { useTranslation } from 'react-i18next'; // Import useTranslation here

type I18nProviderProps = {
  children: ReactNode;
};

export function I18nProvider({ children }: I18nProviderProps) {
  const { ready } = useTranslation(); // Get the ready state

  // Optionally, you could show a loading indicator here
  // if (!ready) {
  //   return <div>Loading Translations...</div>;
  // }

  return (
    <I18nextProvider i18n={i18n}>
      {children}
    </I18nextProvider>
  );
}