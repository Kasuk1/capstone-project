import { Logo, Menu } from 'components';

import classes from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={`${classes['Navbar']} container-max-width`}>
      <Logo />
      <Menu />
    </nav>
  );
};
