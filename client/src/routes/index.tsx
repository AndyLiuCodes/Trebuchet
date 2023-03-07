import { createBrowserRouter } from 'react-router-dom';
import Root from '@/routes/root';
import Error from '@/routes/error';
import { Home } from '@/pages/Home';

export const AppRouter = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <Error />,
    children: [
      {
        path: '/',
        element: <Home />,
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
