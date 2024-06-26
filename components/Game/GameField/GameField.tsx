"use client";

import { useEffect } from "react";

import ControlPanel from "./ControlPanel/ControlPanel";
import GameGrid from "./GameGrid/GameGrid";

import { GAME_SYMBOLS } from "@/lib/constants/constants";
interface Props {
  cells: (GAME_SYMBOLS | null)[];
  currentMove: GAME_SYMBOLS;
  nextMove: GAME_SYMBOLS;
  handleCellClick: (index: number) => void;
}

export function GameField({
  cells,
  currentMove,
  nextMove,
  handleCellClick,
}: Props) {
  useEffect(() => {
    if (cells) {
      console.log("cells", cells);
    }
  });

  return (
    <div className="shadow-lg rounded-lg py-4 px-8 w-full max-w-[620px] bg-white flex flex-col justify-start items-center gap-3 mb-8">
      <ControlPanel currentMove={currentMove} nextMove={nextMove} />
      <GameGrid cells={cells} onClick={handleCellClick} />
    </div>
  );
}
