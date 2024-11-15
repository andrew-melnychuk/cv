import React, { useEffect, useRef } from 'react';
import { Experience, Header, Skills, Summary } from './components';
import { useLocalStorage, usePrint } from './utils';

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
const PrintButton = ({ onPrint }: { onPrint: () => void }) => (
  <button
    className="print-hidden m-auto flex px-8 py-4 shadow-lg duration-500 hover:shadow-sm"
    onClick={onPrint}
  >
    Print as PDF
  </button>
);

// TODO: revise contacts, add more???
// TODO: update experience (replace project description with personal responsibilities)
// TODO: revise skills
// TODO: revise margin after sections title

export default function App() {
  const ref = useRef(null);
  const { printHandler } = usePrint(ref, 'cv', 'CV_Andrew_Melnychuk_Front-end');

  return (
    <div ref={ref} className="cv container">
      <ThemeSwitcher />
      <Header />
      <Summary />
      <Skills />
      <Experience />
      <PrintButton onPrint={printHandler} />
    </div>
  );
}
