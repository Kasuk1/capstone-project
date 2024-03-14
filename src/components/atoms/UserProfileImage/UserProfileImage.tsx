import classes from './UserProfileImage.module.css';

type Props = {
  imgSrc?: string;
  size?: 'small' | 'normal' | 'large';
};

export const UserProfileImage = ({
  imgSrc = 'icons_assets/personal1.jpg',
  size = 'normal',
}: Props) => {
  return (
    <img
      className={`${classes['UserProfileImage']} ${classes[size]}`}
      src={imgSrc}
    />
  );
};
