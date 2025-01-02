import { cn } from "@/lib/utils";
import { ReactNode } from "react";

type CardProps = {
  title: string;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
};

export default function Card({ title, icon, className, children }: CardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col gap-y-[12px] sm:gap-y-[16px] rounded-[8px] border-stroke bg-secondaryBG text-primaryFG shadow-sm p-[12px] sm:p-[24px]",
        className
      )}
    >
        <div className="flex flex-row justify-between items-center">
            <h1 className="text-[16px] sm:text-[24px] font-geist font-medium tracking-[-0.02em] leading-none">{title}</h1>
            {icon}
        </div>
        {children}
    </div>
  );
}
