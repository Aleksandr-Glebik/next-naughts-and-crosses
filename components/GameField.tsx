"use client";

import Container from "./Container";
import GameInfo from "./GameInfo";
import GameCell from "./GameCell";
import GameCells from "./GameCells";
import ResetButton from "./ResetButton";

import { useGameState } from "@/utils/hooks/useGameState";

export default function GameField() {
  const {
    isDraw,
    winSequence,
    winnerSymbol,
    currentSymbol,
    cells,
    handleCellClick,
    handleResetClick,
  } = useGameState();

  return (
    <Container>
      <GameInfo
        isDraw={isDraw}
        winSequence={winSequence}
        winnerSymbol={winnerSymbol}
        currentSymbol={currentSymbol}
      />
      <GameCells>
        {cells.map((el, index) => (
          <GameCell
            key={`${el}_${index}`}
            element={el}
            onClick={() => handleCellClick(index)}
            isWinner={winSequence?.includes(index)}
          />
        ))}
      </GameCells>
      <ResetButton onClick={handleResetClick} />
    </Container>
  );
}
