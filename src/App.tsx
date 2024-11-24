import React, { useEffect } from 'react';
import cvFile from '../resources/files/CV_Andrew_Melnychuk_Front-end.pdf';
import { Experience, Header, Skills, Summary } from './components';
import { useLocalStorage } from './utils';

const DEFAULT_THEME = 'light';

const ThemeSwitcher = () => {
  const themeClass = document.documentElement.classList[0];
  const [theme, setTheme] = useLocalStorage('theme', themeClass);

  const handleThemeSwitch = () => {
    if (theme === 'dark') {
      setTheme('light');
      document.documentElement.classList.remove('dark');
    } else {
      setTheme('dark');
      document.documentElement.classList.add('dark');
    }
  };

  useEffect(() => {
    window
      .matchMedia('(prefers-color-scheme: dark)')
      .addEventListener('change', ({ matches: isDark }) => {
        setTheme(() => (isDark ? 'dark' : 'light'));
        handleThemeSwitch();
      });
  });

  return (
    <div className="print-hidden theme-switcher-wrapper">
      <button
        aria-label={`theme-switcher, current theme is ${
          theme || DEFAULT_THEME
        }`}
        id="theme-switcher"
        className={theme === 'dark' ? 'dark-theme' : 'light-theme'}
        onClick={handleThemeSwitch}
      />
    </div>
  );
};

const PrintButton = () => (
  <a
    className="print-hidden m-auto flex w-fit px-8 py-4 shadow-lg duration-500 hover:shadow-sm"
    href={cvFile}
    download="CV_Andrew_Melnychuk_Front-end"
    aria-label="Download the PDF file"
  >
    Download PDF
  </a>
);

// TODO: revise contacts, add more???
// TODO: revise margin after sections title

export default function App() {
  return (
    <div className="cv container">
      <ThemeSwitcher />
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <PrintButton />
    </div>
  );
}
