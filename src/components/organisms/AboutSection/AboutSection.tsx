import {
  TextParagraph,
  TextSectionSubtitle,
  TextSectionTitle,
} from 'components';
import classes from './AboutSection.module.css';

export const AboutSection = () => {
  return (
    <section className={`${classes['AboutSection']} container-max-width`}>
      <section className={classes['AboutSection_info']}>
        <header>
          <TextSectionTitle title='Little Lemon' type='primary' />
          <TextSectionSubtitle text='Jakarta' type='secondary' />
        </header>
        <TextParagraph text='Worem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.' />
      </section>
      <section className={classes['AboutSection_image-wrapper']}>
        <img src='icons_assets/restaurant1.jpg' alt='' />
        <img src='icons_assets/restaurant2.jpg' alt='' />
      </section>
    </section>
  );
};
