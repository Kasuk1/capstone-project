import { BookingForm, TextHighlight } from 'components';
import classes from './BookingPage.module.css';

export const BookingPage = () => {
  return (
    <div className={classes['BookingPage']}>
      <div className='container-max-width'>
        <TextHighlight text='Make a reservation' />
        <BookingForm />
      </div>
    </div>
  );
};
