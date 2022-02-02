import { useState } from "react";

import minusIcon from "../Assets/images/icon-minus.svg";
import plusIcon from "../Assets/images/icon-plus.svg";

interface Props {
  score: number;
  className?: string;
}

const ButtonGroup = ({ score, className }: Props) => {
  const [value, setValue] = useState(score);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  const decrementHandler = () => {
    if (!disliked && liked) {
      setValue(value - 1);
      setLiked(false);
      return;
    }

    if (!disliked) {
      setValue(value - 1);
      setDisliked(true);
      setLiked(false);
    }
  };

  const incrementHandler = () => {
    if (!liked && disliked) {
      setValue(value + 1);
      setDisliked(false);
      return;
    }

    if (!liked) {
      setValue(value + 1);
      setLiked(true);
      setDisliked(false);
    }
  };

  return (
    <div
      className={`inline-flex bg-light-grayish-blue/10 rounded-lg ${className}`}
    >
      <button
        className="py-2 px-3 text-light-grayish-blue/90 text-xl"
        onClick={incrementHandler}
      >
        <img src={plusIcon} alt="minus-icon" />
      </button>
      <p className="py-2 px-2 text-moderate-blue font-medium text-xl">
        {value}
      </p>
      <button
        className="py-2 px-3 text-light-grayish-blue/90 text-xl"
        onClick={decrementHandler}
      >
        <img src={minusIcon} alt="minus-icon" />
      </button>
    </div>
  );
};

export default ButtonGroup;
