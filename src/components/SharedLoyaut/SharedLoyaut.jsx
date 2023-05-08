import { Link, Outlet } from "react-router-dom";

export default function SharedLoyaut() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="users">Card</Link>
        </li>
      </ul>
      <Outlet />
    </nav>
  );
}
