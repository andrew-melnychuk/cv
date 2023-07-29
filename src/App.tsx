import React, { useEffect, useRef } from 'react';
import { Experience, Skills, Summary } from './components';
import { useLocalStorage, usePrint } from './utils';

const Link = (props: React.JSX.IntrinsicElements['a']) => (
  <a
    className="cursor-pointer italic text-label duration-700 hover:text-blue-700"
    {...props}
  />
);

const PrintButton = ({ onPrint }: { onPrint: () => void }) => (
  <button
    className="print-hidden m-auto flex px-8 py-4 shadow-lg duration-500 hover:shadow-sm"
    onClick={onPrint}
  >
    Print as PDF
  </button>
);

export default function App() {
  const ref = useRef(null);
  const { printHandler } = usePrint(ref, 'cv', 'andrew_melnychuk_cv');

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
    <div ref={ref} className="cv container">
      <div className="print-hidden theme-switcher-wrapper">
        <button
          id="theme-switcher"
          className={theme === 'dark' ? 'dark-theme' : 'light-theme'}
          onClick={handleThemeSwitch}
        />
      </div>
      <div className="mb-10 text-center">
        <h1 className="mb-3 text-4xl font-medium">
          Andrew <span className="font-bold">Melnychuk</span>
        </h1>
        <p className="mb-2 text-xl">Front-end Developer</p>
        <Link href="mailto:amelnychuk.op@gmail.com">
          amelnychuk.op@gmail.com
        </Link>
      </div>
      <Summary />
      <Skills />
      <Experience />
      <PrintButton onPrint={printHandler} />
    </div>
  );
}
