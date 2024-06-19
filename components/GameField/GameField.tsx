'use client';

import { useState } from 'react';

import Symbol from '../Symbol/Symbol';

import s from './GameField.module.scss';
import { SYMBOL_O, SYMBOL_X } from '@/lib/constants/constants';

export default function GameField() {
  const [currentSymbol, setCurrentSymbol] = useState<string | null>(SYMBOL_O);

  const cells = [null, SYMBOL_O, SYMBOL_X, null, SYMBOL_X, SYMBOL_O, null, null, SYMBOL_X];

  return (
    <div className={s.Field}>
      <h2 className={s.Field__title}>
        Ход: <Symbol symbol={currentSymbol} isField={false} />
      </h2>
      <div className={s.Field__game}>
        {cells.map((el, index) => (
          <Symbol key={`${el}_${index}`} symbol={el} isField={true} />
        ))}
      </div>
    </div>
  );
}
