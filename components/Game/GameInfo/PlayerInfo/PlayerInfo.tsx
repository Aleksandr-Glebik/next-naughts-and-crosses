import clsx from "clsx";

import User from "@/components/Header/User/User";
import GameSymbol from "@/components/UIKit/GameSymbol";

import { GAME_SYMBOLS } from "@/lib/constants/constants";

interface Props {
  className: string;
  id?: number;
  symbol: GAME_SYMBOLS;
  name: string;
  rating: number;
  avatar: string;
  time: string;
  isRight: boolean;
}

export default function PlayerInfo({
  className,
  symbol,
  avatar,
  name,
  rating,
  time,
  isRight,
}: Props) {
  return (
    <div
      className={clsx(
        className,
        "relative flex justify-start items-center gap-3 text-teal-600",
      )}
    >
      <div
        className={clsx(
          "absolute -top-1 -left-1 bg-white shadow-lg rounded-full flex justify-center items-center w-5 h-5",
          isRight && "order-3 -top-1 left-16",
        )}
      >
        <GameSymbol symbol={symbol} className="w-3 h-3" />
      </div>
      <User
        name={name}
        rating={rating}
        avatar={avatar}
        className={clsx(isRight && "order-4")}
      />
      <div className={clsx("h-6 w-px bg-slate-200", isRight && "order-2")} />
      <div
        className={clsx(
          "text-slate-900 text-lg font-semibold",
          isRight && "order-1",
        )}
      >
        {time}
      </div>
    </div>
  );
}
