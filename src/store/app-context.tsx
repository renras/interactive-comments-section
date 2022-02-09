import React, { useReducer } from "react";
import data from "../data";

const AppContext: React.Context<any | null> = React.createContext(null);

enum ActionTypes {
  SET_COMMENTS = "SET_COMMENTS",
  SET_REPLIES = "SET_REPLIES",
  DELETE_REPLY = "DELETE_REPLY",
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
type CommentState = typeof initialState.comments[0];
export type CurrentUserState = typeof initialState.currentUser;

const reducer = (state: InitialState, action: Action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_COMMENTS":
      return {
        ...state,
        comments: [...state.comments, payload],
      };
    case "SET_REPLIES":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === payload.commentID) {
            return { ...comment, replies: [...comment.replies, payload.reply] };
          }
          return comment;
        }),
      };
    case "DELETE_REPLY":
      return {
        ...state,
        comments: state.comments.map((comment) => {
          if (comment.id === payload.commentID) {
            return {
              ...comment,
              replies: comment.replies.filter(
                (reply) => reply.id !== payload.replyID
              ),
            };
          }
          return comment;
        }),
      };
    default:
      return state;
  }
};

export const AppContextProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const addComment = (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null
  ) => {
    e.preventDefault();
    if (formRef) {
      // get the value of text field from the from
      let formData = new FormData(formRef);
      let textAreaValue = formData.get("textArea");
      if (textAreaValue) textAreaValue = textAreaValue.toString();

      dispatch({
        type: ActionTypes.SET_COMMENTS,
        payload: {
          id: state.comments.length + 1,
          content: textAreaValue,
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
      formRef.reset();
    }
  };

  return (
    <AppContext.Provider value={{ state, dispatch, addComment }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
