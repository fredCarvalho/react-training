import { AiFillLike, AiOutlineLike } from "react-icons/ai";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import styles from "./Like.module.css";
import { useState } from "react";

interface Props {
  onClick: () => void;
}

const Like = ({ onClick }: Props) => {
  const [liked, setLike] = useState(false);

  const toggle = () => {
    setLike(!liked);
    onClick();
  };

  return (
    <button className={styles.containerButton} onClick={toggle}>
      {liked && <AiFillHeart color="#ff6b81" size="20" />}
      {!liked && <AiOutlineHeart color="#ff6b81" size="20" />}
    </button>
  );

  //   if (status)
  //     return (
  //       <button
  //         className={styles.containerButton}
  //         onClick={() => {
  //           useState(false);
  //         }}
  //       >
  //         <AiFillHeart color="blue" size="60" />
  //       </button>
  //     );
  //   else
  //     return (
  //       <button
  //         className={styles.containerButton}
  //         onClick={() => {
  //           useState(true);
  //         }}
  //       >
  //         <AiOutlineHeart color="blue" size="60" />
  //       </button>
  //     );
};

export default Like;
