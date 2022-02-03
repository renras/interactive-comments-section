interface Props {
  children: any;
  className?: string;
  onClick?: () => any;
}

const sendButton = ({ children, className, onClick }: Props) => {
  return (
    <button
      className={`rounded-lg bg-moderate-blue text-white px-8 py-3 ${className}`}
    >
      {children}
    </button>
  );
};

export default sendButton;
