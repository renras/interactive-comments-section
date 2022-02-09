import { useState, useEffect, useRef } from "react";

interface Props {
  placeholder?: string;
  className?: string;
  textAreaName?: string;
  replyingTo?: string;
}

const TextArea = ({
  placeholder,
  className,
  textAreaName,
  replyingTo,
}: Props) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [text, setText] = useState("");

  useEffect(() => {
    if (replyingTo) setText("@" + replyingTo + " ");

    const focusTextArea = () => {
      if (textareaRef.current) {
        textareaRef.current.selectionStart =
          textareaRef.current.value.length + 10;
        textareaRef.current.focus();
      }
    };

    focusTextArea();
  }, [replyingTo]);

  return (
    <textarea
      ref={textareaRef}
      className={`py-2 px-5 resize-none rounded-lg border-solid border-2 border-very-light-gray ${className}`}
      rows={3}
      placeholder={placeholder}
      name={textAreaName}
      value={text}
      onChange={(e) => setText(e.target.value)}
    />
  );
};

export default TextArea;
