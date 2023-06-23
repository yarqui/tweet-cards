import { Suspense, lazy, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
import NotFound from "./pages/NotFound";
import PAGE_NAMES from "./router/paths";
const Main = lazy(() => import("./pages/Main"));
const Tweet = lazy(() => import("./pages/Tweet"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path={PAGE_NAMES.homepage} element={<Main />} />
        <Route exact path={`${PAGE_NAMES.tweet}/:id`} element={<Tweet />} />
        <Route exact path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
