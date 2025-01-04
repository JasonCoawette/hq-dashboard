import NumberFlow from '@number-flow/react'

export default function H1Number({ number, color = 'primaryFG' }: { number: number; color?: string }) {
  return (
    <NumberFlow
      value={number}
      format={{ useGrouping: true }}
      className={`text-[32px] sm:text-[48px] lg:text-[56px] 2xl:text-[72px] font-geist font-normal leading-none tracking-[-0.04em] self-stretch text-${color}`}
      transformTiming={{ duration: 400, easing: 'linear' }}
      spinTiming={{ duration: 400, easing: 'linear' }}
      opacityTiming={{ duration: 200, easing: 'ease-out' }}
    />
  )
}
