import { CrossIcon } from "@/components/Icons/CrossIcon";

export default function CellsField() {
  const cells = new Array(19 * 19).fill(null);

  return (
    <div className="grid grid-cols-[repeat(19,_30px)] grid-rows-[repeat(19,_30px)] pl-px pt-px">
      {cells.map((_, i) => (
        <button key={i} className="border border-slate-200 -ml-px -mt-px flex justify-center items-center">
        </button>
      ))}
    </div>
  );
}
