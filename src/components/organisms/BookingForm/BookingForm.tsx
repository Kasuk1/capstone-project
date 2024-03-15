import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import classes from './BookingForm.module.css';

const bookingFormInitialState = {
  date: '',
  time: '',
  guestsQty: 0,
  occasion: 'Anniversary',
};

const availableBookingTimes = [
  { key: '1', time: '17:00' },
  { key: '2', time: '18:00' },
  { key: '3', time: '19:00' },
  { key: '4', time: '20:00' },
  { key: '5', time: '21:00' },
  { key: '6', time: '22:00' },
];

export const BookingForm = () => {
  const [bookingForm, setBookingForm] = useState(bookingFormInitialState);
  const { date, time, guestsQty, occasion } = bookingForm;

  const onChangeFormValue = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setBookingForm((state) => ({
      ...state,
      [name]: value,
    }));
  };

  const onFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(bookingForm);
  };

  useEffect(() => {
    console.log('bookingForm');
  }, [bookingForm]);

  return (
    <form className={classes['BookingForm']} onSubmit={onFormSubmit}>
      <label htmlFor='res-date'>Choose date</label>
      <input
        type='date'
        id='res-date'
        name='date'
        value={date}
        onChange={onChangeFormValue}
      />
      <label htmlFor='res-time'>Choose time</label>
      <select
        id='res-time '
        name='time'
        value={time}
        onChange={onChangeFormValue}
      >
        {availableBookingTimes.map((option) => (
          <option key={option.key}>{option.time}</option>
        ))}
      </select>
      <label htmlFor='guests'>Number of guests</label>
      <input
        type='number'
        placeholder='1'
        min='1'
        max='10'
        id='guests'
        name='guestsQty'
        value={guestsQty}
        onChange={onChangeFormValue}
      />
      <label htmlFor='occasion'>Occasion</label>
      <select
        id='occasion'
        name='occasion'
        value={occasion}
        onChange={onChangeFormValue}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
      <button type='submit'>Make Your reservation</button>
    </form>
  );
};
