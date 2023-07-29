export { default as usePrint } from './usePrint';
export * from './useLocalStorage';

export const classNames = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(' ');
