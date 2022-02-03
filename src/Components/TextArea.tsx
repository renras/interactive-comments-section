interface Props {
  placeholder?: string;
  className?: string;
  textAreaName?: string;
}

const TextArea = ({ placeholder, className, textAreaName }: Props) => {
  return (
    <textarea
      className={`py-2 px-5 resize-none rounded-lg border-solid border-2 border-very-light-gray ${className}`}
      rows={3}
      placeholder={placeholder}
      name={textAreaName}
    />
  );
};

export default TextArea;
