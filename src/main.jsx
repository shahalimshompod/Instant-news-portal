import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import App from './App';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import HomeRootPage from './Components/HomeRootPage/HomeRootPage';
import HomeRoute from './Components/Routes/HomeRoute';
import NewsRoute from './Components/Routes/NewsRoute';
import TechRoute from './Components/Routes/TechRoute';
import Finance from './Components/Routes/Finance';
import Leadership from './Components/Routes/Leadership';
import Well from './Components/Routes/Well';
import Recommend from './Components/Routes/Recommend';
import Instant360 from './Components/Routes/Instant360';

const router = createBrowserRouter([
  // defining the path of the routes and the elements of the pages
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeRootPage></HomeRootPage>,
        children: [
          {
            path: '/',
            element: <HomeRoute></HomeRoute>
          },
          {
            path: '/section/news',
            element: <NewsRoute></NewsRoute>
          },
          {
            path: '/section/tech',
            element: <TechRoute></TechRoute>
          },
          {
            path: '/section/finance',
            element: <Finance></Finance>
          },
          {
            path: '/section/leadership',
            element: <Leadership></Leadership>
          },
          {
            path: '/well',
            element: <Well></Well>
          },
          {
            path: '/recommend',
            element: <Recommend></Recommend>
          },
          {
            path: '/section/instant-360',
            element: <Instant360></Instant360>
          }
        ]
      },
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
