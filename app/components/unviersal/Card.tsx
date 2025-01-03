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
        "flex flex-col justify-start items-center p-[12px] sm:p-[16px] lg:p-[24px] rounded-[4px] sm:rounded-[6px] lg:rounded-[8px] border border-stroke bg-gradient-to-b from-secondaryBG to-primaryBG",
        className
      )}
    >
        <div className="w-full flex flex-row justify-between items-center">
            <H2 label={title} />
            {icon}
        </div>
        {children}
    </div>
  );
}
