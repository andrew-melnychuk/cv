import { getTimeDiff } from '../../utils';
import Experience from './Experience';

const TECHNOLOGIES = [
  'React',
  'Material UI',
  'Axios',
  'React i18next',
  'React Testing Library',
  'Jest',
];

const startDate = new Date('September 2022');

const Third = () => {
  return (
    <Experience
      technologies={TECHNOLOGIES}
      duration={`${getTimeDiff(startDate, 'month')} months`}
      employer="SoftServe"
      position="Front-end developer"
      description={
        <>
          <p>
            Large B2C application based on machine-learning predictive models.
            Hosted on Google Cloud Platform. A place for teachers, students and
            their parents that helps creating individual learning and
            development paths for students.
          </p>
          <p>
            Responsible for creating new and updating existing features. Working
            closely with designers and back-end developers.
          </p>
        </>
      }
    />
  );
};

export default Third;
