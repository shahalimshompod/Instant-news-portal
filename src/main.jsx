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
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
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
import VideoRouteLayout from './Components/VideoRoute/VideoRouteLayout';
import TipsPageLayout from './Components/Routes/Tips/TipsPageLayout/TipsPageLayout';


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
            element: <HomeRoute></HomeRoute>,
            loader: () => {
              document.title = "InstantR - InstantR Daily latest blogs everyday on your favorite category"
            }
          },
          {
            path: '/section/blogs',
            element: <BlogsLayout></BlogsLayout>,
            loader: () => {
              document.title = "Latest | InstantR - Latest Blogs everyday on your favorite category"
            }
          },
          {
            path: '/section/:category',
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>,
            loader: (param) => {
              const category = param.params.category;
              document.title = `${category.toUpperCase()} | InstantR - Latest blogs everyday on your favorite category`
            }
          },
          {
            path: '/section/our-goal',
            element: <OurGoal></OurGoal>,
            loader: () => {
              document.title = "Our Goal | InstantR - Latest blogs everyday on your favorite category"
            }
          },
          {
            path: '/section/blog-details/:id',
            element: <BlogDetails></BlogDetails>,
            loader: () => {
              document.title = "Blog Details | InstantR - Latest blogs everyday on your favorite category"
            }
          },
          {
            path: '/videos',
            element: <VideoRouteLayout></VideoRouteLayout>,
            loader: () => {
              document.title = "Videos | InstantR - Latest blogs everyday on your favorite category"
            }
          },
          {
            path: '/section/travel/tips',
            element: <TipsPageLayout></TipsPageLayout>,
            loader: () => {
              document.title = "Travel Tips | InstantR - Latest blogs everyday on your favorite category"
            }
          }

        ]
      },

    ]
  },

  // wel routes and tabs
  {
    path: '/well',
    element: <WellRootPageLayout></WellRootPageLayout>,
    children: [
      {
        path: '/well',
        element: <WellHomePageLayout></WellHomePageLayout>,
        children: [
          {
            path: '/well/',
            element: <WellHomePage></WellHomePage>,
            loader: () => {
              document.title = "Health, Life, Mind & Food | InstantR Well - InstantR"
            }
          },
          {
            path: '/well/section/:category',
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>,
            loader: (param) => {
              const category = param.params.category;
              document.title = `${category.toUpperCase()} | InstantR Well - Tips to treat, prevent and cure`
            }
          },
          {
            path: '/well/section/blog-details/:id',
            element: <BlogDetails></BlogDetails>,
            loader: () => {
              document.title = "Blog Details | InstantR Well - Tips to treat, prevent and cure"
            }
          },
        ]
      }
    ]
  },


  // admin panel routes and tabs
  {
    path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard`,
    element: <AdminPanelRootPage></AdminPanelRootPage>,
    children: [
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard`,
        element: <Dashboard></Dashboard>,
        loader: () => {
          document.title = "Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-blogs`,
        element: <AddBlogs></AddBlogs>,
        loader: () => {
          document.title = "Add Blogs | Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-videos`,
        element: <AddVideos></AddVideos>,
        loader: () => {
          document.title = "Add Videos | Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/update-travel-tips`,
        element: <UpdateTravelTips></UpdateTravelTips>,
        loader: () => {
          document.title = "Add Travel Tips | Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-blogs`,
        element: <MyAddedBlogs></MyAddedBlogs>,
        loader: () => {
          document.title = "My added blogs | Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-added-videos`,
        element: <MyAddedVideos></MyAddedVideos>,
        loader: () => {
          document.title = "My added videos | Admin panel | InstantR - Create Something Everyday"
        }
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-updated-tips`,
        element: <MyUpdatedTips></MyUpdatedTips>,
        loader: () => {
          document.title = "Update my tips | Admin panel | InstantR - Create Something Everyday"
        }
      },
    ]
  },

  // recommend tab routes
  {
    path: '/recommend',
    element: <Recommend></Recommend>,
    loader: () => {
      document.title = "Recommends | Instant Recommends"
    }
  },
]);

const queryClient = new QueryClient()

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </StrictMode>,
)
