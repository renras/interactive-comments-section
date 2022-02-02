import Avatar from "./Avatar";
import ButtonGroup from "./ButtonGroup";

interface Props {
  avatar: string;
  username: string;
  dateCreated: string;
  content: string;
  score: number;
}

const Comment = ({ avatar, username, dateCreated, content, score }: Props) => {
  return (
    <div className="flex flex-col gap-4 bg-white p-3 rounded-lg">
      <div className="flex gap-4">
        <Avatar src={avatar} alt="avatar" />
        <p className="font-medium text-dark-blue">{username}</p>
        <p className="text-grayish-blue">{dateCreated}</p>
      </div>
      <p className="text-grayish-blue">{content}</p>
      <div>
        <ButtonGroup score={score} />
      </div>
    </div>
  );
};

export default Comment;
