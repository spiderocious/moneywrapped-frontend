import { Suspense, createElement } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "@shared/constants/routes/routes";
import { ErrorBoundary } from "@shared/components/error-boundary";

function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={createElement(route.component)}
            />
          ))}
        </Routes>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
