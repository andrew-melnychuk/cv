import React, { useEffect, useRef, useState } from 'react';
import { useReactToPrint } from 'react-to-print';

type Func = () => void;

const usePrint = (
  componentRef: React.RefObject<HTMLInputElement>,
  bodyClass?: string,
  documentTitle?: string,
) => {
  const [isPrinting, setIsPrinting] = useState(false);
  const promiseResolveRef = useRef<Func | null>(null);

  useEffect(() => {
    if (isPrinting && promiseResolveRef.current) {
      promiseResolveRef.current();
    }
  }, [isPrinting]);

  const printHandler = useReactToPrint({
    bodyClass,
    documentTitle,
    // pageStyle:
    //   '@page { size: auto;  margin: 0mm; } @media print { body { -webkit-print-color-adjust: exact; } }', // remove date/time from top
    content: () => componentRef.current,
    onBeforeGetContent: () =>
      new Promise((resolve) => {
        promiseResolveRef.current = resolve as Func;
        setIsPrinting(true);
      }),
    onAfterPrint: () => {
      promiseResolveRef.current = null;
      setIsPrinting(false);
    },
  });

  return { printHandler };
};

export default usePrint;
