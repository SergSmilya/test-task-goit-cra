import { Suspense } from "react";
import { NavLink, Outlet } from "react-router-dom";

export default function SharedLoyaut() {
  return (
    <>
      <header>
        <nav>
          <ul style={{ display: "flex" }}>
            <li style={{ marginRight: 16 }}>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="users">Card</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>
          <Outlet />
        </Suspense>
      </main>
    </>
  );
}
