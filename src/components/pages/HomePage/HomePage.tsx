import {
  AboutSection,
  BasicTemplate,
  HeroSection,
  SpecialsSection,
  TestimonialsSection,
} from 'components';

import classes from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={classes['HomePage']}>
      <BasicTemplate>
        <div className={classes['HomePage_hero']}>
          <HeroSection />
        </div>
        <div className={classes['HomePage_specials']}>
          <SpecialsSection />
        </div>
        <div className={classes['HomePage_testimonials']}>
          <TestimonialsSection />
        </div>
        <div className={classes['HomePage_about']}>
          <AboutSection />
        </div>
      </BasicTemplate>
    </div>
  );
};
