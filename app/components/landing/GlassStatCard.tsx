import { cn } from "@/utils/utils";
import NumberFlow from "@number-flow/react";

type GlassStatCardProps = {
    label: string;
    value: number;
    className?: string;
    isCurrency?: boolean;
}

export default function GlassStatCard({ label, value, className, isCurrency = false }: GlassStatCardProps) {
    return (
        <div className={cn(`
            w-full sm:w-full md:w-fit h-fit         
            flex flex-col
            items-center
            p-[16px] sm:p-[16px] md:p-[24px] lg:p-[32px]            
            rounded-[8px] border-stroke
            bg-glassCardBG
            shadow-glassCardShadow backdrop-blur-[32px]
        `, className)}>

            {/* Stat number */}
            <NumberFlow
                className="H1 w-fit"
                value={value}
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