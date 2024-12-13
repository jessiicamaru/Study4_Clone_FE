import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <HomePage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
