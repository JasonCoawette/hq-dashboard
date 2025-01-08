import NumberFlow from '@number-flow/react'
import { cn } from '@/utils/utils'

export default function H1Number({ number, color = 'text-primaryFG', className }: { number: number; color?: string; className?: string }) {
  return (
    <NumberFlow
      value={number}
      format={{ useGrouping: true }}
      className={cn(`font-sans text-[56px] font-normal leading-none tracking-[-0.02em] self-stretch ${color}`, className)}
      transformTiming={{ duration: 400, easing: 'linear' }}
      spinTiming={{ duration: 400, easing: 'linear' }}
      opacityTiming={{ duration: 200, easing: 'ease-out' }}
    />
  )
}
