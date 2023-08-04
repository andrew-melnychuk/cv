import React from 'react';
import { Link } from '../common';

const Header = () => (
  <div className="mb-10 text-center">
    <h1 className="mb-3 text-4xl font-medium">
      Andrew <span className="font-bold">Melnychuk</span>
    </h1>
    <p className="mb-2 text-xl">Front-end Developer</p>
    <Link href="mailto:amelnychuk.op@gmail.com">amelnychuk.op@gmail.com</Link>
  </div>
);

export default Header;
