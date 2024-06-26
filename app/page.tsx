"use client";

import { useState } from "react";

import { GameTitle, GameInfo, GameField } from "@/components/Game";

export default function Home() {
  const [playersCount] = useState<number>(4);

  return (
    <main className="max-w-[620px] mx-auto pt-6 flex flex-col justify-start items-start gap-5">
      <GameTitle playersCount={playersCount} />
      <GameInfo playersCount={playersCount} />
      <GameField playersCount={playersCount} />
    </main>
  );
}
