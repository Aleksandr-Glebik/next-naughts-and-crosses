import { GameTitle } from "@/components/Game/GameTitle";
import { GameInfo } from "@/components/Game/GameInfo";

export default function Home() {
  return <main className="max-w-[620px] mx-auto pt-6 flex flex-col justify-start items-start gap-5">
    <GameTitle />
    <GameInfo />
  </main>;
}
