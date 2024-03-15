import { createLazyFileRoute } from '@tanstack/react-router';
import { HomePage } from 'components';

export const Route = createLazyFileRoute('/')({
  component: () => <HomePage />,
});
