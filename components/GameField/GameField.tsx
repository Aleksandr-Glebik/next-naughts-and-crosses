'use client';

import GameInfo from '../GameInfo/GameInfo';
import GameCell from '../GameCell/GameCell';

import s from './GameField.module.scss';
import { useGameState } from '@/utils/hooks/useGameState';

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
    <div className={s.Field}>
      <GameInfo
        isDraw={isDraw}
        winSequence={winSequence}
        winnerSymbol={winnerSymbol}
        currentSymbol={currentSymbol}
      />
      <div className={s.GameCells}>
        {cells.map((el, index) => (
          <GameCell
            key={`${el}_${index}`}
            element={el}
            onClick={() => handleCellClick(index)}
            isWinner={winSequence?.includes(index)}
          />
        ))}
      </div>
      <button className={s.ResetBtn} onClick={handleResetClick}>
        Сбросить
      </button>
    </div>
  );
}
