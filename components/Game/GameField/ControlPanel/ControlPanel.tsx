import UIButton from "@/components/UIKit/UIButton";
import GameSymbol from "@/components/UIKit/GameSymbol";

import { GAME_SYMBOLS } from "@/lib/constants/constants";

interface ControlPanelProps {
  currentMove: GAME_SYMBOLS;
  nextMove: GAME_SYMBOLS;
}

export default function ControlPanel({
  currentMove,
  nextMove,
}: ControlPanelProps) {
  return (
    <div className="w-full flex justify-between items-center">
      <div className="flex flex-col justify-start items-start">
        <div className="flex items-center gap-2 text-lg font-semibold">
          <strong>Ход:</strong>{" "}
          <GameSymbol symbol={currentMove} className="w-5 h-5" />
        </div>
        <div className="flex items-center gap-2 text-sm text-slate-400 -mt-1">
          Следующий: <GameSymbol symbol={nextMove} className="w-3 h-3" />
        </div>
      </div>
      <div className="flex justify-end items-center gap-3">
        <UIButton size="md" variant="primary">
          Ничья
        </UIButton>
        <UIButton size="md" variant="outline">
          Сдаться
        </UIButton>
      </div>
    </div>
  );
}
