import classes from './TextCardTitle.module.css';

type Props = {
  text: string;
};

export const TextCardTitle = ({ text }: Props) => {
  return <h3 className={`${classes['TextCardTitle']}`}>{text}</h3>;
};
