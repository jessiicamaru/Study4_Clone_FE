import { createBrowserRouter } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ErrorPage from '../pages/ErrorPage';
import LevelTest from '../pages/LevelTest';
import BasicEnglishPage from '../pages/TestPage/BasicEnglishPage';

const router = createBrowserRouter([
    {
        path: '/',
        errorElement: <ErrorPage />,
        element: <HomePage />,
    },
    {
        path: '/courses/level-test',
        errorElement: <ErrorPage />,
        element: <LevelTest />,
    },
    {
        path: '/courses/level-test/basic-english-test',
        errorElement: <ErrorPage />,
        element: <BasicEnglishPage />,
    },
    {
        path: '*',
        element: <ErrorPage />,
    },
]);

export default router;
