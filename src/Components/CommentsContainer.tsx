import Comment from "./Comment";
import RepliesContainer from "./RepliesContainer";
import { CommentsState } from "../store/app-context";

const CommentsContainer = ({ comments }: { comments: CommentsState }) => {
  return (
    <div className="flex flex-col gap-4">
      {comments.map((comment, index) => {
        return (
          <div className="flex flex-col gap-4" key={index}>
            <Comment
              image={comment.user.image.png}
              username={comment.user.username}
              dateCreated={comment.createdAt}
              content={comment.content}
              score={comment.score}
              id={comment.id}
            />
            {comment.replies.length > 0 && (
              <RepliesContainer replies={comment.replies} />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default CommentsContainer;
