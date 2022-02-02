import { useState } from "react";

interface Props {
  score: number;
}

const ButtonGroup = ({ score }: Props) => {
  const [value, setValue] = useState(score);

  const decrementHandler = () => {
    setValue(value - 1);
  };

  const incrementHandler = () => {
    setValue(value + 1);
  };

  return (
    <div className="inline-flex bg-light-grayish-blue/10 rounded-lg">
      <button
        className="py-2 px-3 text-light-grayish-blue/90 text-xl"
        onClick={incrementHandler}
      >
        +
      </button>
      <p className="py-2 px-2 text-moderate-blue font-medium text-xl">
        {value}
      </p>
      <button
        className="py-2 px-3 text-light-grayish-blue/90 text-xl"
        onClick={decrementHandler}
      >
        -
      </button>
    </div>
  );
};

export default ButtonGroup;
