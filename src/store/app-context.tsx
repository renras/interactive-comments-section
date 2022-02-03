import React, { useState } from "react";
import data from "../data";

const AppContext: React.Context<any | null> = React.createContext(null);

export const AppContextProvider = ({ children }: any) => {
  const currentUser = data.currentUser;
  const [comments, setComments] = useState(data.comments);

  const addCommentHandler = (
    e: React.FormEvent<HTMLFormElement>,
    content: string
  ) => {
    e.preventDefault();
    setComments([
      ...comments,
      {
        id: comments.length + 1,
        content: content,
        createdAt: "Just now",
        score: 0,
        user: {
          image: {
            png: currentUser.image.png,
            webp: currentUser.image.webp,
          },
          username: currentUser.username,
        },
        replies: [],
      },
    ]);
  };

  console.log(comments);

  return (
    <AppContext.Provider value={{ currentUser, comments, addCommentHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
