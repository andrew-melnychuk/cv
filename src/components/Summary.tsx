import { careerStart } from '../constants';
import { getExperience } from '../utils';
import { Section } from './index';

const Summary = () => (
  <Section title="summary">
    <div className="text-secondary">
      <p>
        {`Senior Front-end Developer with ${getExperience(
          careerStart,
        )} years of experience specializing in React and TypeScript. Skilled in creating dynamic, high-performance user interfaces with a focus on user experience. Proficient in creating scalable and reusable components, front-end
        optimization, and backend integration. Known for a proactive,
        solutions-oriented approach and a strong commitment to code quality and
        collaborative teamwork.`}
      </p>
    </div>
  </Section>
);

export default Summary;
