import MobileCard from "../unviersal/MobileCard";
import CellLegend from "./CellLegend";
import ContributionGrid from "./ContributionGrid";

export default function DailyActiveUsersCard() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-y-[8px]">
        <MobileCard title="Daily Active Users" rightContent={<CellLegend />}>        
            <ContributionGrid />
        </MobileCard>
    </div>
  );
}