import CellsField from "./CellsField/CellsField";
import ControlPanel from "./ControlPanel/ControlPanel";

export function GameField() {
  return (
    <div className="shadow-lg rounded-lg py-4 px-8 w-full max-w-[620px] bg-white flex flex-col justify-start items-center gap-3 mb-8">
      <ControlPanel />
      <CellsField />
    </div>
  );
}
