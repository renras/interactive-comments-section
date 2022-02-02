interface Props {
  src: string;
  alt: string;
  className?: string;
}

const Avatar = ({ src, alt, className }: Props) => {
  return (
    <div className={`rounded-full w-8 ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
