interface Props {
  placeholder?: string;
  className?: string;
}

const TextArea = ({ placeholder, className }: Props) => {
  return (
    <textarea
      className={`py-2 px-5 resize-none rounded-lg border-solid border-2 border-very-light-gray ${className}`}
      rows={3}
      placeholder={placeholder}
    ></textarea>
  );
};

export default TextArea;
