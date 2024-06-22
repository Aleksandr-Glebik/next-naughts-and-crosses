import PlayerInfo from "./PlayerInfo/PlayerInfo";

import { playerList } from "@/lib/data";

export function GameInfo() {
  return (
    <div className="flex flex-wrap justify-between items-center gap-10 shadow-lg rounded-lg py-4 px-8 w-full max-w-[620px] bg-white">
      {playerList.map(item => (
        <PlayerInfo
        key={item.id}
        className="w-50"
        icon={item.icon}
        avatar={item.avatar}
        name={item.name}
        rating={item.rating}
        time={item.time}
      />
      ))}
    </div>
  );
}
