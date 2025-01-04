import Card from "../unviersal/Card";
import Icon from "../unviersal/Icon";
import H1Number from "../unviersal/H1Number";
import ChangeTicker from "../unviersal/ChangeTicker";

export default function DownloadsCard() {
    return (
        <Card title="Created Users" icon={<Icon name="users" />} className="w-full">
          <div className="w-full flex flex-col items-start">
            <H1Number number={4000} color="primaryFG" />
            <ChangeTicker number={1234} timeframe="Since last year" isPositive={true} />
          </div>
        </Card>
    )
}