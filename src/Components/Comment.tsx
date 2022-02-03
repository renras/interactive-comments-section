import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";
import ButtonWithIcon from "./ButtonWithIcon";
import replyIcon from "../Assets/images/icon-reply.svg";
import Message from "./Message";

interface Props {
  comment: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    replyingTo?: string;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
    replies?: {
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
  };
}

const Comment = ({ comment }: Props) => {
  return (
    <div className="grid grid-cols-2 gap-y-4 bg-white p-3 rounded-lg">
      <div className="flex gap-4 col-span-2">
        <Avatar src={comment.user.image.png} alt="avatar" />
        <p className="font-medium text-dark-blue">{comment.user.username}</p>
        <p className="text-grayish-blue">{comment.createdAt}</p>
      </div>
      <Message message={comment.content} replyingTo={comment.replyingTo} />
      <ButtonGroup
        score={comment.score}
        className="col-span-1 justify-self-start"
      />
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
