"use client";

import { cn } from "@/utils/utils";
import NumberFlow from "@number-flow/react";
import { useCountUp } from "@/app/hooks/useCountUp";

type GlassStatCardProps = {
    label: string;
    value: number;
    className?: string;
    isCurrency?: boolean;
}

//TODO , fix the choppy width of cards
export default function GlassStatCard({ label, value, className, isCurrency = false }: GlassStatCardProps) {
    const currentValue = useCountUp(value);

    return (
        <div className={cn(`
            w-full sm:w-full md:w-fit h-fit         
            flex flex-col
            items-center
            p-[16px] sm:p-[16px] md:p-[24px] lg:p-[32px]            
            rounded-[8px] border-stroke
            bg-glassCardBG backdrop-blur-xl
            shadow-glassCardShadow
            transition-all duration-300 ease-in-out
        `, className)}>

            {/* Stat number */}
        
            <NumberFlow
                className="H1 w-fit md:w-55"
                value={currentValue}
                format={{
                    style: isCurrency ? 'currency' : 'decimal',
                    currency: 'USD',
                    notation: 'compact',
                    compactDisplay: 'short',
                    minimumFractionDigits: isCurrency ? 1 : 0,
                    maximumFractionDigits: isCurrency ? 1 : 0
                }}
                transformTiming={{ duration: 400, easing: 'linear' }}
                spinTiming={{ duration: 400, easing: 'linear' }}
                opacityTiming={{ duration: 200, easing: 'ease-out' }}
            />

            {/* Stat label */}
            <p className="Subtitle">
                {label}
            </p>
        </div>
    );
}