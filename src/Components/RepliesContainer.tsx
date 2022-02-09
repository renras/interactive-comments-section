import { useContext } from "react";
import Comment from "./Comment";
import AppContext from "../store/app-context";
import { v4 as uuidv4 } from "uuid";

interface Props {
  commentId: number;
  replies: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
  }[];
}

const RepliesContainer = ({ replies, commentId }: Props) => {
  const appContext = useContext(AppContext);

  const replyHandler = (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null,
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
          commentID: commentId,
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
    <div className="flex flex-col gap-4 pl-3 border-l-2 border-light-grayish-blue/40">
      {replies.map((reply) => {
        return (
          <Comment
            key={reply.id}
            image={reply.user.image.png}
            username={reply.user.username}
            dateCreated={reply.createdAt}
            content={reply.content}
            replyingTo={reply.replyingTo}
            score={reply.score}
            replyHandler={(e, formRef) =>
              replyHandler(e, formRef, reply.user.username)
            }
          />
        );
      })}
    </div>
  );
};

export default RepliesContainer;
