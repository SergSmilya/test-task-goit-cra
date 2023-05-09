import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
import css from "./App.module.css";
import { ToastContainer } from "react-toastify";
import SharedLoyaut from "../SharedLoyaut/SharedLoyaut";

const HomePage = lazy(() => import("../../pages/HomePage"));
const TweetsPage = lazy(() => import("../../pages/TweetsPage"));

export default function App() {
  return (
    <div className={css.container}>
      <Routes>
        <Route path="/" element={<SharedLoyaut />}>
          <Route index element={<HomePage />} />
          <Route path="users" element={<TweetsPage />} />
          <Route path="*" element={<HomePage />} />
        </Route>
      </Routes>

      <ToastContainer autoClose={3000} />
    </div>
  );
}
