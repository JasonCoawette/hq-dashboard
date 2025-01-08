import MonthPair from "./MonthPair";

const monthPairs = [
  { name: "Jan-Feb", days: [31, 28] },
  { name: "Mar-Apr", days: [31, 30] },
  { name: "May-Jun", days: [31, 30] },
  { name: "Jul-Aug", days: [31, 31] },
  { name: "Sep-Oct", days: [30, 31] },
  { name: "Nov-Dec", days: [30, 31] }
];

export default function ContributionGrid() {
  return (
    <div className="flex flex-wrap justify-between items-start content-start gap-y-4 self-stretch">
        {monthPairs.map((pair, index) => (
        <MonthPair key={index} name={pair.name} days={pair.days} />
      ))}
    </div>
  );
}