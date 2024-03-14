import { TextCardTitle, TextHighlight, TextParagraph } from 'components';

import classes from './CardFood.module.css';

type Props = {
  imageSrc?: string;
  title?: string;
  price?: string;
  desc?: string;
};

export const CardFood = ({}: Props) => {
  return (
    <article className={classes['CardFood']}>
      <section className={classes['CardFood_image']}>
        <img src='icons_assets/greek_salad.jpg' />
      </section>
      <section className={classes['CardFood_description']}>
        <header>
          <TextCardTitle text='Nasi gorem' />
          <TextHighlight text='$5.00' type='secondary' />
        </header>

        <TextParagraph text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.' />

        <a href='/'>
          <TextHighlight text='Order a delivery' />
        </a>
      </section>
    </article>
  );
};
