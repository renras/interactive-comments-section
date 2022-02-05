import Comment from "./Comment";

interface Props {
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

const RepliesContainer = ({ replies }: Props) => {
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
            id={reply.id}
          />
        );
      })}
    </div>
  );
};

export default RepliesContainer;
