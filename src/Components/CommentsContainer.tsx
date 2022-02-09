import { useContext } from "react";
import AppContext from "../store/app-context";
import { v4 as uuidv4 } from "uuid";

import Comment from "./Comment";
import RepliesContainer from "./RepliesContainer";
import { CommentsState } from "../store/app-context";

const CommentsContainer = ({ comments }: { comments: CommentsState }) => {
  const appContext = useContext(AppContext);

  const replyHandler = (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null,
    id: number,
    username: string
  ) => {
    e.preventDefault();
    if (formRef) {
      // get the value of text field from the from
      let formData = new FormData(formRef);
      let textAreaValue = formData.get("textArea");
      if (textAreaValue) textAreaValue = textAreaValue.toString();

      appContext.dispatch({
        type: "SET_REPLIES",
        payload: {
          commentID: id,
          reply: {
            id: uuidv4(),
            content: textAreaValue,
            createdAt: "Just Now",
            score: 0,
            replyingTo: username,
            user: {
              image: {
                png: appContext.state.currentUser.image.png,
                webp: appContext.state.currentUser.image.png,
              },
              username: appContext.state.currentUser.username,
            },
          },
        },
      });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => {
        return (
          <div className="flex flex-col gap-4" key={index}>
            <Comment
              image={comment.user.image.png}
              username={comment.user.username}
              dateCreated={comment.createdAt}
              content={comment.content}
              score={comment.score}
              replyHandler={(e, formRef) =>
                replyHandler(e, formRef, comment.id, comment.user.username)
              }
            />
            {comment.replies.length > 0 && (
              <RepliesContainer
                replies={comment.replies}
                commentId={comment.id}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsContainer;
