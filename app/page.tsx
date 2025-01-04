import DownloadsCard from "./components/downloads-n-created-users/DownloadsCard";
import CreatedUsersCard from "./components/downloads-n-created-users/CreatedUsersCard";
import H2Number from "./components/unviersal/H2Number";
import NumberTest from '../tests/NumberTest';


export default function HomeClient() {
  return (
    <div className="w-full flex flex-col justify-start h-screen bg-primaryBG gap-[12px] sm:gap-[16px] p-[12px] sm:p-[16px]">
      <div className="w-full flex flex-row gap-x-[64px] items-center">
        <DownloadsCard />
        <CreatedUsersCard />
      </div>
    </div>
  );
}
