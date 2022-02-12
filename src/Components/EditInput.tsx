import { useState, useEffect, useRef } from "react";

interface Props {
  defaultValue?: string;
  onChange?: (value: string) => any;
  getEditInputText?: (text: string) => any;
}

const EditInput = ({ defaultValue, getEditInputText }: Props) => {
  const [value, setValue] = useState(defaultValue || "");
  const textAreaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    const focusTextArea = () => {
      if (textAreaRef.current) {
        textAreaRef.current.selectionStart = textAreaRef.current.value.length;
        textAreaRef.current.focus();
      }
    };

    focusTextArea();

    if (getEditInputText) getEditInputText(value);
  }, [value, getEditInputText]);

  return (
    <textarea
      ref={textAreaRef}
      className="col-span-2 text-grayish-blue resize-none rounded-lg p-3"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
};

export default EditInput;
