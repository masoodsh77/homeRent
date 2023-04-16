import Image from "next/image";
import { FC } from "react";

interface AvatarProps {
  src?: string | null;
}

const Avatar: FC<AvatarProps> = ({ src }) => {
  return (
    <Image
      className="rounded-full"
      alt="Avatar"
      height="30"
      width="30"
      src={src || "/images/placeholder.jpg"}
    />
  );
};

export default Avatar;
