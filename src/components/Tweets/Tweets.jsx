import Tweet from "../Tweet/Tweet";
import css from "./Tweets.module.css";

export default function Tweets({ users }) {
  return (
    <ul className={css.card__list}>
      {users.map((user) => (
        <Tweet key={user.id} user={user} />
      ))}
    </ul>
  );
}
