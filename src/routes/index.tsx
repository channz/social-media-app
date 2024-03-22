import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import ProtectedRoutes from "./protected-routes";
import Homepage from "@/pages";
import Register from "@/pages/auth/register";
import Login from "@/pages/auth/login";
import Profile from "@/pages/profile";
import Settings from "@/pages/settings";
import ProtectedRoutes from "./protected-routes";
import ContentDetail from "@/pages/contents/content-detail";

const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        path: "/",
        element: <Homepage />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/settings",
        element: <Settings />,
      },
      {
        path: "/content/:post_id",
        element: <ContentDetail />,
      },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
