import { ReactNode } from 'react';
import TechnologiesBlock from './TechnologiesBlock';

const TECHNOLOGIES = ['React', 'Material UI', 'Axios', 'React i18next'];

type Props = {
  technologies: string[];
  position: string;
  employer: string;
  duration: string;
  description: string | ReactNode;
};
const Experience = ({
  technologies,
  position,
  employer,
  duration,
  description,
}: Props) => {
  return (
    <div className="experience mt-4 grid break-inside-avoid grid-cols-6 gap-4 pb-4 last:pb-0">
      <div className="col-span-2">
        <h3 className="font-bold">{position}</h3>
        <p className="text-secondary">{employer}</p>
        <p className="text-sm text-label">{duration}</p>
      </div>
      <div className="col-span-4">
        <div className="text-secondary">
          {typeof description === 'string' ? <p>{description}</p> : description}
        </div>
        <TechnologiesBlock technologies={technologies} />
      </div>
    </div>
  );
};

export default Experience;
