import Button from "./Button";
import Avatar from "./Avatar";
import TextArea from "./TextArea";

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
    <form className="grid grid-cols-2 gap-y-5 items-center bg-white rounded-lg p-3">
      <Avatar
        className="row-start-2"
        src={currentUser.image.png}
        alt="current-user-avatar"
      />
      <TextArea className="col-span-2" placeholder="Add a comment..." />
      <Button className="justify-self-end">SEND</Button>
    </form>
  );
};

export default CurrentUserContainer;
