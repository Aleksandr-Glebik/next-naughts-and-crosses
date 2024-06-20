import { useState, useCallback } from "react";

import { INITIAL_CELLS, SYMBOL_O, SYMBOL_X } from "@/lib/constants/constants";
import { computeWinner } from "../func/computeWinner";

export const useGameState = () => {
  const [currentSymbol, setCurrentSymbol] = useState<string | null>(SYMBOL_O);
  const [cells, setCells] = useState(INITIAL_CELLS);
  const [winSequence, setWinSequence] = useState<number[] | undefined>();

  const winnerSymbol = winSequence ? cells[winSequence?.[0]] : currentSymbol;
  const isDraw = !winSequence && cells.filter((value) => value).length === 9;

  const handleCellClick = (ind: number) => {
    if (cells[ind] || winSequence) {
      return;
    }

    const copyCells = cells.slice();
    copyCells[ind] = currentSymbol;

    const winner = computeWinner(copyCells);

    setCells(copyCells);
    setCurrentSymbol(currentSymbol === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinSequence(winner);
  };

  const handleResetClick = useCallback(() => {
    setCells(INITIAL_CELLS);
    setWinSequence(undefined);
    setCurrentSymbol(SYMBOL_O);
  }, []);

  return {
    currentSymbol,
    cells,
    winSequence,
    winnerSymbol,
    isDraw,
    handleCellClick,
    handleResetClick,
  };
};
