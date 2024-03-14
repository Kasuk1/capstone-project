import {
  TextHighlight,
  TextParagraph,
  TextRegular,
  UserProfileImage,
} from 'components';
import classes from './CardTestimony.module.css';

export const CardTestimony = () => {
  return (
    <article className={classes['CardTestimony']}>
      <section className={classes['CardTestimony_description']}>
        <div className={classes['CardTestimony_description-userInfo']}>
          <UserProfileImage size='small' />
          <TextHighlight text='Igor C.' type='tertiary' />
        </div>
        <TextParagraph
          text='“Grateful experience doing a reservation for my dad’s birthday”'
          type='tertiary'
        />
      </section>
      <section className={classes['CardTestimony_score']}>
        <TextRegular text='4.6/5' type='tertiary' />
      </section>
    </article>
  );
};
