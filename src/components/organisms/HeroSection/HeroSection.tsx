import {
  CommonButton,
  TextDisplayTitle,
  SubTitle,
  TextRegular,
} from 'components';

import classes from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <section className={`${classes['HeroSection']} container-max-width`}>
      <section className={`${classes['HeroSection_left']}`}>
        <header>
          <TextDisplayTitle title='Little Lemon' type='primary' />
          <SubTitle title='Jakarta' type='secondary' />
        </header>

        <TextRegular
          text='Torem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit.'
          type='tertiary'
        />

        <CommonButton text='Reserve a table' type='default' isLink />
      </section>
      <section className={`${classes['HeroSection_right']}`}>
        <img
          src='icons_assets/restaurant5.jpg'
          alt="Little Lemon's Main dish"
        />
      </section>
    </section>
  );
};
