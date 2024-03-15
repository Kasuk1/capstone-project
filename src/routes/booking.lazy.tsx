import { createLazyFileRoute } from '@tanstack/react-router';
import { BookingPage } from 'components';

export const Route = createLazyFileRoute('/booking')({
  component: () => <BookingPage />,
});
