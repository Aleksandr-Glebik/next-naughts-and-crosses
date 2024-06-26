"use client";

import { useState } from "react";

import { GameTitle, GameInfo, GameField } from "@/components/Game";

import { useOnlineGameState } from "@/utils/hooks/useOnlineGameState";

export default function Home() {
  const [playersCount] = useState<number>(4);
  const { cells, currentMove, nextMove, handleCellClick } =
    useOnlineGameState(playersCount);

  return (
    <main className="max-w-[620px] mx-auto pt-6 flex flex-col justify-start items-start gap-5">
      <GameTitle playersCount={playersCount} />
      <GameInfo playersCount={playersCount} currentMove={currentMove} />
      <GameField
        cells={cells}
        currentMove={currentMove}
        nextMove={nextMove}
        handleCellClick={handleCellClick}
      />
    </main>
  );
}
