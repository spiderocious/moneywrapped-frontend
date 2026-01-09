import { lazy, createElement } from "react";
import type { RouteObject } from "react-router-dom";

const SignInScreen = lazy(() =>
  import("./screen/signin-screen").then((module) => ({
    default: module.SignInScreen,
  })),
);

const SignUpScreen = lazy(() =>
  import("./screen/signup-screen").then((module) => ({
    default: module.SignUpScreen,
  })),
);

export const authRoutes: RouteObject[] = [
  {
    path: "/signin",
    element: createElement(SignInScreen),
  },
  {
    path: "/signup",
    element: createElement(SignUpScreen),
  },
];
