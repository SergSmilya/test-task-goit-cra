import css from "./App.module.css";
// import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import TweetsPage from "../../pages/TweetsPage";
import HomePage from "../../pages/HomePage";
import SharedLoyaut from "../SharedLoyaut/SharedLoyaut";

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

      {/* <ToastContainer autoClose={3000} /> */}
    </div>
  );
}
