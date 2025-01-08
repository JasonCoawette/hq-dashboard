import { cn } from "@/utils/utils";

export default function H3({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h3 className={cn(`font-sans text-[16px] subpixel-antialiased font-normal tracking-[-0.02em] leading-tight`, className)}>{children}</h3>
}
