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
    position="Front-end developer"
    description="Responsible for implementing UI from design mockups."
  />
);

export default First;
