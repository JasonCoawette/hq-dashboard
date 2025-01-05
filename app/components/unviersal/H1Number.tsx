import NumberFlow from '@number-flow/react'

export default function H1Number({ number, color = 'text-primaryFG' }: { number: number; color?: string }) {
  return (
    <NumberFlow
      value={number}
      format={{ useGrouping: true }}
      className={`font-sans text-[56px] font-normal leading-none tracking-[-0.02em] self-stretch ${color}`}
      transformTiming={{ duration: 400, easing: 'linear' }}
      spinTiming={{ duration: 400, easing: 'linear' }}
      opacityTiming={{ duration: 200, easing: 'ease-out' }}
    />
  )
}
