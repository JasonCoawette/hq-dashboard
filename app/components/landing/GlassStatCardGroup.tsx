import { cn } from "@/utils/utils";
import GlassStatCard from "./GlassStatCard";
import AnimationWrapper from "./AnimationWrapper";

type GlassStatCardGroupProps = {
    className?: string
}

//TODO figure out how to make the numbers count up to where they are on page load.
//Connect to the backend to get the actual numbers

export default function GlassStatCardGroup({ className }: GlassStatCardGroupProps) {
    return (
        <AnimationWrapper 
            delay={0.6} 
            animationType="blurIn"
            className={cn(`
            w-full md:w-fit h-fit
            flex flex-col sm:flex-col md:flex-row
            items-center justify-center 
            gap-[16px] sm:gap-[16px] md:gap-[24px] lg:gap-[32px]
            md:flex-row
        `, className)}>

            {/* Set Cards */}

                <GlassStatCard label="Active users" value={999000000} isCurrency={false}/>
                <GlassStatCard label="Annual revenue" value={999000000} isCurrency={true}/>
                <GlassStatCard label="Total downloads" value={999000000} isCurrency={false}/>

        </AnimationWrapper>
    );
}