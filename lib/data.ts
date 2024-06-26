import { GAME_SYMBOLS } from "./constants/constants";
interface UserInfoProps {
  id: number;
  symbol: GAME_SYMBOLS;
  name: string;
  rating: number;
  avatar: string;
}

export const playerList: UserInfoProps[] = [
  {
    id: 1,
    symbol: GAME_SYMBOLS.CROSS,
    name: "Glebikaa",
    rating: 1280,
    avatar: "firstAvatar"
  },
  {
    id: 2,
    symbol: GAME_SYMBOLS.ZERO,
    name: "Valentina Kostromskaia",
    rating: 850,
    avatar: "secondAvatar"
  },
  {
    id: 3,
    symbol: GAME_SYMBOLS.TRIANGLE,
    name: "Lara",
    rating: 1400,
    avatar: "thirdAvatar"
  },
  {
    id: 4,
    symbol: GAME_SYMBOLS.SQUARE,
    name: "Pavel",
    rating: 7600,
    avatar: "fourthAvatar"
  }
];
