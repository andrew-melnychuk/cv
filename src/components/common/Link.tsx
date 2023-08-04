import React from 'react';

const Link = (props: React.JSX.IntrinsicElements['a']) => (
  <a
    className="cursor-pointer italic text-label duration-700 hover:text-blue-700"
    {...props}
  />
);

export default Link;
