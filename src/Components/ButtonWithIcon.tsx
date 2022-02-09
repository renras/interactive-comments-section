interface Props {
  src: string;
  alt: string;
  text: string;
  className?: string;
  textStyle?: string;
  clickHandler?: () => any;
}

const ButtonWithIcon = ({
  src,
  alt,
  text,
  className,
  clickHandler,
  textStyle,
}: Props) => {
  return (
    <button
      className={`inline-flex gap-3 items-center ${className}`}
      onClick={clickHandler}
    >
      <img src={src} alt={alt} />
      <p className={textStyle}>{text}</p>
    </button>
  );
};

export default ButtonWithIcon;
