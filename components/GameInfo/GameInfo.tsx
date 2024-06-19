import Symbol from '../Symbol/Symbol';

import s from './GameInfo.module.scss';

interface GameInfoProps {
  isDraw: boolean;
  winnerSymbol: string | null;
  currentSymbol: string | null;
  winSequence: number[] | undefined;
}

export default function GameInfo({
  isDraw,
  winSequence,
  winnerSymbol,
  currentSymbol,
}: GameInfoProps) {
  return (
    <h2 className={s.Title}>
      {isDraw ? <span className={s.isDraw}>Ничья</span> : winSequence ? 'Победитель:' : 'Ход:'}
      {!isDraw ? <Symbol symbol={winnerSymbol ?? currentSymbol} /> : null}
    </h2>
  );
}
