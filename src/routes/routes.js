import { Login, Logout, NotFound } from "../pages";

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
  // {
  //   title: "Deliveries",
  //   icon: "ship",
  //   path: "/deliveries/:id?",
  //   exact: true,
  //   component: Deliveries,
  // },
];
