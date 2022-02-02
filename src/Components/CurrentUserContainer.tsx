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
    <form className="grid grid-cols-2 gap-y-5 items-center bg-white rounded-lg p-3">
      <Avatar
        className="row-start-2"
        src={currentUser.image.png}
        alt="current-user-avatar"
      />
      <textarea
        className="py-2 px-5 col-span-2 resize-none rounded-lg border-solid border-2 border-very-light-gray"
        rows={3}
        placeholder="Add a comment..."
      ></textarea>
      <Button className="justify-self-end">SEND</Button>
    </form>
  );
};

export default CurrentUserContainer;
