interface Props {
  src: string;
  alt: string;
  text: string;
  color?: string;
  className?: string;
  clickHandler: () => any;
}

const ButtonWithIcon = ({
  src,
  alt,
  text,
  color,
  className,
  clickHandler,
}: Props) => {
  return (
    <button
      className={`inline-flex gap-3 items-center ${className}`}
      onClick={clickHandler}
    >
      <img src={src} alt={alt} />
      <p className={`text-${color} font-medium text-lg`}>{text}</p>
    </button>
  );
};

export default ButtonWithIcon;
