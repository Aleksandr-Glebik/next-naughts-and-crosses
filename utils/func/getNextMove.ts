import { GAME_SYMBOLS, MOVE_ORDER } from "@/lib/constants/constants";

export function getNextMove(currentMove: GAME_SYMBOLS, playersCount: number) {
  const slicedMoveOrder = MOVE_ORDER.slice(0, playersCount);
  const nextMoveIndex = slicedMoveOrder.indexOf(currentMove) + 1;
  return slicedMoveOrder[nextMoveIndex] ?? slicedMoveOrder[0];
}
