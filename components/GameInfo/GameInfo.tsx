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
  if (isDraw) {
    return (
      <h2 className={s.Title}>
        <span className={s.isDraw}>Ничья</span>
      </h2>
    );
  }

  return (
    <h2 className={s.Title}>
      {winSequence ? 'Победитель:' : 'Ход:'}
      <Symbol symbol={winnerSymbol ?? currentSymbol} />
    </h2>
  );
}
