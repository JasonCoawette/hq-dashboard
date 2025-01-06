import H3 from "../unviersal/H3";
import Cell from "./Cell";

export default function CellLegend() {
  return (
    <div className="w-fit h-fit flex flex-row items-center gap-x-[8px]">
        <H3 className="text-secondaryFG">Less</H3>
            <div className="w-fit h-fit flex flex-row justify-center items-center gap-x-[3px]">
                <Cell level={0} />
                <Cell level={1} />
                <Cell level={2} />
                <Cell level={3} />
                <Cell level={4} />
            </div>
        <H3 className="text-secondaryFG">More</H3>
    </div>
  );
}