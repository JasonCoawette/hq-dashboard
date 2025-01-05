import Icon from './Icon';
import H3 from './H3';
import H3Number from './H3Number';

type ChangeTickerProps = {
  number: number;
  timeframe: string;
  isPositive: boolean;
};

export default function ChangeTicker({ number, timeframe, isPositive }: ChangeTickerProps) {
  const color = isPositive ? 'text-green' : 'text-negativeRed';
  const iconName = isPositive ? 'up-arrow' : 'down-arrow';

  return (
    <div className="flex flex-row items-center gap-x-[6px] self-stretch">
        <div className="flex flex-row items-center gap-x-[2px]">
          <Icon name={iconName}/>
          <H3Number number={number} color={color}/>
        </div>
        <H3 className='text-secondaryFG'>{timeframe}</H3>
    </div>
  );
}
