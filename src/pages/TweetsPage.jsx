import { useEffect, useState } from "react";
import Tweets from "../components/Tweets/Tweets";
import { getUsers } from "../utils/Api";
import { Link } from "react-router-dom";
import Dropdown from "../components/Chakra/Dropdown";
import { Box } from "@chakra-ui/react";

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
          <div
            style={{
              marginTop: 16,
              marginBottom: 16,
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Link
              style={{
                padding: 16,
                backgroundColor: "#EBD8FF",
                borderRadius: 10.31,
                textTransform: "uppercase",
                textAlign: "center",
                lineHeight: 0.82,
                fontSize: 18,
                fontWeight: 600,
                color: "#373737",
                boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
              }}
              to="/"
            >
              Go Home
            </Link>

            <Dropdown />
          </div>
          <Tweets users={users} />
          <button
            style={{
              marginTop: 16,
              width: 196,
              height: 50,
              backgroundColor: "#EBD8FF",
              borderRadius: 10.31,
              textTransform: "uppercase",
              lineHeight: 0.82,
              fontSize: 18,
              fontWeight: 600,
              color: "#373737",
              boxShadow: "0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25)",
            }}
            type="button"
            onClick={handleLoadMorePage}
          >
            LoadMore
          </button>
        </>
      )}
    </>
  );
}
