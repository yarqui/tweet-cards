import { Suspense, lazy, useState } from "react";
import { Route, Router, Routes } from "react-router-dom";
import "./App.css";
const Main = lazy(() => import("./components/Main/"));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route exact path="/" element={<Main />} />
      </Routes>
    </Suspense>
  );
}

export default App;
