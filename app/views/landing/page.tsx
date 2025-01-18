import AnimationWrapper from "@/app/components/landing/AnimationWrapper";
import CTA from "@/app/components/landing/CTA";
import DecryptingText from "@/app/components/landing/DecryptingText";
import GlassStatCardGroup from "@/app/components/landing/GlassStatCardGroup";
import PhoneGraphic from "@/app/components/landing/PhoneGraphic";
import LandingLayout from "@/app/views/landing/layout";

export default function LandingPage() {
    return (
        <LandingLayout>
            <main className="
                relative
                w-full h-fit
                flex flex-col
                justify-center items-center
                px-[16px]
                overflow-hidden
            ">

                {/* Container */}
                <div className="
                    absolute
                    right-0 top-0 left-0 bottom-0
                    w-full h-full max-w-[340px] sm:max-w-[360px] md:max-w-none mx-auto
                    flex flex-col
                    items-center justify-start
                    px-[16px] pt-[116px] md:pt-[164px]
                    gap-[32px] sm:gap-[32px] md:gap-[48px] lg:gap-[64px]
                    z-20
                ">

                    {/* Hero text and CTA */}

                    <div className="
                        w-full h-fit md:max-w-[376px] lg:max-w-[512px] mx-auto
                        flex flex-col
                        items-center
                        justify-center
                        gap-[24px] sm:gap-[24px] md:gap-[32px]
                    ">


                        {/* Text wrapper */}
                        <div className="
                            w-full h-full
                            flex flex-col
                            justify-center items-center
                            gap-4
                        ">

                            {/* Encrypted Text Heading component */}
                            
                            <DecryptingText text="[STRATUS VENTURES]" />
        

                            <AnimationWrapper 
                                delay={0.4} 
                                animationType="blurIn"
                                className="w-full h-fit
                                flex flex-col
                                justify-center items-center
                                gap-2
                            ">
                            
                            {/* H1 */}

                                <h1 className="H1">We build iOS apps</h1>

                            {/* Subtitle */}
        
                                <p className="Subtitle">
                                    Partner with our elite team that turns your idea into an App Store success story.
                                </p>

                            </AnimationWrapper>


                        </div>

                            {/* Button */}
                            <AnimationWrapper 
                                delay={0.6} 
                                animationType="fadeInCenter"
                                className="w-full h-fit
                                flex flex-col
                                justify-center items-center
                            ">
                                <CTA link="https://cal.com/jason-coawette/stratus-ventures" label="Contact us" className="
                                    px-[72px] py-[12px] rounded-[8px] max-w-56	
                                    hover:bg-buttonBG
                                "/>
                            </AnimationWrapper>

                    </div>


                    {/* Stats Cards */}
                    <GlassStatCardGroup className="max-w-[264px] md:max-w-none" />

                </div>

                {/* Phone Graphic */}
                <div className="relative w-full h-full flex justify-center items-center">
                    <div className="absolute inset-0 md:bg-phoneGraphicGradient z-10"/>
                    <PhoneGraphic />
                </div>

            </main>
        </LandingLayout>
    ); 
}