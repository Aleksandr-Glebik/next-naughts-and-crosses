'use client';

import { useCallback, useState } from 'react';

import GameInfo from '../GameInfo/GameInfo';
import GameCell from '../GameCell/GameCell';

import s from './GameField.module.scss';
import { SYMBOL_O, SYMBOL_X, INITIAL_CELLS } from '@/lib/constants/constants';
import { computeWinner } from '@/utils/func/computeWinner';

export default function GameField() {
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
