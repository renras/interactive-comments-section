import React from "react";

interface Props {
  children: any;
}

const sendButton = ({ children }: Props) => {
  return (
    <button className=" rounded-lg bg-moderate-blue text-white px-8 py-3">
      {children}
    </button>
  );
};

export default sendButton;
