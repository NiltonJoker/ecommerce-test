import { Route, Routes } from "react-router";
import "./App.css";
import HomeLayout from "./components/layouts/home-layout";
import { APP_ROUTES } from "./routes/routes";
import { Suspense } from "react";
import Spinner from "./components/spinner";

function App() {
  return (
    <Routes>
      <Route element={<HomeLayout />}>
        {APP_ROUTES.map(({ path, element: Element }) => (
          <Route
            key={path}
            path={path}
            element={
              <Suspense
                fallback={
                  <div className="flex items-center justify-center h-full">
                    <Spinner />
                  </div>
                }
              >
                <Element />
              </Suspense>
            }
          />
        ))}
      </Route>
    </Routes>
  );
}

export default App;
