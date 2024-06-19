'use client';

import { useCallback, useState } from 'react';
import { clsx } from 'clsx';

import Symbol from '../Symbol/Symbol';

import s from './GameField.module.scss';
import { SYMBOL_O, SYMBOL_X, INITIAL_CELLS } from '@/lib/constants/constants';
import { computeWinner } from '@/utils/func/computeWinner';

export default function GameField() {
  const [currentSymbol, setCurrentSymbol] = useState<string | null>(SYMBOL_O);
  const [cells, setCells] = useState(INITIAL_CELLS);
  const [winSequence, setWinSequence] = useState<number[] | undefined>();

  const handleCellClick = (ind: number) => {
    if (cells[ind] || winSequence) {
      return;
    }

    const copyCells = cells.slice();
    copyCells[ind] = currentSymbol;

    const winner = computeWinner(copyCells);
    console.log('winner', winner);

    setCells(copyCells);
    setCurrentSymbol(currentSymbol === SYMBOL_X ? SYMBOL_O : SYMBOL_X);
    setWinSequence(winner);
  };

  const winnerSymbol = winSequence ? cells[winSequence?.[0]] : currentSymbol;

  const resetGame = useCallback(() => {
    setCells(INITIAL_CELLS)
    setWinSequence(undefined);
  }, [])

  return (
    <div className={s.Field}>
      <h2 className={s.Field__title}>
        {winSequence ? 'Победитель:' : 'Ход:'} <Symbol symbol={winnerSymbol ?? currentSymbol} />
      </h2>
      <div className={s.Field__game}>
        {cells.map((el, index) => {
          const isWinner = winSequence?.includes(index);
          return (
            <button
              className={clsx(s.Button, {
                [s.Button__win]: isWinner,
              })}
              key={`${el}_${index}`}
              onClick={() => handleCellClick(index)}>
              <Symbol symbol={el} />
            </button>
          );
        })}
      </div>
      <button className={s.ResetBtn} onClick={resetGame}>Сбросить</button>
    </div>
  );
}
