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
// import { getTodos, postTodo } from '../my-api'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import DataContextProvider, { DataContext } from './Components/fetchDataContext/DataContextProvider';
import BlogDetails from './Components/BlogDetailsPageLayout/BlogDetailsPageComponents/BlogDetails';
import BlogsLayout from './Components/BlogsLayout/BlogsLayout';
import CategoryWIseBlogLayout from './Components/CategoryWiseBlog/CategoryWIseBlogLayout';
import Recommend from './Components/Routes/Recommend';
import OurGoal from './Components/Routes/OurGoal';
import AdminPanelRootPage from './Components/AdminPanel/AdminPanelRoot/AdminPanelRootPage';
import AddBlogs from './Components/AdminPanel/AddingRoutes/AddBlogs';
import Dashboard from './Components/AdminPanel/Dashboard/Dashboard';
import AddVideos from './Components/AdminPanel/AddingRoutes/AddVideos';
import UpdateTravelTips from './Components/AdminPanel/AddingRoutes/UpdateTravelTips';
import MyAddedBlogs from './Components/AdminPanel/AddedRoutes/MyAddedBlogs';
import MyAddedVideos from './Components/AdminPanel/AddedRoutes/MyAddedVideos';
import MyUpdatedTips from './Components/AdminPanel/AddedRoutes/MyUpdatedTips';
import WellRootPageLayout from './Components/Well/WellRootPageLayout/WellRootPageLayout';
import WellHomePageLayout from './Components/Well/WellHomePageLayout/WellHomePageLayout';
import WellHomePage from './Components/Well/WellPages/WellHomePage';
import SearchLayout from './Components/Routes/SearchLayout/SearchLayout';


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
            path: '/section/our-goal',
            element: <OurGoal></OurGoal>
          },
          {
            path: '/section/blog-details/:id',
            element: <BlogDetails></BlogDetails>
          },
          
        ]
      },

    ]
  },

  // wel routes and tabs
  {
    path: '/well',
    element: <WellRootPageLayout></WellRootPageLayout>,
    children:[
      {
        path: '/well',
        element: <WellHomePageLayout></WellHomePageLayout>,
        children:[
          {
            path: '/well/',
            element: <WellHomePage></WellHomePage>
          },
          {
            path: '/well/section/:category',
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>
          },
          {
            path: '/well/section/blog-details/:id',
            element: <BlogDetails></BlogDetails>
          },
        ]
      }
    ]
  },

  // {
  //   path: '/search',
  //   element: <SearchLayout></SearchLayout>
  // },
  

  // admin panel routes and tabs
  {
    path: '/admin-panel',
    element: <AdminPanelRootPage></AdminPanelRootPage>,
    children:[
      {
        path: '/admin-panel',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/admin-panel/add-blogs',
        element: <AddBlogs></AddBlogs>
      },
      {
        path: '/admin-panel/add-videos',
        element: <AddVideos></AddVideos>
      },
      {
        path: '/admin-panel/update-tips',
        element: <UpdateTravelTips></UpdateTravelTips>
      },
      {
        path: '/admin-panel/my-added-blogs',
        element: <MyAddedBlogs></MyAddedBlogs>
      },
      {
        path: '/admin-panel/my-added-videos',
        element: <MyAddedVideos></MyAddedVideos>
      },
      {
        path: '/admin-panel/my-updated-tips',
        element: <MyUpdatedTips></MyUpdatedTips>
      },
    ]
  },

  // recommend tab routes
  {
    path: '/recommend',
    element: <Recommend></Recommend>
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
