import Logo from "./Logo/Logo";
import User from "./User/User";
import PlayButton from "./PlayButton/PlayButton";

export function Header() {
  return <header className="w-full max-w-[1440px] flex items-center justify-between px-8 bg-white h-[100px] shadow-lg mx-auto">
    <div className="flex justify-start items-center gap-8">
      <Logo />
      <div className="w-px h-8 bg-slate-200"/>
      <PlayButton />
    </div>
    <User />
  </header>;
}
