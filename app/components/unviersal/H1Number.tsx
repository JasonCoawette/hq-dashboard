import NumberFlow from '@number-flow/react'

export default function H1Number({ number, color = 'primaryFG' }: { number: number; color?: string }) {
  return (
    <div
      className={`text-[32px] sm:text-[48px] lg:text-[56px] 2xl:text-[72px] font-geist font-normal leading-none tracking-[-0.04em] self-stretch text-${color}`}
    >
      <NumberFlow
        value={number}
        format={{ useGrouping: true }}
        className="inline-block font-tabular-nums"
        transformTiming={{ duration: 700, easing: 'linear' }}
        spinTiming={{ duration: 700, easing: 'linear' }}
        opacityTiming={{ duration: 350, easing: 'ease-out' }}
      />
    </div>
  );
}