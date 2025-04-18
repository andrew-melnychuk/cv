import React from 'react';

const TechnologiesBlock = ({ technologies }: { technologies: string[] }) => {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((item) => (
        <div
          key={item}
          className="technology px-4 text-center shadow-xs dark:shadow-xs-light"
        >
          <span className="technology-label text-sm font-medium">{item}</span>
        </div>
      ))}
    </div>
  );
};

export default TechnologiesBlock;
