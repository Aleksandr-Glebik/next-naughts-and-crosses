import Logo from "./Logo/Logo";
import User from "./User/User";
import { ArrowUpOrDownIcon } from "../Icons/ArrowUpOrDownIcon";
import UIButton from "../UIKit/UIButton";

export function Header() {
  return (
    <header className="w-full max-w-[1440px] flex items-center justify-between px-8 bg-white h-[100px] shadow-lg mx-auto">
      <div className="flex justify-start items-center gap-8">
        <Logo />
        <div className="w-px h-8 bg-slate-200" />
        <UIButton size="lg" variant="primary">Играть</UIButton>
      </div>
      <button className="flex justify-center items-center gap-3 transition-colors text-teal-600 hover:text-teal-400">
        <User name="Glebikaa" rating={1230} avatar={'firstAvatar'} />
        <ArrowUpOrDownIcon />
      </button>
    </header>
  );
}
