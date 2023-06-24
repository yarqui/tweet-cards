import { Suspense, lazy, useState } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import PAGE_NAMES from "./router/paths";
import { loadFromLocalStorage } from "./utils/localStorageOperations";
import LS_KEY_NAMES from "./utils/LSKeyNames";
const Main = lazy(() => import("./pages/Main"));
const Tweet = lazy(() => import("./pages/Tweet"));

const initialSubscriptions = [];

function App() {
  const [subscriptions, setSubscriptions] = useState(
    () =>
      loadFromLocalStorage(LS_KEY_NAMES.subscriptions) ?? initialSubscriptions
  );

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path={PAGE_NAMES.homepage} element={<Main />} />
        <Route
          exact
          path={`${PAGE_NAMES.tweet}/:id`}
          element={
            <Tweet
              subscriptions={subscriptions}
              setSubscriptions={setSubscriptions}
            />
          }
        />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
