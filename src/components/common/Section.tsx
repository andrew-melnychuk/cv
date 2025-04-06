import { ReactNode } from 'react';

const Section = ({
  children,
  title,
}: {
  children: ReactNode;
  title: string;
}) => (
  <div className="section mb-10 p-4 shadow-md">
    <h2 className="mb-6 break-after-avoid text-center text-2xl font-bold uppercase">
      {title}
    </h2>
    {children}
  </div>
);

export default Section;
