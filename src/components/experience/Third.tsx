import { getTimeDiff } from '../../utils';
import Experience from './Experience';

const TECHNOLOGIES = [
  'Typescript',
  'React',
  'Material UI',
  'TanStack Query',
  'Recharts',
  'Axios',
  'React i18next',
  'React Testing Library',
  'Jest',
];

const startDate = new Date('2022-09-01');

const Third = () => {
  return (
    <Experience
      technologies={TECHNOLOGIES}
      duration={`${getTimeDiff(startDate, 'month')} months`}
      employer="SoftServe"
      position="Front-end Developer"
      description={[
        'improved user experience by integrating Virtuoso for efficient rendering of large lists, resulting in smoother scrolling and better performance on resource-constrained devices.',
        'enhanced accessibility across the platform by following WCAG guidelines, making the application usable for a wider audience.',
        'applied React best practices to maintain scalable and maintainable code, ensuring high performance and readability.',
        'coordinated with cross-functional teams to implement design changes effectively, reducing iteration cycles and enhancing product delivery.',
      ]}
    />
  );
};

export default Third;
