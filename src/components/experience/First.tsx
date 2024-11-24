import Experience from './Experience';
import TechnologiesBlock from './TechnologiesBlock';

const TECHNOLOGIES = [
  'React',
  'Redux',
  'TypeScript',
  'Docker',
  'React Testing Library',
  'Jest',
];

const First = () => (
  <Experience
    technologies={TECHNOLOGIES}
    duration="4 months"
    employer="Social project"
    position="Front-end Developer"
    description={[
      'leveraged TypeScript with React to improve code reliability, maintainability, and developer productivity.',
      'designed and implemented responsive layouts using CSS preprocessors, ensuring a seamless user experience across devices.',
      'collaborated with back-end developers to define API endpoints, data structures, and error handling mechanisms.',
    ]}
  />
);

export default First;
