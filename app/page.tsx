import DownloadsCard from "./components/downloads-n-created-users/DownloadsCard";
import CreatedUsersCard from "./components/downloads-n-created-users/CreatedUsersCard";
import TrafficSourceSection from "./components/traffic-sources/TrafficSourceSection";
import CashFlowCard from "./components/cash-flow/CashFlowCard";
import DailyActiveUsersCard from "./components/daily-active-users/DailyActiveUsersCard";

export default function Home() {
  return (
    <div className="w-full flex flex-col justify-start h-screen bg-primaryBG gap-y-[32px] p-[8px]">
      <DailyActiveUsersCard />
      <DownloadsCard />
      <CreatedUsersCard />
      <TrafficSourceSection />
      <CashFlowCard />
    </div>
  );
}
