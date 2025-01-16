"use client";

import { AnimatePresence, motion } from "motion/react";

export default function PhoneGraphic() {
    return(
        <AnimatePresence>
            <motion.div 
                className="
                    relative
                    w-full h-fit md:h-[88vh] md:portrait:h-[72vh] lg:h-[100vh]
                    flex flex-col
                    justify-start items-center
                    px-[32px]
                    pointer-events-none
                    box-shadow-phoneGraphicShadow
                    z-0
                "
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{
                    type: 'spring',
                    stiffness: 100,
                    damping: 20,
                    mass: 1
                }}
            >
                <img 
                    src="/images/phone.png" 
                    alt="Phone" 
                    className="
                        w-full min-w-[360px] max-w-[400px] sm:max-w-[400px] md:max-w-[500px] lg:max-w-[600px]
                    "
                />

            </motion.div>
        </AnimatePresence>
    );
}