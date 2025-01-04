import Icon from './Icon';
import NumberFlow from '@number-flow/react'
type ChangeTickerProps = {
  number: number;
  timeframe: string;
  isPositive: boolean;
};

export default function ChangeTicker({ number, timeframe, isPositive }: ChangeTickerProps) {
  const color = isPositive ? 'text-green' : 'text-negativeRed';
  const iconName = isPositive ? 'up-arrow' : 'down-arrow';

  return (
    <div className="flex flex-row gap-x-[4px] lg:gap-x-[8px] items-start">
        <div className="flex flex-row items-center gap-x-[4px] items-start">
        <Icon name={iconName} />
        <NumberFlow
            value={number}
            format={{ style: 'currency', currency: 'USD', useGrouping: true }}
            className={`text-[10px] sm:text-[12px] lg:text-[16px] font-geist font-normal ${color}`}
            transformTiming={{ duration: 400, easing: 'linear' }}
            spinTiming={{ duration: 400, easing: 'linear' }}
            opacityTiming={{ duration: 200, easing: 'ease-out' }}
        />
        </div>
        <span className="text-secondaryFG">{timeframe}</span>
    </div>
  );
}