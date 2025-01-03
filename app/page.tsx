import Card from "./components/unviersal/Card";
import H1Number from "./components/unviersal/H1Number";
import Icon from "./components/unviersal/Icon";

export default function HomeClient() {
  return (
    <div className="flex flex-col justify-start h-screen bg-primaryBG gap-[12px] sm:gap-[16px] p-[12px] sm:p-[16px]">
      <Card title="Downloads" icon={<Icon name="downloads" />} className="gap-[6px] lg:gap-[8px]">
        <H1Number number={1000} color="primaryFG" />
      </Card>
    </div>
  );
}