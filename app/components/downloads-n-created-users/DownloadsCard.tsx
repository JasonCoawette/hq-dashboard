import Card from "../unviersal/Card";
import Icon from "../unviersal/Icon";
import H1Number from "../unviersal/H1Number";
import ChangeTicker from "../unviersal/ChangeTicker";

export default function DownloadsCard() {
    return (
        <Card title="Downloads" icon={<Icon name="downloads" />} className="w-full">
          <div className="w-full flex flex-col items-start">
            <H1Number number={1000} color="primaryFG" />
            <ChangeTicker number={5321} timeframe="Today so far" isPositive={false} />
          </div>
        </Card>
    )
}