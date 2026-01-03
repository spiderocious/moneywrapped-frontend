import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./features/entrypoint/Home";

const ShowcaseScreen = lazy(() =>
  import("./features/showcase/screen/showcase-screen").then((module) => ({
    default: module.ShowcaseScreen,
  })),
);

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components/showcase" element={<ShowcaseScreen />} />
      </Routes>
    </Suspense>
  );
}

export default App;
