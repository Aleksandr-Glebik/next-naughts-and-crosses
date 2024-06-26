import GameCell from "./GameCell";
import GameSymbol from "@/components/UIKit/GameSymbol";

import { GAME_SYMBOLS } from "@/lib/constants/constants";

interface GameGridProps {
  cells: any;
  onClick: (index: number) => void;
}

export default function GameGrid({ cells, onClick }: GameGridProps) {
  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
      {cells.map((symbol: GAME_SYMBOLS, i: number) => (
        <GameCell key={i} onClick={() => onClick(i)}>
          {symbol && <GameSymbol symbol={symbol} className="w-5 h-5" />}
        </GameCell>
      ))}
    </div>
  );
}
