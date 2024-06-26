import PlayerInfo from "./PlayerInfo/PlayerInfo";

import { playerList } from "@/lib/data";

interface Props {
  playersCount: number;
}

export function GameInfo({ playersCount }: Props) {
  return (
    <div className="grid grid-cols-2 gap-12 shadow-lg rounded-lg py-4 px-8 w-full max-w-[620px] bg-white">
      {playerList.slice(0, playersCount).map((item, index) => (
        <PlayerInfo
          key={item.id}
          className="w-50"
          symbol={item.symbol}
          avatar={item.avatar}
          name={item.name}
          rating={item.rating}
          time={item.time}
          isRight={index % 2 !== 0 ? true : false}
        />
      ))}
    </div>
  );
}
