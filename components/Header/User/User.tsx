import Image, { StaticImageData } from "next/image";

import firstAvatar from '../../../public/images/first-avatar.png'
import secondAvatar from '../../../public/images/second-avatar.png'
import thirdAvatar from '../../../public/images/third-avatar.png'
import fourthAvatar from '../../../public/images/fourth-avatar.png'
interface UserProps {
  name: string;
  avatar: string;
  rating: number;
}
interface AvatarProps {
  [key: string]:  string | StaticImageData;
}

const avatarSrc: AvatarProps = {
  'firstAvatar': firstAvatar,
  'secondAvatar': secondAvatar,
  'thirdAvatar': thirdAvatar,
  'fourthAvatar': fourthAvatar
}

export default function User({
  name,
  avatar,
  rating,
}: UserProps) {
  return (
    <div className="flex justify-center items-center gap-3">
      <Image src={avatarSrc[avatar]} alt="user avatar" width={48} height={48} />
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg">{name}</h3>
        <p className="text-sm text-gray-500">Рейтинг: {rating}</p>
      </div>
    </div>
  );
}
