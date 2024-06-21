import Image from "next/image";

import logoSrc from "../../../public/logo.png";

export default function Logo() {
  return (
    <Image
      src={logoSrc}
      alt="Logo Tik-Tak-Toe"
      width={163}
      height={53}
      priority
    />
  );
}
