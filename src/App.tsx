import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { LandingScreen } from "./features/entrypoint/screen/landing-screen";

const ShowcaseScreen = lazy(() =>
  import("./features/showcase/screen/showcase-screen").then((module) => ({
    default: module.ShowcaseScreen,
  })),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<LandingScreen />} />
        <Route path="/components/showcase" element={<ShowcaseScreen />} />
      </Routes>
    </Suspense>
  );
}

export default App;
