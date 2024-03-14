import classes from './TextRegular.module.css';

type Props = {
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const TextRegular = ({ text, type = 'default' }: Props) => {
  return <p className={`${classes['TextRegular']} ${classes[type]}`}>{text}</p>;
};
