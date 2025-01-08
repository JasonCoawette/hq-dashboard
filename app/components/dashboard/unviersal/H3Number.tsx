import { cn } from "@/lib/utils";

type H3NumberProps = {
  number: number;
  color?: string;
  className?: string;
  isCurrency?: boolean;
};

export default function H3Number({ number, className, isCurrency = false }: H3NumberProps) {
  const formattedNumber = isCurrency
    ? new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(number)
    : new Intl.NumberFormat('en-US', { useGrouping: true }).format(number);

  return (
    <span className={cn("font-mono text-[16px] subpixel-antialiased font-normal leading-normal tracking-[-0.02em] leading-tight", className)}>
      {formattedNumber}
    </span>
  );
}