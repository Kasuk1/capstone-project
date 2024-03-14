import classes from './TextParagraph.module.css';

type Props = {
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const TextParagraph = ({ text, type = 'default' }: Props) => {
  return (
    <p className={`${classes['TextParagraph']} ${classes[type]}`}>{text}</p>
  );
};
