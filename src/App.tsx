import { jsPDF } from 'jspdf';
import React, { useEffect, useRef } from 'react';
import { Experience, Header, Skills, Summary } from './components';
import { useLocalStorage, usePrint } from './utils';

// import { useLocalStorage, usePrint } from '../resources/files/CV_Andrew_Melnychuk_Front-end.pdf';

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

const PrintButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button onClick={onClick}>test</button>

    // <a
    //   className="print-hidden m-auto flex w-fit px-8 py-4 shadow-lg duration-500 hover:shadow-sm"
    //   href="../resources/files/CV_Andrew_Melnychuk_Front-end.pdf"
    //   download
    //   aria-label="Download the PDF file"
    // >
    //   Download PDF
    // </a>
  );
};

// TODO: revise contacts, add more???
// TODO: update experience (replace project description with personal responsibilities)
// TODO: revise skills
// TODO: revise margin after sections title

export default function App() {
  const ref = useRef(null);
  const { printHandler } = usePrint(ref, 'cv', 'CV_Andrew_Melnychuk_Front-end');

  const handleClick = (ref: HTMLElement) => {
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      putOnlyUsedFonts: true,
    });

    console.log({ ref });

    const windowWidth = window.innerWidth;
    // ref.style.margin = '0px';
    // ref.style.padding = '0px';

    pdf.html(ref.innerHTML, {
      callback: (pdf) => {
        // Save the generated PDF
        pdf.save('download.pdf');
      },
      autoPaging: 'text',
      margin: [20, 0, 20, 0],
      width: 190, // Maximum width for the content in mm (adjust as needed)
      windowWidth: ref.offsetWidth,
      // html2canvas: {
      // svgRendering: true,
      // scale: 0.25, // Scale down the content to fit
      // },
    });
  };

  return (
    <div>
      <ThemeSwitcher />
      <div ref={ref} className="cv container">
        <Header />
        <Summary />
        {/*<Skills />*/}
        <Experience />
      </div>
      <PrintButton onClick={() => handleClick(ref.current!)} />
    </div>
  );
}
