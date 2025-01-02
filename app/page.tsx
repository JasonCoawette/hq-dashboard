import Card from "./components/Card";
import Icon from "./components/Icon";

export default function Home() {
  return (
    <div className="flex flex-col justify-start h-screen bg-primaryBG gap-[12px] sm:gap-[24px] p-[12px] sm:p-[24px] ">
      <Card title="Downloads" icon={<Icon name="downloads" />}>
        <div></div>
      </Card>
    </div>
  );
}
