import { careerStart, millisecondsInYear } from '../constants';
import { getExperience } from '../utils';
import { Section } from './index';

const Summary = () => (
  <Section title="summary">
    <div className="text-secondary">
      <p>
        {`Energetic individual with ${getExperience(careerStart)} years of experience and a track record of
        delivering high-quality solutions in web development. Have a solid
        understanding of and experience with SCRUM methodology.`}
      </p>
      <p>
        Results-driven team player with well-developed soft skills. Seeking
        opportunities to enhance own capabilities and add value to your team.
      </p>
    </div>
  </Section>
);

export default Summary;
