import { useRef, useEffect } from "react";

interface Props {
  message: string;
  replyingTo?: string;
}

const Message = ({ message, replyingTo }: Props) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const registeredUsers = [
      "@amyrobson",
      "@maxblagun",
      "@ramsesmiron",
      "juliusomo",
    ];
    const regex = /@\w+/g;
    // replace regext matches with a span element
    if (spanRef.current) {
      spanRef.current.innerHTML = message.replace(regex, (match) => {
        if (registeredUsers.includes(match))
          return `<span class="text-moderate-blue font-medium">${match}</span>`;
        return match;
      });
    }
  }, [message]);

  return (
    <p className="col-span-2 text-grayish-blue">
      {replyingTo && (
        <span className="text-moderate-blue font-medium">@{replyingTo}</span>
      )}{" "}
      <span ref={spanRef}>{message}</span>
    </p>
  );
};

export default Message;
