import { createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/root';
import Error from '@/routes/error';
import { MainLayout } from '@/components/Layout/MainLayout';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <MainLayout />,
      },
      {
        path: 'settings',
        element: <div>Settings Page TODO</div>,
      },
      {
        path: 'statistics',
        element: <div>Statistics Page TODO</div>,
      },
    ],
  },
]);
