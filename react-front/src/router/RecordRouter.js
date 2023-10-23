import Main from '../page/Main';
import Details from '../page/Details';
import NotFound from '../page/NotFound';
import { createBrowserRouter } from 'react-router-dom';
const RecordRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [],
        errorElement: <NotFound />,
    },
    {
        path: '/details',
        element: <Details />,
        children: [],
        errorElement: <NotFound />,
    },
]);
export default RecordRouter;

// {
//     path: '/paintBoard',
//     element: <PaintBoard></PaintBoard>,
//     children: [],
// },
