"use client";

import TextField from "@/app/components/auth/TextField";
import CTA from "@/app/components/landing/CTA";
import DecryptingText from "@/app/components/landing/DecryptingText";
import OTCField from "@/app/components/auth/OTCField";
import useAuthForm from "@/app/hooks/useAuthForm";
import AuthLayout from "./layout";
import AnimationWrapper from "@/app/components/landing/AnimationWrapper";

export default function AuthPage() {
    const {
        email,
        handleEmailChange,
        otcValues,
        handleOtcChange,
        error,
    } = useAuthForm();

    return (
            <div className="
                w-full h-fit max-w-sm lg:max-w-none md:mx-auto
                flex flex-col
                justify-center items-center
                gap-6 md:gap-8 
                p-6 md:p-6 lg:p-14
            ">
                {/* Tag and H1 */}
                <div className="
                    w-full h-fit
                    flex flex-col
                    justify-center items-center
                    gap-2 md:gap-4
                ">
                    <DecryptingText text="[ADMIN LOGIN]"/>

                    <h1 className="H1">Welcome back!</h1>

                </div>

                {/* Form */}

                <form className="
                    w-full h-fit
                    flex flex-col
                    justify-center items-center
                    gap-6 md:gap-8
                ">
                    {/* Field Component */}
                    <TextField placeholder="Email" value={email} onChange={handleEmailChange} error={error} />
                    
                    <OTCField values={otcValues} onChange={handleOtcChange} error={error} />

                    {/* Button */}
                    <CTA label="Login" className="
                        w-full h-fit
                        flex flex-col
                        justify-center items-center
                        px-[72px] py-[12px] rounded-[8px]
                        hover:bg-buttonBG
                    " onClick={() => {console.log("Login button Clicked")}}/>
                </form>

            </div>
    );
}