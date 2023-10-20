import Main from '../page/Main';
import NotFound from '../page/NotFound';
import { createBrowserRouter } from 'react-router-dom';
const RecordRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
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
