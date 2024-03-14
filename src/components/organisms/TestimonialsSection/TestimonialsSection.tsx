import { CardTestimony, TextDisplayTitle } from 'components';

import classes from './TestimonialsSection.module.css';

export const TestimonialsSection = () => {
  return (
    <section
      className={`${classes['TestimonialsSection']} container-max-width`}
    >
      <TextDisplayTitle title='Testimonials' type='secondary' />

      <section className={classes['TestimonialsSection_list']}>
        <CardTestimony />
        <CardTestimony />
        <CardTestimony />
      </section>
    </section>
  );
};
