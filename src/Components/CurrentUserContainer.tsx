import { useContext, useRef } from "react";

import Button from "./Button";
import Avatar from "./Avatar";
import TextArea from "./TextArea";
import AppContext from "../store/app-context";

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
  const formRef = useRef<HTMLFormElement>(null);
  const appContext = useContext(AppContext);

  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    if (formRef.current) {
      let formData = new FormData(formRef.current);
      let textAreaValue = formData.get("textArea");
      appContext.addCommentHandler(e, textAreaValue);
      formRef.current.reset();
    }
  };

  return (
    <form
      ref={formRef}
      className="grid grid-cols-2 gap-y-5 items-center bg-white rounded-lg p-3"
      onSubmit={(e) => onSubmitHandler(e)}
    >
      <Avatar
        className="row-start-2"
        src={currentUser.image.png}
        alt="current-user-avatar"
      />
      <TextArea
        className="col-span-2"
        placeholder="Add a comment..."
        textAreaName="textArea"
      />
      <Button className="justify-self-end">SEND</Button>
    </form>
  );
};

export default CurrentUserContainer;
