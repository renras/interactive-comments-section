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
    <div className="flex flex-col gap-4 ">
      {replies.map((reply) => {
        return <Comment key={reply.id} comment={reply} />;
      })}
    </div>
  );
};

export default RepliesContainer;
