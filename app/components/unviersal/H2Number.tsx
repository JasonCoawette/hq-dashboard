import NumberFlow from '@number-flow/react';

export default function H2Number({ number, color = 'primaryFG' }: { number: number; color?: string }) {
  return (
    <NumberFlow
      value={number}
      format={{ useGrouping: true }}
      className={`text-[24px] sm:text-[32px] md:text-[48px] font-sans font-normal leading-none tracking-[-0.02em] self-stretch text-${color}`}
      transformTiming={{ duration: 400, easing: 'linear' }}
      spinTiming={{ duration: 400, easing: 'linear' }}
      opacityTiming={{ duration: 200, easing: 'ease-out' }}
    />
  );
}