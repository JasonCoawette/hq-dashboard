'use client';

import Icon from "@/app/components/dashboard/unviersal/Icon";
import { cn } from "@/utils/utils";

type IconButtonProps = {
  title: string;
  iconName: string;
  onClick: () => void;
  className?: string;
};

export default function IconButton({ title, iconName, onClick, className }: IconButtonProps) {
    return (
        <button
            onClick={onClick}
            className={cn("w-fit h-fit flex-shrink-0 flex items-center justify-center transition-colors duration-200", className)}
            aria-label={title}
        >
            <Icon
                name={iconName}
                className="text-icon hover:text-primaryFG transition-colors duration-200"
            />
        </button>
    );
}