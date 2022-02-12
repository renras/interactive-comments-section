import { useState, useContext } from "react";
import AppContext from "../store/app-context";

import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ButtonWithIcon from "./ButtonWithIcon";
import replyIcon from "../Assets/images/icon-reply.svg";
import Message from "./Message";
import CurrentUserContainer from "./CurrentUserContainer";
import IconGroup from "./IconGroup";
import EditInput from "./EditInput";
import Button from "./Button";

interface Props {
  image: string;
  username: string;
  dateCreated: string;
  content: string;
  replyingTo?: string;
  score: number;
  commentID: number;
  replyID?: number;
  replyHandler: (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null
  ) => any;
  editReply?: (content: string, commentId: number, replyId: number) => void;
}

const Comment = ({
  image,
  username,
  dateCreated,
  content,
  replyingTo,
  score,
  replyID,
  commentID,
  replyHandler,
  editReply,
}: Props) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [message, setMessage] = useState("");
  const appContext = useContext(AppContext);

  const clickHandler = () => {
    setIsReplying(!isReplying);
  };

  const onSubmitHandler = (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null
  ) => {
    replyHandler(e, formRef);
    setIsReplying(false);
  };

  const deleteHandler = () => {
    appContext.dispatch({
      type: "DELETE_REPLY",
      payload: {
        commentID: commentID,
        replyID: replyID,
      },
    });
  };

  const editHandler = () => {
    setIsEditing(!isEditing);
  };

  const getText = (text: string) => {
    setMessage(text);
  };

  const getEditInputText = (text: string) => {
    setMessage(text);
  };

  const update = () => {
    if (editReply && replyID) editReply(message, commentID, replyID);
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-y-4 bg-white p-3 rounded-lg">
        <div className="flex gap-4 col-span-2 items-center">
          <Avatar src={image} alt="avatar" />
          <p className="font-medium text-dark-blue">{username}</p>
          <p className="text-grayish-blue">{dateCreated}</p>
        </div>
        {isEditing ? (
          <EditInput
            defaultValue={message}
            getEditInputText={(text) => getEditInputText(text)}
          />
        ) : (
          <Message
            message={content}
            replyingTo={replyingTo}
            getText={getText}
          />
        )}
        <ButtonGroup score={score} className="col-span-1 justify-self-start" />
        {appContext.state.currentUser.username === username && !isEditing && (
          <IconGroup deleteHandler={deleteHandler} editHandler={editHandler} />
        )}
        {appContext.state.currentUser.username !== username && !isEditing && (
          <ButtonWithIcon
            src={replyIcon}
            alt="reply-icon"
            text="Reply"
            textStyle="text-moderate-blue font-medium text-lg"
            className="col-span-1 justify-self-end"
            clickHandler={clickHandler}
          />
        )}
        {isEditing && (
          <>
            <div
              className="fixed top-0 left-0 h-full w-full z-0"
              onClick={() => setIsEditing(false)}
            ></div>
            <Button
              className="col-span-1 justify-self-end z-10"
              clickHandler={update}
            >
              UPDATE
            </Button>
          </>
        )}
      </div>
      {isReplying && (
        <>
          <div
            className="fixed top-0 left-0 h-full w-full z-0"
            onClick={() => setIsReplying(false)}
          ></div>
          <CurrentUserContainer
            avatar={appContext.state.currentUser.image.png}
            onSubmitHandler={(e, formRef) => onSubmitHandler(e, formRef)}
            replyingTo={username}
            className="z-10"
          />
        </>
      )}
    </div>
  );
};

export default Comment;
