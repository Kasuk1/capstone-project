import classes from './TextSectionTitle.module.css';

type Props = {
  title: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const TextSectionTitle = ({ title, type = 'default' }: Props) => {
  return (
    <h1 className={`${classes['TextSectionTitle']} ${classes[type]}`}>
      {title}
    </h1>
  );
};
