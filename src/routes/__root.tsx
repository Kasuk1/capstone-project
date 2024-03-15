import { Outlet, createRootRoute } from '@tanstack/react-router';
import { BasicTemplate } from 'components';

export const Route = createRootRoute({
  component: () => (
    <BasicTemplate>
      <Outlet />
    </BasicTemplate>
  ),
});
