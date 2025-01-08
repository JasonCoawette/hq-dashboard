import ActiveSessionsCard from "@/app/components/dashboard/active-sessions/ActiveSessionsCard";
import DailyActiveUsersCard from "@/app/components/dashboard/daily-active-users/DailyActiveUsersCard";
import DownloadsCard from "@/app/components/dashboard/downloads-n-created-users/DownloadsCard";
import CreatedUsersCard from "@/app/components/dashboard/downloads-n-created-users/CreatedUsersCard";
import TrafficSourceSection from "@/app/components/dashboard/traffic-sources/TrafficSourceSection";
import CashFlowCard from "@/app/components/dashboard/cash-flow/CashFlowCard";
import DataStreamCard from "@/app/components/dashboard/data-stream/DataStreamCard";

export default function Dashboard() {
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
