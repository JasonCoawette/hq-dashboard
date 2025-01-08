import Link from "next/link";
import { cn } from "@/utils/utils";
import H3Number from "../unviersal/H3Number";

type TrafficSourceItemProps = {
    title: string;
    url: string;
    topProduct: string;
    visits: number;
    conversionRate: number;
    className?: string;
}

export default function TrafficSourceItem({title, url, topProduct, visits, conversionRate, className }: TrafficSourceItemProps) {
    return (
        <div className={cn("w-fit flex flex-col justify-start items-center justify-between gap-y-[16px] p-[16px] self-stretch bg-secondaryBG rounded-[8px]", className)}> {/* change bg to tertiary for desktop */}
            {/* Link and top product */}
            <div className="w-full flex flex-col items-start gap-y-[4px] self-stretch">
                <Link href={url} target="_blank" rel="noopener noreferrer" className="font-mono text-[14px] text-blue font-bold leading-tight  tracking-[-0.02em] underline underline-offset-4 decoration-blue">{title}</Link>

                <div className="w-full flex flex-row items-center gap-x-[8px]">
                    <span className="font-mono text-[14px] font-regular leading-normal tracking-[-0.02em] text-tertiaryFG">Top product:</span>
                    <span className="font-mono text-[14px] font-medium leading-normal tracking-[-0.02em] text-primaryFG">{topProduct}</span> 
                </div>
            </div>

            {/* Metrics */}
            <div className="w-full h-fit flex flex-row items-center gap-x-[16px]">
                {/* Visits */}
                <div className="w-fit h-fit flex flex-row items-center gap-x-[4px]">
                    <div className="flex flex-col items-start pt-[2px]">
                        <H3Number number={visits} className="text-[14px] text-secondaryFG" />
                    </div>
                </div>

                {/* Conversion Rate */}
                <div className="w-fit h-fit flex flex-row items-center gap-x-[4px]">
                    <div className="flex flex-col items-start pt-[2px]">
                        <H3Number number={conversionRate} className="text-[14px] text-secondaryFG" />
                    </div>
                </div>
            </div>
        </div>
    );
}
