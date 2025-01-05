export default function H3({ label, color = 'text-secondaryFG' }: { label: string; color?: string }) {
  return <h3 className={`font-sans text-[16px] subpixel-antialiased font-normal tracking-[-0.02em] leading-tight ${color}`}>{label}</h3>
}
