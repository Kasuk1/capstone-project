import classes from './TextDisplayTitle.module.css';

type Props = {
  title: string;
  type: 'primary' | 'secondary';
};

export const TextDisplayTitle = ({ title, type = 'primary' }: Props) => {
  return (
    <h1 className={`${classes['TextDisplayTitle']} ${classes[type]}`}>
      {title}
    </h1>
  );
};
