import { GAME_SYMBOLS, MOVE_ORDER } from "@/lib/constants/constants";

export function getNextMove(currentMove: GAME_SYMBOLS) {
  const nextMoveIndex = MOVE_ORDER.indexOf(currentMove) + 1;
  return MOVE_ORDER[nextMoveIndex] ?? MOVE_ORDER[0];
}
