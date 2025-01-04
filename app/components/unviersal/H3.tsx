export default function H3({ label, isSemibold = false, color = 'tertiaryFG' }: { label: string; isSemibold?: boolean; color?: string }) {
    return <h3 className={`text-[10px] lg:text-[12px] lg:text-[16px] font-geist ${isSemibold ? 'font-semibold' : 'font-medium'} leading-tight tracking-[-0.04em] text-${color}`}>{label}</h3>
  }