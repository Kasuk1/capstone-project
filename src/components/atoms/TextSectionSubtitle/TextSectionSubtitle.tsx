import classes from './TextSectionSubtitle.module.css';

type Props = {
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const TextSectionSubtitle = ({ text, type = 'default' }: Props) => {
  return (
    <h2 className={`${classes['TextSectionSubtitle']} ${classes[type]}`}>
      {text}
    </h2>
  );
};
