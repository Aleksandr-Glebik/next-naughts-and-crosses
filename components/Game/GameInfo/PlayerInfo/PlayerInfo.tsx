"use client";

import clsx from "clsx";

import User from "@/components/Header/User/User";
import GameSymbol from "@/components/UIKit/GameSymbol";

import { GAME_SYMBOLS } from "@/lib/constants/constants";
import { useEffect, useState } from "react";

interface Props {
  className: string;
  id?: number;
  symbol: GAME_SYMBOLS;
  name: string;
  rating: number;
  avatar: string;
  isRight: boolean;
  isTimerRunning: boolean;
}

export default function PlayerInfo({
  className,
  symbol,
  avatar,
  name,
  rating,
  isRight,
  isTimerRunning,
}: Props) {
  const [seconds, setSeconds] = useState(60);

  const minutesString = String(Math.floor(seconds / 60)).padStart(2, "0");
  const secondsString = String(seconds % 60).padStart(2, "0");

  const isDanger = seconds < 10;

  useEffect(() => {
    if (isTimerRunning) {
      const timerId = setInterval(() => {
        setSeconds((prev) => Math.max(prev - 1, 0));
      }, 1000);

      return () => {
        clearInterval(timerId);
        setSeconds(60);
      };
    }
  }, [isTimerRunning]);

  const getTimerColor = (isDanger: boolean) => {
    if (isTimerRunning) {
      return isDanger ? "text-orange-500" : "text-slate-900"
    }

    return "text-slate-300"
  }

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
          isRight && "order-3 -top-1 left-[75px]",
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
          "text-lg font-semibold w-[60px]",
          isRight && "order-1",
          getTimerColor(isDanger)
        )}
      >
        {minutesString}:{secondsString}
      </div>
    </div>
  );
}
