import ActiveSessionsCard from "./components/active-sessions/ActiveSessionsCard";
import DailyActiveUsersCard from "./components/daily-active-users/DailyActiveUsersCard";
import DownloadsCard from "./components/downloads-n-created-users/DownloadsCard";
import CreatedUsersCard from "./components/downloads-n-created-users/CreatedUsersCard";
import TrafficSourceSection from "./components/traffic-sources/TrafficSourceSection";
import CashFlowCard from "./components/cash-flow/CashFlowCard";
import DataStreamCard from "./components/data-stream/DataStreamCard";

export default function Home() {
  return (
    <div className="w-full h-fit flex flex-col justify-start gap-y-[32px]">
      <ActiveSessionsCard />
      <DailyActiveUsersCard />
      <DownloadsCard />
      <CreatedUsersCard />
      <TrafficSourceSection />
      <CashFlowCard />
      <DataStreamCard />
    </div>
  );
}
