import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import H2 from "./H2";


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
        "flex flex-col justify-center items-center gap-[16px] px-[8px] self-stretch",
        className
      )}
    >
        <H2 className="w-full">{title}</H2>
        <div className="flex flex-col justify-center items-center self-stretch px-[16px] pt-[8px] pb-[16px] rounded-[8px] bg-secondaryBG">
          {children}        
        </div>
    </div>
  );
}
