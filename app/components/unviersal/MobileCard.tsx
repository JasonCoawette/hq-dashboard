import { cn } from "@/lib/utils";
import { ReactNode } from "react";
import H2 from "./H2";


type CardProps = {
  title: string;
  className?: string;
  children: ReactNode;
  rightContent?: ReactNode;
};

export default function Card({ title, className, children, rightContent }: CardProps) {
  return (
    <div 
      className={cn(
        "flex flex-col justify-center items-center gap-[16px] px-[8px] self-stretch",
        className
      )}
    >
        <div className="w-full h-fit flex flex-row justify-between items-center">
            <H2 className="w-full">{title}</H2>
            {rightContent}
        </div>
        <div className="flex flex-col justify-center items-center self-stretch p-[16px] rounded-[8px] bg-secondaryBG">
          {children}        
        </div>
    </div>
  );
}
