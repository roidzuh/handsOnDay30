import Home from "../pages/Home";
import Login from "../pages/Login";
import Menu from "../pages/Menu";
import MenuDetail from "../pages/MenuDetail";
import Register from "../pages/Register";
import ProtectedRoute from "./ProtectetRoute";

export const routeList = [
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: (
      <ProtectedRoute>
        <Menu />
      </ProtectedRoute>
    ),
  },
  {
    path: "/menu/:id",
    element: (
      <ProtectedRoute>
        <MenuDetail />
      </ProtectedRoute>
    ),
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/registrasi",
    element: <Register />,
  },
];
