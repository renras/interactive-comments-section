import { useRef, useEffect } from "react";

interface Props {
  message: string;
  replyingTo?: string;
  getText?: (text: string) => void;
}

const Message = ({ message, replyingTo, getText }: Props) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const pRef = useRef<HTMLParagraphElement>(null);

  const messageText = () => {
    // get the text content of p element
    if (pRef.current) {
      const text = pRef.current.textContent;
      return text || "";
    }

    return "";
  };

  useEffect(() => {
    // replace regext matches with a span element
    if (spanRef.current) {
      const registeredUsers = [
        "@amyrobson",
        "@maxblagun",
        "@ramsesmiron",
        "juliusomo",
      ];
      const regex = /@\w+/g;
      spanRef.current.innerHTML = message.replace(regex, (match) => {
        if (registeredUsers.includes(match))
          return `<span class="text-moderate-blue font-medium">${match}</span>`;
        return match;
      });
    }

    if (getText) getText(messageText());
  }, [message, getText]);

  return (
    <p ref={pRef} className="col-span-2 text-grayish-blue">
      {replyingTo && (
        <span className="text-moderate-blue font-medium">@{replyingTo}</span>
      )}{" "}
      <span ref={spanRef}>{message}</span>
    </p>
  );
};

export default Message;
