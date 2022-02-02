interface Props {
  avatar: string;
  username: string;
  dateCreated: string;
  content: string;
  score: number;
}

const Comment = ({ avatar, username, dateCreated, content, score }: Props) => {
  return (
    <div className="bg-white p-3 rounded-lg">
      <div>
        <div>
          <img src={avatar} alt="avatar" />
        </div>
        <p>{username}</p>
        <p>{dateCreated}</p>
      </div>
      <p>{content}</p>
      <div>
        <p>{score}</p>
      </div>
    </div>
  );
};

export default Comment;
