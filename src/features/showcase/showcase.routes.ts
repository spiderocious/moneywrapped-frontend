import { lazy } from "react";
import type { RouteObject } from "react-router-dom";

const ShowcaseScreen = lazy(() =>
  import("./screen/showcase-screen").then((module) => ({
    default: module.ShowcaseScreen,
  })),
);

export const showcaseRoutes: RouteObject = {
  path: "/components/showcase",
  element: <ShowcaseScreen />,
};
