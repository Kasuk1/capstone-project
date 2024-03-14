import { MenuItem } from 'components/atoms/MenuItem';
import { menutItems } from 'data';

import classes from './Menu.module.css';

export const Menu = () => {
  return (
    <ul className={`${classes.menu}`}>
      {menutItems.map((item) => (
        <MenuItem key={item.id} item={item} />
      ))}
    </ul>
  );
};
