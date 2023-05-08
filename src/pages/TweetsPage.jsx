import { useEffect, useState } from "react";
import Tweets from "../components/Tweets/Tweets";
import { getUsers } from "../utils/Api";
import { Link } from "react-router-dom";

export default function TweetsPage() {
  const [users, setUsers] = useState([]);
  const [countPage, setCountPage] = useState(1);
  // const [error, setError] = useState(null);
  // const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    getUsers(countPage)
      .then((data) => {
        setUsers((state) => [...state, ...data]);
        // setUsers((s) => [...data, ...s]);
      })
      .catch();
  }, [countPage]);

  function handleLoadMorePage() {
    setCountPage((s) => s + 1);
  }
  console.log(users);
  return (
    <div>
      {" "}
      <h1>Hello</h1>
      <button type="button" onClick={handleLoadMorePage}>
        LoadMore
      </button>
    </div>

    // <>
    //   {users.length !== 0 && (
    //     <>
    //       <Link to="/">HomePage</Link>
    //       <Tweets users={users} />
    // <button type="button" onClick={handleLoadMorePage}>
    //   LoadMore
    // </button>
    //     </>
    //   )}
    // </>
  );
}
