import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ButtonWithIcon from "./ButtonWithIcon";
import replyIcon from "../Assets/images/icon-reply.svg";
import Message from "./Message";

interface Props {
  image: string;
  username: string;
  dateCreated: string;
  content: string;
  replyingTo?: string;
  score: number;
}

const Comment = ({
  image,
  username,
  dateCreated,
  content,
  replyingTo,
  score,
}: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 bg-white p-3 rounded-lg">
      <div className="flex gap-4 col-span-2">
        <Avatar src={image} alt="avatar" />
        <p className="font-medium text-dark-blue">{username}</p>
        <p className="text-grayish-blue">{dateCreated}</p>
      </div>
      <Message message={content} replyingTo={replyingTo} />
      <ButtonGroup score={score} className="col-span-1 justify-self-start" />
      <ButtonWithIcon
        src={replyIcon}
        alt="reply-icon"
        text="Reply"
        color="moderate-blue"
        className="col-span-1 justify-self-end"
      />
    </div>
  );
};

export default Comment;
