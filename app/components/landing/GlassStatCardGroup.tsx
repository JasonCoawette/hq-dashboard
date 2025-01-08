import GlassStatCard from "./GlassStatCard";

export default function GlassStatCardGroup() {
    return (
        <div className="
            w-full sm:w-full md:w-fit h-fit
            flex flex-col sm:flex-col md:flex-row
            items-center justify-center 
            gap-[16px] sm:gap-[16px] md:gap-[24px] lg:gap-[32px]
            md:flex-row
        ">

            {/* Set Cards */}
            <GlassStatCard label="Active users" value={0} isCurrency={false}/>
            <GlassStatCard label="Annual revenue" value={0} isCurrency={true}/>
            <GlassStatCard label="Total downloads" value={0} isCurrency={false}/>
            
        </div>
    );
}