import { useState } from "react";

import { getNextMove } from "../func/getNextMove";
import { GAME_SYMBOLS } from "@/lib/constants/constants";

interface GameStateProps {
  cells: (GAME_SYMBOLS | null)[];
  currentMove: GAME_SYMBOLS;
}

export const useOnlineGameState = () => {
  const [{ cells, currentMove }, setGameState] = useState<GameStateProps>(
    () => ({
      cells: new Array(19 * 19).fill(null),
      currentMove: GAME_SYMBOLS.CROSS,
    }),
  );

  const nextMove: GAME_SYMBOLS = getNextMove(currentMove);

  const handleCellClick = (index: number) => {
    setGameState((lastGameState) => {
      if (lastGameState.cells[index]) {
        return lastGameState;
      }

      return {
        ...lastGameState,
        currentMove: getNextMove(lastGameState.currentMove),
        cells: lastGameState.cells.map((cell, i) =>
          i === index ? lastGameState.currentMove : cell,
        ),
      };
    });
  };

  return {
    cells,
    currentMove,
    nextMove,
    handleCellClick,
  };
};
