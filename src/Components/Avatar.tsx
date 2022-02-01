interface Props {
  src: string;
  alt: string;
}

const Avatar = ({ src, alt }: Props) => {
  return (
    <div className="rounded-full w-10">
      <img src={src} alt={alt} />
    </div>
  );
};

export default Avatar;
