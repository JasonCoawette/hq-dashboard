import React from 'react';

type SubItemProps = {
    timeStamp: string;
    eventType: string;
};

const eventDetails = [
    {
        type: 'LiveDownload',
        details: [
            { label: 'Product', value: '"Example Product"' },
            { label: 'Version', value: '1.0.0' },
        ]
    },
    {
        type: 'InAppPurchase',
        details: [
            { label: 'Item', value: '"Example Item"' },
            { label: 'Price', value: '$9.99' }
        ]
    },
    {
        type: 'NewRatingReview',
        details: [
            { label: 'Rating', value: '5 stars' },
            { label: 'Review', value: '"Great product!"' }
        ]
    }
];

const SubItems: React.FC<SubItemProps> = ({ eventType, timeStamp }) => {
    const formattedTimeStamp = '2024-06-17 14:43 MST'; // Static timestamp for now

    const event = eventDetails.find(e => e.type === eventType);

    return (
        <div className="w-full h-fit flex flex-col items-start justify-center gap-y-[4px]">
            <span className="text-tertiaryFG font-mono text-[14px] font-normal leading-none tracking-[-0.02em]">{formattedTimeStamp}</span>
            {event ? (
                event.details.map((detail, index) => (
                    <div key={index} className="flex">
                        <span className="text-tertiaryFG font-mono text-[14px] font-normal leading-none tracking-[-0.02em]">{detail.label}:</span>
                        <span className="text-secondaryFG font-mono text-[14px] font-normal leading-none tracking-[-0.02em] ml-[8px]">{detail.value}</span>
                    </div>
                ))
            ) : (
                <span className="text-secondaryFG font-mono text-[14px] font-normal leading-none tracking-[-0.02em]">No event type found</span>
            )}
        </div>
    );
};

export default SubItems;