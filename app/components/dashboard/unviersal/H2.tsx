import { cn } from "@/utils/utils";

export default function H2({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("font-sans text-[22px] subpixel-antialiased font-semibold tracking-[-0.02em] leading-none text-primaryFG", className)}>{children}</h2>;
}