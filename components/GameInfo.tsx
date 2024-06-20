import Symbol from './Symbol';

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
      <h2 className="text-3xl text-blue-600 flex justify-center items-center gap-4 ">
        <span className="font-bold">Ничья</span>
      </h2>
    );
  }

  return (
    <h2 className="text-3xl text-black-400 flex justify-center items-center gap-4">
      {winSequence ? 'Победитель:' : 'Ход:'}
      <Symbol symbol={winnerSymbol ?? currentSymbol} />
    </h2>
  );
}
