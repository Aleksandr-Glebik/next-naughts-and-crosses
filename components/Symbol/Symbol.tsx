import { clsx } from 'clsx';

import s from './Symbol.module.scss';
import { SYMBOL_O, SYMBOL_X } from '@/lib/constants/constants';
interface SymbolProps {
  symbol: string | null;
}

export default function Symbol({ symbol }: SymbolProps) {
  return (
    <div
      className={clsx(s.Symbol, {
        [s.Symbol__sX]: symbol === SYMBOL_X,
        [s.Symbol__sO]: symbol === SYMBOL_O,
      })}>
      {symbol ? symbol : null}
    </div>
  );
}
