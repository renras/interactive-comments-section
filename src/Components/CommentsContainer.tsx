import Comment from "./Comment";
import RepliesContainer from "./RepliesContainer";

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
      {comments.map((comment, index) => {
        return (
          <div className="flex flex-col gap-4" key={index}>
            <Comment comment={comment} />
            <RepliesContainer replies={comment.replies} />
          </div>
        );
      })}
    </div>
  );
};

export default CommentsContainer;
