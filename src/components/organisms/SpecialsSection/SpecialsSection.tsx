import { CardFood, CommonButton, TextDisplayTitle } from 'components';
import classes from './SpecialsSection.module.css';

export const SpecialsSection = () => {
  return (
    <section className={`${classes['SpecialsSection']} container-max-width`}>
      <header className={classes['SpecialsSection_food--header']}>
        <TextDisplayTitle title='This week specials!' type='secondary' />
        <CommonButton text='Online menu' type='tertiary' isLink />
      </header>
      <section className={classes['SpecialsSection_food--container']}>
        <CardFood />
        <CardFood />
        <CardFood />
        <CardFood />
      </section>
    </section>
  );
};
