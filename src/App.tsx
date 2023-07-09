import { useRef } from 'react';
import { Summary } from './components';
import Experience from './components/experience';
import Skills from './components/skills';
import { usePrint } from './utils';

const Link = (props: JSX.IntrinsicElements['a']) => (
  <a
    className="cursor-pointer italic text-label duration-700 hover:text-blue-700"
    {...props}
  />
);

export default function App() {
  const ref = useRef(null);
  const { printHandler } = usePrint(ref, 'cv', 'andrew_melnychuk_cv');

  return (
    <div ref={ref} className="cv container">
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
      <button
        className="print-hidden m-auto flex px-8 py-4 shadow-lg duration-500 hover:shadow-sm"
        onClick={printHandler}
      >
        Print as PDF
      </button>
    </div>
  );
}
