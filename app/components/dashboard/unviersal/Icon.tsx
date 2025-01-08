import { cn } from "@/utils/utils";

type IconProps = {
  name: string;
  className?: string;
};

export default function Icon({ name, className }: IconProps) {
  const SvgComponent = require(`@/public/icons/${name}.svg`).default;

  return (
    <SvgComponent className={cn("w-full h-fit text-primaryFG", className)} aria-hidden="true" />
  );
}