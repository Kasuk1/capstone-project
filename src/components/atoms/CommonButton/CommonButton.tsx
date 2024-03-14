import { ReactNode } from 'react';
import { TextRegular } from '..';
import classes from './CommonButton.module.css';

type Props = {
  isLink?: boolean;
  text: string;
  type?: 'default' | 'primary' | 'secondary' | 'tertiary';
};

export const CommonButton = ({
  text,
  type = 'default',
  isLink = false,
}: Props) => {
  const Component = ({
    children,
    className,
  }: {
    children: ReactNode;
    className: string | undefined;
  }) =>
    isLink ? (
      <a href='/' className={className}>
        {children}
      </a>
    ) : (
      <button className={className}>{children}</button>
    );

  return (
    <Component className={`${classes['CommonButton']} ${classes[type]}`}>
      <TextRegular text={text} type={type} />
    </Component>
  );
};
