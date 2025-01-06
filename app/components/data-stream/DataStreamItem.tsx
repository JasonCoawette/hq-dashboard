import React from 'react';
import SubItems from './SubItems';

type DataStreamItemProps = {
    topProduct: string;
    event: keyof typeof eventConfigurations; // Ensure event is a valid key
    timeStamp: string;
    item: string;
};

const eventConfigurations = {
    LiveDownload: {
        color: 'text-blue',
        label: 'LiveDownload'
    },
    InAppPurchase: {
        color: 'text-green',
        label: 'InAppPurchase'
    },
    NewRatingReview: {
        color: 'text-pink',
        label: 'NewRatingReview'
    }
};

export default function DataStreamItem({ topProduct, event, timeStamp, item }: DataStreamItemProps) {
    const eventConfig = eventConfigurations[event] || { color: 'text-tertiaryFG', label: 'UnknownEvent' };

    return (
        <div className="w-full h-[104px] flex flex-row items-start justify-center self-stretch">
            {/* Thread */}
            <div className="w-fit h-full flex flex-col items-center justify-start gap-[0px]">
                {/* Pill */}
                <div className="w-[3px] h-[9px] rounded-[1px] bg-primaryFG" />
                {/* Line */}
                <div className="w-[1px] h-full bg-stroke" />
            </div>

            {/* Container */}
            <div className="w-full h-fit flex flex-col items-start justify-center gap-[4px] pr-[8px] pl-[16px]">
                {/* Event and top Product*/}
                <div className="w-full h-fit flex flex-row items-center justify-between gap-x-[16px]">
                    {/* Event */}
                    <h4 className={`${eventConfig.color} font-mono text-[14px] font-semibold tracking-[-0.02em]`}>
                        {eventConfig.label}
                    </h4>

                    {/* Top Product */}
                    <div className="w-fit h-fit flex flex-row items-center justify-center gap-x-[4px]">
                        <span className="text-tertiaryFG font-mono text-[14px] font-normal tracking-[-0.02em]">Product: </span>
                        <span className="text-primaryFG font-mono text-[14px] font-normal tracking-[-0.02em]">{topProduct}</span>
                    </div>
                </div>

                {/* Info */}
                <div className="w-full h-fit flex flex-col items-center justify-start gap-[2px]">
                    <SubItems eventType={event} timeStamp={timeStamp} />
                </div>
            </div>
        </div>
    );
}