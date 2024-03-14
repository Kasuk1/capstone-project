import classes from './TextHighlight.module.css';

type Props = {
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const TextHighlight = ({ text, type = 'default' }: Props) => {
  return (
    <span className={`${classes['TextHighlight']} ${classes[type]}`}>
      {text}
    </span>
  );
};
