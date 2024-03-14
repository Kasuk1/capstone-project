import classes from './Subtitle.module.css';

type Props = {
  title: string;
  type?: 'default' | 'primary' | 'secondary';
};

export const SubTitle = ({ title, type = 'default' }: Props) => {
  return <h2 className={`${classes['SubTitle']} ${classes[type]}`}>{title}</h2>;
};
