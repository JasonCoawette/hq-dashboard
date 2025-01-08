import ChangeTicker from "../unviersal/ChangeTicker";
import H1Number from "../unviersal/H1Number";
import H2 from "../unviersal/H2";
import Globe from "./Globe";

type ActiveSessionsCardProps = {
    icon?: React.ReactNode;
}

export default function ActiveSessionsCard({icon}: ActiveSessionsCardProps) {
    return (
        <div className="w-full h-[500px] flex flex-col items-start gap-y-[16px] self-stretch">
            {/* Info */}
            <div className="w-full h-fit flex flex-col items-start justify-center">
                    <H2>Active Sessions</H2>
                    {icon}
                    <div className="w-full h-fit flex flex-col items-start self-stretch">   
                        <H1Number number={1000} className="text-primaryFG" />
                    <ChangeTicker number={1000} timeframe="Today so far" isPositive={true} />
                </div>
            </div>

            {/* Globe  */}
            <div className="w-full flex-grow flex items-start justify-end self-stretch rounded-[8px] bg-secondaryBG p-[4px]">
                <Globe />
            </div>
        </div>
    );
}