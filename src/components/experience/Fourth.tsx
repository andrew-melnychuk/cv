import Experience from './Experience';

const TECHNOLOGIES = [
  'TypeScript',
  'React',
  'Redux',
  'Material UI',
  'Tailwind CSS',
  'Looker SDKs',
];

const Fourth = () => {
  return (
    <Experience
      technologies={TECHNOLOGIES}
      duration="2 months"
      employer="SoftServe"
      position="Front-end developer"
      description={[
        'introduced feedback collection mechanism, enabling users to provide insights on the application’s performance and usability.',
        'increased response speed by optimizing number of calls to the model.',
        'improved results accuracy by implementing additional info request from the model.',
      ]}
    />
  );
};

export default Fourth;
