import clsx from "clsx";

import Symbol from "./Symbol";

interface GameCellProps {
  element: string | null;
  onClick: () => void;
  isWinner: boolean | undefined;
}

export default function GameCell({
  element,
  onClick,
  isWinner,
}: GameCellProps) {
  return (
    <button
      className={clsx(
        "bg-transparent w-[200px] h-[200px] border-[1px] border-solid border-black flex justify-center items-center",
        {
          ["bg-yellow-300"]: isWinner,
        },
      )}
      onClick={onClick}
    >
      <Symbol symbol={element} />
    </button>
  );
}
