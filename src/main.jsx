import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import HomeRootPage from "./Components/HomeRootPage/HomeRootPage";
import HomeRoute from "./Components/Routes/HomeRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import BlogDetails from "./Components/BlogDetailsPageLayout/BlogDetailsPageComponents/BlogDetails";
import BlogsLayout from "./Components/BlogsLayout/BlogsLayout";
import CategoryWIseBlogLayout from "./Components/CategoryWiseBlog/CategoryWIseBlogLayout";
import Recommend from "./Components/Routes/Recommend";
import OurGoal from "./Components/Routes/OurGoal";
import AdminPanelRootPage from "./Components/AdminPanel/AdminPanelRoot/AdminPanelRootPage";
import AddBlogs from "./Components/AdminPanel/AddingRoutes/AddBlogs";
import Dashboard from "./Components/AdminPanel/Dashboard/Dashboard";
import AddVideos from "./Components/AdminPanel/AddingRoutes/AddVideos";
import MyAddedBlogs from "./Components/AdminPanel/AddedRoutes/MyAddedBlogs";
import MyAddedVideos from "./Components/AdminPanel/AddedRoutes/MyAddedVideos";
import WellRootPageLayout from "./Components/Well/WellRootPageLayout/WellRootPageLayout";
import WellHomePageLayout from "./Components/Well/WellHomePageLayout/WellHomePageLayout";
import WellHomePage from "./Components/Well/WellPages/WellHomePage";
import VideoRouteLayout from "./Components/VideoRoute/VideoRouteLayout";
import TipsPageLayout from "./Components/Routes/Tips/TipsPageLayout/TipsPageLayout";
import Login from "./Components/AdminPanel/AdminPanelLogin/Login";
import AuthContextProvider from "./Components/AdminPanel/AuthContextProvider/AuthContextProvider";
import SecureRoute from "./Components/AdminPanel/SecureAdminPanelRoutes/SecureRoute";
import AllUsers from "./Components/AdminPanel/AddedRoutes/AllUsers";
import UnauthorizedPage from "./Components/AdminPanel/SecureAdminPanelRoutes/UnauthorizedPage";
import OthersPostedBlogs from "./Components/AdminPanel/AddedRoutes/OthersPostedBlogs";
import OthersPostedVideos from "./Components/AdminPanel/AddedRoutes/OthersPostedVideos";
import UpdateBlogs from "./Components/AdminPanel/UpdatingRoutes/UpdateBlogs";
import UpdateVideos from "./Components/AdminPanel/UpdatingRoutes/UpdateVideos";
import ApprovalRequests from "./Components/AdminPanel/AddedRoutes/ApprovalRequests";
import MyProfile from "./Components/AdminPanel/MyProfile/MyProfile";

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
            path: "/",
            element: <HomeRoute></HomeRoute>,
            loader: () => {
              document.title =
                "InstantR - InstantR Daily latest blogs everyday on your favorite category";
            },
          },
          {
            path: "/section/blogs",
            element: <BlogsLayout></BlogsLayout>,
            loader: () => {
              document.title =
                "Latest | InstantR - Latest Blogs everyday on your favorite category";
            },
          },
          {
            path: "/section/:category",
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>,
            loader: (param) => {
              const category = param.params.category;
              document.title = `${category.toUpperCase()} | InstantR - Latest blogs everyday on your favorite category`;
            },
          },
          {
            path: "/section/our-goal",
            element: <OurGoal></OurGoal>,
            loader: () => {
              document.title =
                "Our Goal | InstantR - Latest blogs everyday on your favorite category";
            },
          },
          {
            path: "/section/blog-details/:id",
            element: <BlogDetails></BlogDetails>,
            loader: () => {
              document.title =
                "Blog Details | InstantR - Latest blogs everyday on your favorite category";
            },
          },
          {
            path: "/videos",
            element: <VideoRouteLayout></VideoRouteLayout>,
            loader: () => {
              document.title =
                "Videos | InstantR - Latest blogs everyday on your favorite category";
            },
          },
          {
            path: "/section/travel/tips",
            element: <TipsPageLayout></TipsPageLayout>,
            loader: () => {
              document.title =
                "Travel Tips | InstantR - Latest blogs everyday on your favorite category";
            },
          },
        ],
      },
    ],
  },

  // wel routes and tabs
  {
    path: "/well",
    element: <WellRootPageLayout></WellRootPageLayout>,
    children: [
      {
        path: "/well",
        element: <WellHomePageLayout></WellHomePageLayout>,
        children: [
          {
            path: "/well/",
            element: <WellHomePage></WellHomePage>,
            loader: () => {
              document.title =
                "Health, Life, Mind & Food | InstantR Well - InstantR";
            },
          },
          {
            path: "/well/section/:category",
            element: <CategoryWIseBlogLayout></CategoryWIseBlogLayout>,
            loader: (param) => {
              const category = param.params.category;
              document.title = `${category.toUpperCase()} | InstantR Well - Tips to treat, prevent and cure`;
            },
          },
          {
            path: "/well/section/blog-details/:id",
            element: <BlogDetails></BlogDetails>,
            loader: () => {
              document.title =
                "Blog Details | InstantR Well - Tips to treat, prevent and cure";
            },
          },
        ],
      },
    ],
  },

  // admin panel routes and tabs
  {
    path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard`,
    element: (
      <SecureRoute allowedRoles={["Admin", "Moderator", "Editor", "User"]}>
        <AdminPanelRootPage></AdminPanelRootPage>
      </SecureRoute>
    ),
    children: [
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/my-profile`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor", "User"]}>
            <MyProfile />
          </SecureRoute>
        ),
        loader: () => {
          document.title = "My Profile | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor", "User"]}>
            <Dashboard></Dashboard>
          </SecureRoute>
        ),
        loader: () => {
          document.title = "Dashboard | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-blogs`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <AddBlogs></AddBlogs>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Post Blogs | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/add-videos`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <AddVideos></AddVideos>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Post Videos | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/my-added-blogs`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <MyAddedBlogs></MyAddedBlogs>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "My posted blogs | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/my-added-videos`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <MyAddedVideos></MyAddedVideos>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "My posted videos | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/all-users`,
        element: (
          <SecureRoute allowedRoles={["Admin"]}>
            <AllUsers></AllUsers>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "All users | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/others-posted-blogs`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <OthersPostedBlogs></OthersPostedBlogs>{" "}
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Others posted blogs | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/others-posted-videos`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <OthersPostedVideos></OthersPostedVideos>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Others posted videos | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${import.meta.env.VITE_urlSecret}/admin-dashboard/update-blogs`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <UpdateBlogs></UpdateBlogs>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Update blogs | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/update-videos`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <UpdateVideos></UpdateVideos>
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Update videos | Admin panel | InstantR - Create Something Everyday";
        },
      },
      {
        path: `/${
          import.meta.env.VITE_urlSecret
        }/admin-dashboard/approval-requests`,
        element: (
          <SecureRoute allowedRoles={["Admin", "Moderator", "Editor"]}>
            <ApprovalRequests />
          </SecureRoute>
        ),
        loader: () => {
          document.title =
            "Update videos | Admin panel | InstantR - Create Something Everyday";
        },
      },
    ],
  },

  // admin panel login
  {
    path: `/${import.meta.env.VITE_urlSecret}/login`,
    element: <Login></Login>,
  },

  // unauthorized page here
  {
    path: "/unauthorized",
    element: <UnauthorizedPage></UnauthorizedPage>,
  },

  // recommend tab routes
  {
    path: "/recommend",
    element: <Recommend></Recommend>,
    loader: () => {
      document.title = "Recommends | Instant Recommends";
    },
  },
]);

const queryClient = new QueryClient();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthContextProvider>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </AuthContextProvider>
  </StrictMode>
);
