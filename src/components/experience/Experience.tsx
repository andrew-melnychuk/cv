import TechnologiesBlock from './TechnologiesBlock';

type Props = {
  technologies: string[];
  position: string;
  employer: string;
  duration: string;
  description: string | string[];
};
const Experience = ({
  technologies,
  position,
  employer,
  duration,
  description,
}: Props) => {
  return (
    <div className="experience mt-4 grid grid-cols-11 gap-4 pb-4 last:pb-0">
      <div className="col-span-3">
        <h3 className="font-bold">{position}</h3>
        <p className="text-secondary">{employer}</p>
        <p className="text-sm text-label">{duration}</p>
      </div>
      <div className="col-span-8">
        <div className="text-secondary">
          {typeof description === 'string' ? (
            <p>{description}</p>
          ) : (
            <ul className="ml-4 list-outside list-disc">
              {description.map((item, i) => (
                <li key={i} className="pl-0">
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <TechnologiesBlock technologies={technologies} />
      </div>
    </div>
  );
};

export default Experience;
