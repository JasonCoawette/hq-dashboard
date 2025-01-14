import AnimationWrapper from "./components/landing/AnimationWrapper";
import CTA from "./components/landing/CTA";
import DecryptingText from "./components/landing/DecryptingText";
import GlassStatCardGroup from "./components/landing/GlassStatCardGroup";
import PhoneGraphic from "./components/landing/PhoneGraphic";

//TODO figure out how to make the page not scrollable
//TODO make the phone image responsive

export default function LandingPage() {
    return (
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
                        gap-[8px]
                    ">

                        {/* Encrypted Text Heading component */}
                        
                        <DecryptingText text="[STRATUS VENTURES]" />
    
                        
                        {/* H1 */}
                        <AnimationWrapper delay={0.4}>

                            <h1 className="H1">We build iOS apps</h1>

                        {/* Subtitle */}
    
                            <p className="Subtitle">
                                Partner with our elite team that turns your idea into an App Store success story.
                            </p>

                        </AnimationWrapper>

                    </div>

                    {/* Button */}

                    <CTA link="https://cal.com/jason-coawette/stratus-vzentures" label="Contact us" className="
                        px-[72px] py-[12px] rounded-[8px]
                        hover:bg-buttonBG
                    "/>

                </div>


                {/* Stats Cards */}
                <GlassStatCardGroup className="max-w-[264px] md:max-w-none" />

            </div>

            {/* Phone Graphic */}
            <div className="relative w-full h-full flex justify-center items-center">
                <div className="absolute inset-0 bg-phoneGraphicGradient z-10"></div>
                <PhoneGraphic />
            </div>

        </main>
    ); 
}