import Experience from './Experience';
import TechnologiesBlock from './TechnologiesBlock';

const TECHNOLOGIES = [
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Carbon Design System',
  'Webpack',
  'Node.js',
  'Express',
  'Podman',
  'AWS',
  'IBM Cloud',
  'Mocha',
  'Chai',
];

const Second = () => {
  return (
    <Experience
      technologies={TECHNOLOGIES}
      duration="19 months"
      employer="outstaffed to IBM"
      position="Full-stack Developer"
      description={[
        'implemented lazy loading and caching strategies to optimize initial load and improve overall application performance.',
        'followed modern design patterns to enhance application performance and streamline the development process.',
        'designed and developed RESTful APIs to facilitate seamless communication between front-end and back-end systems.',
        'collaborated with stakeholders to gather and document detailed project requirements, ensuring alignment with business objectives.',
      ]}
    />
  );
};

export default Second;
