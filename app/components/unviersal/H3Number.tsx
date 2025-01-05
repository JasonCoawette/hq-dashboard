export default function H3Number({ number, color }: { number: number; color?: string }) {
  return <h3 className={`font-sans text-[16px] subpixel-antialiased font-medium tracking-[0.02em] leading-tight ${color}`}>{number}</h3>;
}
