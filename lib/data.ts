import { CrossIcon } from "@/components/Icons/CrossIcon";
import { ZeroIcon } from "@/components/Icons/ZeroIcon";
import { SquareIcon } from "@/components/Icons/SquareIcon";
import { TriangleIcon } from "@/components/Icons/TriangleIcon";

interface UserInfoProps {
    id: number;
    icon: React.ReactNode | JSX.Element;
    name: string;
    rating: number;
    avatar: string;
    time: string;
}

export const playerList: UserInfoProps[] = [
    {
        id: 1,
        icon: CrossIcon(),
        name: 'Glebikaa',
        rating: 1280,
        avatar: 'firstAvatar',
        time: '01:08'
    },
    {
        id: 2,
        icon: ZeroIcon(),
        name: 'Valentina',
        rating: 850,
        avatar: 'secondAvatar',
        time: '00:08'
    },
    {
        id: 3,
        icon: SquareIcon(),
        name: 'Lara',
        rating: 1400,
        avatar: 'thirdAvatar',
        time: '01:08'
    },
    {
        id: 4,
        icon: TriangleIcon(),
        name: 'Pavel',
        rating: 7600,
        avatar: 'fourthAvatar',
        time: '01:20'
    }
];