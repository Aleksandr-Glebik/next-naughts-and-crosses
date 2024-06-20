import { clsx } from "clsx";

import { SYMBOL_O, SYMBOL_X } from "@/lib/constants/constants";

interface SymbolProps {
  symbol: string | null;
}

export default function Symbol({ symbol }: SymbolProps) {
  return (
    <div
      className={clsx("text-4xl", {
        ["text-red-600"]: symbol === SYMBOL_X,
        ["text-green-600"]: symbol === SYMBOL_O,
      })}
    >
      {symbol ? symbol : null}
    </div>
  );
}
