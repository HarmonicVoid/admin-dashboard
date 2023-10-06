import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from 'react-router-dom';
import Home from './Pages/Home/home';
import Users from './Pages/users/Users';
import Products from './Pages/products/Products';

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: 'users',
      element: <Users />,
    },
    {
      path: 'products',
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
