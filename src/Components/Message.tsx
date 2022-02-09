interface Props {
  message: string;
  replyingTo?: string;
}

const Message = ({ message, replyingTo }: Props) => {
  return (
    <p className="col-span-2 text-grayish-blue">
      {replyingTo && (
        <span className="text-moderate-blue font-medium">@{replyingTo}</span>
      )}{" "}
      <span>{message}</span>
    </p>
  );
};

export default Message;
