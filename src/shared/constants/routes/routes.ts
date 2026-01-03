// typed routes

import Home from "@features/entrypoint/Home";
import { Route } from "@shared/types";

export const routeNames = {
  home: "/",
};

export const routes: Route[] = [
  {
    name: "home",
    path: routeNames.home,
    component: Home,
  },
];
