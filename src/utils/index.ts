import { millisecondsInMonth, millisecondsInYear } from '../constants';

export { default as usePrint } from './usePrint';
export * from './useLocalStorage';

export const classNames = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(' ');

export const getTimeDiff = (
  date: Date,
  granularity: 'year' | 'month',
  round = true,
) => {
  const granularityMap = {
    year: millisecondsInYear,
    month: millisecondsInMonth,
  } as const;

  const diff =
    Math.abs(new Date().getTime() - date.getTime()) /
    granularityMap[granularity];

  return round ? Math.floor(diff) : diff;
};

export const getExperience = (start: Date) => {
  const exp = getTimeDiff(start, 'year', false);
  const decimalPart = exp - Math.floor(exp);

  return decimalPart > 0.8
    ? `${Math.ceil(exp)}`
    : decimalPart > 0.5
    ? `close to ${Math.ceil(exp)}`
    : decimalPart > 0.2
    ? `more than ${Math.floor(exp)}`
    : `${Math.floor(exp)}`;
};
