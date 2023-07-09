export { default as usePrint } from './usePrint';

export const classNames = (...classes: unknown[]): string =>
  classes.filter(Boolean).join(' ');
