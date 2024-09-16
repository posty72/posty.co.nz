import Image, { StaticImageData } from "next/image";

interface ProfileProps {
  image: StaticImageData;
  alt: string;
  caption?: string;
}

export const Profile = ({ alt, caption, image }: ProfileProps) => {
  return (
    <figure className="profile">
      <Image className="profile-image" src={image} alt={alt} />
      {caption && (
        <figcaption className="profile-caption">{caption}</figcaption>
      )}
    </figure>
  );
};
