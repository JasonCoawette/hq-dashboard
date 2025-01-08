import Cell from "./Cell";

type MonthPairProps = {
  name: string;
  days: number[];
};

export default function MonthPair({ name, days }: MonthPairProps) {
  const generateRandomLevels = (days: number) => {
    return Array.from({ length: days }, () => Math.floor(Math.random() * 5));
  };

  const levels = days.flatMap(generateRandomLevels);

  return (
    <div className="flex flex-col items-center gap-y-[8px]">
      <div className="grid grid-rows-7 grid-flow-col gap-[3px]">
        {levels.map((level, index) => (
          <Cell key={index} level={level} />
        ))}
      </div>
      <span className="text-center text-tertiaryFG text-[16px] font-light tracking-[-0.02em]">{name}</span>
    </div>
  );
}