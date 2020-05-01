import { Login, Logout, NotFound, Dashboard } from "../pages";

export const publicRoutes = [
  {
    path: "/login",
    exact: true,
    component: Login,
  },
  {
    path: "/logout",
    exact: true,
    component: Logout,
  },
  {
    path: "*",
    component: NotFound,
  },
];

export const privateRoutes = [
  {
    title: "Dashboard",
    path: "/dashboard",
    exact: true,
    component: Dashboard,
  },
];
