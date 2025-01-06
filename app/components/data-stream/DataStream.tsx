import DataStreamItem from "./DataStreamItem";

export default function DataStream() {
    return (
        <div className="relative w-full h-fit overflow-y-auto flex flex-col items-center justify-start self-stretch">
            {/* Top Gradient */}
            <div
                className="absolute top-0 left-0 right-0 h-[64px] pointer-events-none z-[1px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(22, 22, 22, 1) 0%, rgba(22, 22, 22, 0) 100%)'
                }}
            />

            {/* Data Stream Items */}
            <div className="w-full h-[calc(7*104px)] overflow-y-auto hide-scrollbar">
                <DataStreamItem event="LiveDownload" topProduct="Top Product A" timeStamp="2024-06-17T14:43:00Z" item="Item A" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product B" timeStamp="2024-06-17T15:00:00Z" item="Item B" />
                <DataStreamItem event="NewRatingReview" topProduct="Top Product C" timeStamp="2024-06-17T16:30:00Z" item="Item C" />
                <DataStreamItem event="LiveDownload" topProduct="Top Product D" timeStamp="2024-06-17T17:00:00Z" item="Item D" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product E" timeStamp="2024-06-17T18:00:00Z" item="Item E" />
                <DataStreamItem event="NewRatingReview" topProduct="Top Product F" timeStamp="2024-06-17T19:00:00Z" item="Item F" />
                <DataStreamItem event="LiveDownload" topProduct="Top Product G" timeStamp="2024-06-17T20:00:00Z" item="Item G" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
                <DataStreamItem event="InAppPurchase" topProduct="Top Product H" timeStamp="2024-06-17T21:00:00Z" item="Item H" />
            </div>

            {/* Bottom Gradient */}
            <div
                className="absolute bottom-0 left-0 right-0 h-[64px] pointer-events-none z-[1px]"
                style={{
                    background: 'linear-gradient(180deg, rgba(22, 22, 22, 0) 0%, rgba(22, 22, 22, 1) 100%)'
                }}
            />
        </div>
    );
}