import Card from "../unviersal/Card";
import CellLegend from "./CellLegend";
import ContributionGrid from "./ContributionGrid";

export default function DailyActiveUsersCard() {
  return (
    <div className="w-full h-fit flex flex-col items-center gap-y-[8px]">
        <Card title="Daily Active Users" rightContent={<CellLegend />}>        
            <ContributionGrid />
        </Card>
    </div>
  );
}