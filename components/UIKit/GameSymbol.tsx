import { CrossIcon } from "../Icons/CrossIcon";
import { ZeroIcon } from "../Icons/ZeroIcon";
import { SquareIcon } from "../Icons/SquareIcon";
import { TriangleIcon } from "../Icons/TriangleIcon";

import { GAME_SYMBOLS } from "@/lib/constants/constants";

interface GameSymbolProps {
  symbol: GAME_SYMBOLS;
  className: string;
}

export default function GameSymbol({
  symbol,
  className,
}: GameSymbolProps): React.ReactNode | JSX.Element {
  const Icon = {
    [GAME_SYMBOLS.CROSS]: CrossIcon,
    [GAME_SYMBOLS.ZERO]: ZeroIcon,
    [GAME_SYMBOLS.TRIANGLE]: TriangleIcon,
    [GAME_SYMBOLS.SQUARE]: SquareIcon,
  }[symbol] ?? <CrossIcon />;

  return <Icon className={className} />;
}
