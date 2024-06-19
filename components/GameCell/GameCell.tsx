import clsx from 'clsx';

import Symbol from '../Symbol/Symbol';

import s from './GameCell.module.scss';

interface GameCellProps {
  element: string | null;
  onClick: () => void;
  isWinner: boolean | undefined;
}

export default function GameCell({ element, onClick, isWinner }: GameCellProps) {
  return (
    <button
      className={clsx(s.Button, {
        [s.Button__win]: isWinner,
      })}
      onClick={onClick}>
      <Symbol symbol={element} />
    </button>
  );
}
