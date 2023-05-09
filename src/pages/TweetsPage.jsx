import { useEffect, useState } from "react";
import Tweets from "../components/Tweets/Tweets";
import { getUsers } from "../utils/Api";
import { Link } from "react-router-dom";

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [countPage, setCountPage] = useState(1);
  const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers(countPage)
      .then((data) => setUsers((prevUsers) => [...prevUsers, ...data]))
      .catch(setError);
    // getUsers(countPage).then(setUsers).catch();
  }, [countPage]);

  function handleLoadMorePage() {
    setCountPage((s) => s + 1);
  }

  return (
    <>
      {users.length !== 0 && (
        <>
          <Link to="/">Go Home</Link>
          <Tweets users={users} />
          <button type="button" onClick={handleLoadMorePage}>
            LoadMore
          </button>
        </>
      )}
    </>
  );
}
