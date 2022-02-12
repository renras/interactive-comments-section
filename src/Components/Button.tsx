interface Props {
  children: any;
  className?: string;
  clickHandler?: () => any;
}

const sendButton = ({ children, className, clickHandler }: Props) => {
  return (
    <button
      onClick={clickHandler}
      className={`rounded-lg bg-moderate-blue text-white px-8 py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default sendButton;
