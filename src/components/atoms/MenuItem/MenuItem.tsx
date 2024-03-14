import classes from './MenuItem.module.css';

type Props = {
  item: {
    id: string;
    href: string;
    title: string;
  };
};

export const MenuItem = ({ item }: Props) => {
  return (
    <li className={`text--lead ${classes.menuItem}`}>
      <a href={item.href}>{item.title}</a>
    </li>
  );
};
