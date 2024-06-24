import { CrossIcon } from "@/components/Icons/CrossIcon";
import { ZeroIcon } from "@/components/Icons/ZeroIcon";
import UIButton from "@/components/UIKit/UIButton";

export default function ControlPanel() {
    return (
        <div className="w-full flex justify-between items-center">
            <div className="flex flex-col justify-start items-start">
                <div className="flex items-center gap-2 text-lg font-semibold"><strong>Ход:</strong> <CrossIcon className="w-5 h-5"/></div>
                <div className="flex items-center gap-2 text-sm text-slate-400 -mt-1">Следующий: <ZeroIcon className="w-3 h-3"/></div>
            </div>
            <div className="flex justify-end items-center gap-3">
                <UIButton size="md" variant="primary">Ничья</UIButton>
                <UIButton size="md" variant="outline">Сдаться</UIButton>
            </div>
        </div>
    )
}