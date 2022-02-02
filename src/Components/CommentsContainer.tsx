import Comment from "./Comment";

interface Props {
  comments: {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
      image: {
        png: string;
        webp: string;
      };
      username: string;
    };
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
  }[];
}

const CommentsContainer = ({ comments }: Props) => {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment) => {
        return <Comment key={comment.id} comment={comment} />;
      })}
    </div>
  );
};

export default CommentsContainer;
