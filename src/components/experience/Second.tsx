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
      position="Full-stack developer"
      description={
        <>
          <p>
            Large B2B oriented application based on machine-learning predictive
            models. Project consists of multiple independent processes and micro
            services hosted on AWS and IBM Cloud. Aims to help utility companies
            proactively prepare response to weather events, improve restoration
            time and boost customer and regulatory satisfaction.
          </p>
          <p>
            Worked alongside management, design, and DS teams throughout all
            process from receiving client requests to delivering
            high-functioning solutions.
          </p>
        </>
      }
    />
  );
};

export default Second;
