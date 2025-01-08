import Image from "next/image";
import Button from "./components/global/Button";
import DecryptingText from "./components/landing/EncryptedText";

export default function LandingPage() {
    return (
        <section className="
            w-full h-fit 
            flex flex-col 
            justify-center items-center
        ">

            {/* Container */}
            <div className="
                w-full h-fit sm:max-w-[360px] md:max-w-none mx-auto
                pt-[104px] px-[40px] pb-[40px]
                flex flex-col
                items-center
                justify-center
                gap-[32px] sm:gap-[32px] md:gap-[48px] lg:gap-[64px]
                z-10
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
                        w-full h-fit
                        flex flex-col
                        justify-center items-center
                        gap-[16px]
                    ">

                        {/* Encrypted Text Heading component */}
                        <DecryptingText text="[STRATUS VENTURES]" />
                        
                        {/* H1 */}
                        <h1 className="H1">
                            We build IOS apps
                        </h1>

                        {/* Subtitle */}
                        <p className="Subtitle">
                            Partner with our elite team that turns your idea into an App Store success story.
                        </p>

                    </div>

                    {/* Button */}
                    <Button label="Contact us" />

                </div>

                {/* Stats Cards */}

            </div>

            {/* Absolute Phone Graphic */}
            {/* Play around with this more to make it responsive properly */}
            <img 
                src="/images/phone.png" 
                alt="Phone" 
                className="
                    absolute 
                    top-[96px] sm:top-[96px] md:top-[80px] lg:top-[64px]
                    w-[360px] md:w-[524px] lg:w-[880px] min-w-[340px]
                    z-0
                " 
            />

        </section>
    ); 
}