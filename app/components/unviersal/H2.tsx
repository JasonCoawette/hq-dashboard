import { cn } from "@/lib/utils";

export default function H2({ label, className }: { label: string; className?: string }) {
  return <h2 className={cn("font-sans text-[22px] subpixel-antialiased font-semibold tracking-[-0.02em] leading-none text-primaryFG", className)}>{label}</h2>;
}
