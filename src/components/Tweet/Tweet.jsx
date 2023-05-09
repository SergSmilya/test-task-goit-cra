import { useEffect, useState } from "react";
import css from "./Tweet.module.css";
import Logo from "../../img/Logo.svg";
import Picture_abstract from "../../img/Picture_abstract.png";
import { putUserCount } from "../../utils/Api";
import { toast } from "react-toastify";

export default function Tweet({ user }) {
  const { id, avatar, tweets, followers, user_name } = user;
  const {
    tweet__card,
    logo,
    tweet__img,
    tweet__border,
    tweet__wrap,
    img__avatar,
    wrap__text,
    text__item,
    tweet__text,
    tweet__button,
    active__button,
  } = css;

  const [countFollowers, setCountFollowers] = useState(followers);
  const [isActiveButton, setIsActiveButton] = useState(
    JSON.parse(localStorage.getItem(id)).isActiveButton ?? false
  );

  const valueFollowersToString = String(countFollowers);
  const valueFollowersToSlice = valueFollowersToString.slice(
    valueFollowersToString.length - 3
  );
  const valueFollowersWithComa =
    valueFollowersToString.replace(valueFollowersToSlice, ",") +
    `${valueFollowersToSlice}`;

  useEffect(() => {
    localStorage.setItem(id, JSON.stringify({ isActiveButton, user_name }));
  }, [id, isActiveButton, user_name]);

  function setCountFollowersAndActiveButton(data) {
    setCountFollowers(data.followers);
    setIsActiveButton(!isActiveButton);
  }

  function handleClick(e) {
    const currentId = e.currentTarget.id;

    if (isActiveButton) {
      putUserCount(currentId, countFollowers - 1)
        .then((data) => {
          setCountFollowersAndActiveButton(data);
        })
        .catch(toast.warning);
    } else {
      putUserCount(currentId, countFollowers + 1)
        .then((data) => {
          setCountFollowersAndActiveButton(data);
        })
        .catch(toast.warning);
    }
  }

  return (
    <li>
      <div className={tweet__card}>
        <img className={logo} src={Logo} alt="Logo" />
        <img
          className={tweet__img}
          src={Picture_abstract}
          alt="Picture_abstract"
        />
        <div className={tweet__border}>
          <div className={tweet__wrap}>
            <img className={img__avatar} src={avatar} alt={user_name} />
          </div>
        </div>
        <div className={wrap__text}>
          <ul>
            <li className={text__item}>
              <p className={tweet__text}>
                {tweets} <span className={tweet__text}>tweets</span>
              </p>
            </li>
            <li className={text__item}>
              <p className={tweet__text}>
                {valueFollowersWithComa}{" "}
                <span className={tweet__text}>followers</span>
              </p>
            </li>
          </ul>
          <button
            onClick={handleClick}
            className={
              isActiveButton
                ? `${tweet__button} ${active__button}`
                : `${tweet__button}`
            }
            id={id}
            type="button"
          >
            {isActiveButton ? "following" : "follow"}
          </button>
        </div>
      </div>
    </li>
  );
}

// ====================================
// import { useEffect, useState } from "react";
// import css from "./Tweet.module.css";
// import Logo from "../../img/Logo.svg";
// import Picture_abstract from "../../img/Picture_abstract.png";
// import { putUserCount } from "../../utils/Api";
// import { toast } from "react-toastify";

// export default function Tweet({ user }) {
//   const { id, avatar, tweets, followers, user_name } = user;
//   const {
//     tweet__card,
//     logo,
//     tweet__img,
//     tweet__border,
//     tweet__wrap,
//     img__avatar,
//     wrap__text,
//     text__item,
//     tweet__text,
//     tweet__button,
//     active__button,
//   } = css;

//   const [countFollowers, setCountFollowers] = useState(followers);
//   const [isActiveButton, setIsActiveButton] = useState(
//     JSON.parse(localStorage.getItem(id)) ?? false
//   );

//   const valueFollowersToString = String(countFollowers);
//   const valueFollowersToSlice = valueFollowersToString.slice(
//     valueFollowersToString.length - 3
//   );
//   const valueFollowersWithComa =
//     valueFollowersToString.replace(valueFollowersToSlice, ",") +
//     `${valueFollowersToSlice}`;

//   useEffect(() => {
//     localStorage.setItem(id, JSON.stringify(isActiveButton, user_name));
//   }, [id, isActiveButton, user_name]);

//   function setCountFollowersAndActiveButton(data) {
//     setCountFollowers(data.followers);
//     setIsActiveButton(!isActiveButton);
//   }

//   function handleClick(e) {
//     const currentId = e.currentTarget.id;

//     if (isActiveButton) {
//       putUserCount(currentId, countFollowers - 1)
//         .then((data) => {
//           setCountFollowersAndActiveButton(data);
//         })
//         .catch(toast.warning);
//     } else {
//       putUserCount(currentId, countFollowers + 1)
//         .then((data) => {
//           setCountFollowersAndActiveButton(data);
//         })
//         .catch(toast.warning);
//     }
//   }
//   console.log(JSON.parse(localStorage.getItem(id)));
//   return (
//     <li>
//       <div className={tweet__card}>
//         <img className={logo} src={Logo} alt="Logo" />
//         <img
//           className={tweet__img}
//           src={Picture_abstract}
//           alt="Picture_abstract"
//         />
//         <div className={tweet__border}>
//           <div className={tweet__wrap}>
//             <img className={img__avatar} src={avatar} alt={user_name} />
//           </div>
//         </div>
//         <div className={wrap__text}>
//           <ul>
//             <li className={text__item}>
//               <p className={tweet__text}>
//                 {tweets} <span className={tweet__text}>tweets</span>
//               </p>
//             </li>
//             <li className={text__item}>
//               <p className={tweet__text}>
//                 {valueFollowersWithComa}{" "}
//                 <span className={tweet__text}>followers</span>
//               </p>
//             </li>
//           </ul>
//           <button
//             onClick={handleClick}
//             className={
//               isActiveButton
//                 ? `${tweet__button} ${active__button}`
//                 : `${tweet__button}`
//             }
//             id={id}
//             type="button"
//           >
//             {isActiveButton ? "following" : "follow"}
//           </button>
//         </div>
//       </div>
//     </li>
//   );
// }
