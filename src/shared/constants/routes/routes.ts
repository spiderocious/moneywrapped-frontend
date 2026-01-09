// typed routes
import { lazy } from "react";

export const routeNames = {
  home: "/",
  signin: "/signin",
  signup: "/signup",
  dashboard: "/dashboard",
  newAnalysis: "/analysis/new",
  analysisResult: "/analysis/result/:analysiscode",
  showcase: "/components/showcase",
};

export const routes = [
  {
    name: "home",
    path: routeNames.home,
    component: lazy(() =>
      import("@features/entrypoint/screen/landing-screen").then((module) => ({
        default: module.LandingScreen,
      })),
    ),
  },
  {
    name: "signin",
    path: routeNames.signin,
    component: lazy(() =>
      import("@features/auth/screen/signin-screen").then((module) => ({
        default: module.SignInScreen,
      })),
    ),
  },
  {
    name: "signup",
    path: routeNames.signup,
    component: lazy(() =>
      import("@features/auth/screen/signup-screen").then((module) => ({
        default: module.SignUpScreen,
      })),
    ),
  },
  {
    name: "dashboard",
    path: routeNames.dashboard,
    component: lazy(() =>
      import("@features/dashboard/screen/dashboard-screen").then((module) => ({
        default: module.DashboardScreen,
      })),
    ),
  },
  {
    name: "newAnalysis",
    path: routeNames.newAnalysis,
    component: lazy(() =>
      import("@features/analysis/screen/new-analysis-screen").then(
        (module) => ({
          default: module.NewAnalysisScreen,
        }),
      ),
    ),
  },
  {
    name: "analysisResult",
    path: routeNames.analysisResult,
    component: lazy(() =>
      import("@features/analysis-result/screen/analysis-result-screen").then(
        (module) => ({
          default: module.AnalysisResultScreen,
        }),
      ),
    ),
  },
  {
    name: "showcase",
    path: routeNames.showcase,
    component: lazy(() =>
      import("@features/showcase/screen/showcase-screen").then((module) => ({
        default: module.ShowcaseScreen,
      })),
    ),
  },
];
