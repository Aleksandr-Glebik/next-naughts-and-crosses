import clsx from "clsx";

import User from "@/components/Header/User/User";

interface Props {
  className: string;
  id?: number;
  icon: React.ReactNode | JSX.Element;
  name: string;
  rating: number;
  avatar: string;
  time: string;
}

export default function PlayerInfo({
  className,
  icon,
  avatar,
  name,
  rating,
  time,
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "relative flex justify-center items-center gap-3 text-teal-600",
      )}
    >
      <div className="absolute -top-1 -left-1 bg-white shadow-lg rounded-full flex justify-center items-center w-5 h-5">
        {icon}
      </div>
      <User name={name} rating={rating} avatar={avatar} />
      <div className="h-6 w-px bg-slate-200" />
      <div className="text-slate-900 text-lg font-semibold">{time}</div>
    </div>
  );
}
