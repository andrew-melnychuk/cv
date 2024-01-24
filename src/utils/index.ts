import { millisecondsInMonth, millisecondsInYear } from '../constants';

export { default as usePrint } from './usePrint';
export * from './useLocalStorage';

export const classNames = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(' ');

export const getTimeDiff = (date: Date, granularity: string) => {
  const granularityMap = {
    year: millisecondsInYear,
    month: millisecondsInMonth,
  };

  // @ts-ignore
  return Math.floor(Math.abs(new Date() - date) / granularityMap[granularity]);
};
