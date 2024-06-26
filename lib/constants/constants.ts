export const SYMBOL_X = "X";
export const SYMBOL_O = "O";

export const INITIAL_CELLS: (string | null)[] = [
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
  null,
];

export enum GAME_SYMBOLS {
  ZERO = "ZERO",
  CROSS = "CROSS",
  TRIANGLE = "TRIANGLE",
  SQUARE = "SQUARE",
}

export const MOVE_ORDER: GAME_SYMBOLS[] = [
  GAME_SYMBOLS.CROSS,
  GAME_SYMBOLS.ZERO,
  GAME_SYMBOLS.TRIANGLE,
  GAME_SYMBOLS.SQUARE,
];
