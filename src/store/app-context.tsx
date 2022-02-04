import React, { useReducer } from "react";
import data from "../data";

const AppContext: React.Context<any | null> = React.createContext(null);

enum ActionTypes {
  SET_COMMENTS = "SET_COMMENTS",
}

type Action = {
  type: ActionTypes;
  payload: any;
};

const initialState = {
  comments: data.comments,
  currentUser: data.currentUser,
};

type InitialState = typeof initialState;
export type CommentsState = typeof initialState.comments;
export type CurrentUserState = typeof initialState.currentUser;

const reducer = (state: InitialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_COMMENTS":
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addCommentHandler = (content: string | null) => {
    dispatch({
      type: ActionTypes.SET_COMMENTS,
      payload: {
        id: state.comments.length + 1,
        content: content,
        createdAt: "Just now",
        score: 0,
        user: {
          image: {
            png: state.currentUser.image.png,
            webp: state.currentUser.image.webp,
          },
          username: state.currentUser.username,
        },
        replies: [],
      },
    });
  };

  const onSubmitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null
  ) => {
    e.preventDefault();
    if (formRef) {
      let formData = new FormData(formRef);
      let textAreaValue = formData.get("textArea");
      if (textAreaValue) textAreaValue = textAreaValue.toString();
      addCommentHandler(textAreaValue);
      formRef.reset();
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, onSubmitHandler }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
