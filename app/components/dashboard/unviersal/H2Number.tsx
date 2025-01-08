import NumberFlow from '@number-flow/react';
import { cn } from "@/utils/utils";

type H2NumberProps = {
  number: number;
  className?: string;
  isCurrency?: boolean;
  isPositive?: boolean;
};

export default function H2Number({ number, className, isCurrency = false, isPositive = true }: H2NumberProps) {
  const sign = isPositive ? '+' : '-';

  return (
    <div className={cn(`font-sans text-[40px] font-normal leading-none tracking-[-0.02em] text-primaryFG`, className)}>
      {sign}
      <NumberFlow
        value={Math.abs(number)}
        format={{ style: isCurrency ? 'currency' : 'decimal', currency: 'USD', useGrouping: true }}
        transformTiming={{ duration: 400, easing: 'linear' }}
        spinTiming={{ duration: 400, easing: 'linear' }}
        opacityTiming={{ duration: 200, easing: 'ease-out' }}
      />
    </div>
  );
}