import Button from "./Button";
import Avatar from "./Avatar";

interface Props {
  currentUser: {
    image: {
      png: string;
      webp: string;
    };
    username: string;
  };
}

const CurrentUserContainer = ({ currentUser }: Props) => {
  return (
    <div>
      <Avatar src={currentUser.image.png} alt="current-user-avatar" />
      <form>
        <textarea className="resize-none"></textarea>
        <Button>SEND</Button>
      </form>
    </div>
  );
};

export default CurrentUserContainer;
