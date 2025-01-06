import Card from "../unviersal/Card";
import LiveBlinker from "./LiveBlinker";
import DataStream from "./DataStream";


export default function DataStreamCard() {
    return (
        <div className="w-full h-fit flex flex-col items-start gap-y-[16px] self-stretch">
            <Card title="Data Stream" rightContent={<LiveBlinker />}> 
                <DataStream />
            </Card>
        </div>
    );
}