import Image from "next/image";

import avatarSrc from "../../../public/first-avatar.png";

export default function User() {
  return (
    <button className="flex justify-center items-center gap-3 transition-colors text-teal-600 hover:text-teal-400">
      <Image src={avatarSrc} alt="user avatar" width={48} height={48} />
      <div className="flex flex-col justify-center items-start">
        <h3 className="text-lg">Glebikaa</h3>
        <p className="text-sm text-gray-500">Рейтинг: 1230</p>
      </div>
      <svg
        className=""
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
      >
        <path
          d="M9.18753 12.75C9.04368 12.75 8.89968 12.6951 8.78985 12.5852L3.16485 6.96022C2.94505 6.74043 2.94505 6.3845 3.16485 6.16485C3.38464 5.94519 3.74057 5.94505 3.96022 6.16485L9.18753 11.3922L14.4148 6.16485C14.6346 5.94505 14.9906 5.94505 15.2102 6.16485C15.4299 6.38464 15.43 6.74057 15.2102 6.96022L9.58522 12.5852C9.47539 12.6951 9.33139 12.75 9.18753 12.75Z"
          fill="currentColor"
        />
      </svg>
    </button>
  );
}
