import LinkBack from "../LinkBack/LinkBack";
import { StarIcon } from "@/components/Icons/StarIcon";
import { UserIcon } from "@/components/Icons/UserIcon";
import { WatchIcon } from "@/components/Icons/WatchIcon";

export function GameTitle() {
  return (
    <div className="flex flex-col justify-start items-start gap-1">
      <LinkBack />
      <h1 className="text-4xl text-black -mt-1">Крестики нолики</h1>
      <div className="flex items-center gap-3 text-slate-400 text-xs">
        <StarIcon />
        <div className="flex items-center gap-1">
          <UserIcon />2
        </div>
        <div className="flex items-center gap-1">
          <WatchIcon />1 мин на ход
        </div>
      </div>
    </div>
  );
}
