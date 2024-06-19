import { clsx } from 'clsx';

import s from './Symbol.module.scss';
import { SYMBOL_O, SYMBOL_X } from '@/lib/constants/constants';

interface SymbolProps {
  symbol: string | null;
  isField: boolean;
}

export default function Symbol({ symbol, isField }: SymbolProps) {
  return (
    <div
      className={clsx({
        [s.Symbol]: isField,
        [s.Symbol__sX]: symbol === SYMBOL_X,
        [s.Symbol__sO]: symbol === SYMBOL_O,
      })}>
      {symbol ? symbol : null}
    </div>
  );
}
