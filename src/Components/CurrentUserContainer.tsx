import { useRef } from "react";

import Button from "./Button";
import Avatar from "./Avatar";
import TextArea from "./TextArea";

interface Props {
  avatar: string;
  replyingTo?: string;
  onSubmitHandler: (
    e: React.FormEvent<HTMLFormElement>,
    formRef: HTMLFormElement | null
  ) => void;
}

const CurrentUserContainer = ({
  avatar,
  onSubmitHandler,
  replyingTo,
}: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  return (
    <form
      ref={formRef}
      className="grid grid-cols-2 gap-y-5 items-center bg-white rounded-lg p-3"
      onSubmit={(e) => onSubmitHandler(e, formRef.current)}
    >
      <Avatar className="row-start-2" src={avatar} alt="current-user-avatar" />
      <TextArea
        className="col-span-2"
        placeholder="Add a comment..."
        textAreaName="textArea"
        replyingTo={replyingTo}
      />
      <Button className="justify-self-end">SEND</Button>
    </form>
  );
};

export default CurrentUserContainer;
