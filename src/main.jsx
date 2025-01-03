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
import Well from './Components/Routes/Well';
import Instant360 from './Components/Routes/Instant360';
import RecommendsLayout from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsLayout';
import RecommendsPersonalFinance from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsRoutes/RecommendsPersonalFinance';
import RecommendsEducation from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsComponents/RecommendsEducation';
import RecommendsBusinessSolutions from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsComponents/RecommendsBusinessSolutions';
import RecommendsShopping from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsComponents/RecommendsShopping';
import RecommendsHomeLayout from './Components/Routes/UnderTheRoutes/UnderRecommends/RecommendsHomeLayout';
import BlogsRoute from './Components/Routes/BlogsRoute';
// import { getTodos, postTodo } from '../my-api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DataContextProvider, { DataContext } from './Components/fetchDataContext/DataContextProvider';
import BlogDetails from './Components/BlogDetailsPageLayout/BlogDetailsPageComponents/BlogDetails';
import BlogsLayout from './Components/BlogsLayout/BlogsLayout';
import CategoryWIseBlogLayout from './Components/CategoryWiseBlog/CategoryWIseBlogLayout';


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
            path: '/section/blogs',
            element: <BlogsLayout></BlogsLayout>
          },
          {
            path: '/section/:category',
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>,
          },
          {
            path: '/well',
            element: <Well></Well>
          },
          {
            path: '/section/instant-360',
            element: <Instant360></Instant360>
          },
          {
            path: '/section/blog-details/:id',
            element: <BlogDetails></BlogDetails>
          }
        ]
      },

    ]
  },
  // recommend tab routes
  {
    path: '/recommend',
    element: <RecommendsLayout></RecommendsLayout>,
    children: [
      {
        path: '/recommend',
        element: <RecommendsHomeLayout></RecommendsHomeLayout>
      },
      {
        path: '/recommend/personal-finance',
        element: <RecommendsPersonalFinance></RecommendsPersonalFinance>
      },
      {
        path: '/recommend/education',
        element: <RecommendsEducation></RecommendsEducation>
      },
      {
        path: '/recommend/business-solutions',
        element: <RecommendsBusinessSolutions></RecommendsBusinessSolutions>
      },
      {
        path: '/recommend/shopping',
        element: <RecommendsShopping></RecommendsShopping>
      },
    ]
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <DataContextProvider>
        <RouterProvider router={router} />
      </DataContextProvider>
    </QueryClientProvider>
  </StrictMode>,
)
