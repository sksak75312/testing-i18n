import { createBrowserRouter } from 'react-router';
import App from '@/App';
import Home from '@/pages/Home';
import Products from '@/pages/Products';


// 路由系統設定，優先設定 lng 動態 segment
const router = createBrowserRouter([
  {

    path: '/:lng',
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'products',
        element: <Products />,
      },
    ],
  },
]);

export default router;
