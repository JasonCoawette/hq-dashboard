import NumberFlow from '@number-flow/react';
import { cn } from "@/lib/utils";

export default function H2Number({ number, color = 'text-primaryFG', className }: { number: number; color?: string; className?: string }) {
  return (
    <NumberFlow
      value={number}
      format={{ currency: 'USD', useGrouping: true }}
      className={cn(
        `font-sans text-[40px] font-normal leading-normal tracking-[-0.02em] ${color}`,
        className
      )}
      transformTiming={{ duration: 400, easing: 'linear' }}
      spinTiming={{ duration: 400, easing: 'linear' }}
      opacityTiming={{ duration: 200, easing: 'ease-out' }}
    />
  );
}