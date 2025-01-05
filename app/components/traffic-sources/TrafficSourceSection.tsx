import H2 from "../unviersal/H2";
import TrafficSourceItem from "./TrafficSourceItem";

const trafficSources = [
    {
        title: 'App Store',
        url: 'https://apple.com/appstore',
        topProduct: 'Product A',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'Instagram',
        url: 'https://instagram.com',
        topProduct: 'Product B',
        visits: 800,
        conversionRate: 10,
    },
    {
        title: 'Facebook',
        url: 'https://facebook.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'Google',
        url: 'https://google.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'X.com',
        url: 'https://x.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'Pinterest',
        url: 'https://pinterest.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'TikTok',
        url: 'https://tiktok.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'Youtube',
        url: 'https://youtube.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'Reddit',
        url: 'https://reddit.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
    {
        title: 'LinkedIn',
        url: 'https://linkedin.com',
        topProduct: 'Product C',
        visits: 1200,
        conversionRate: 15,
    },
  ];

export default function TrafficSourceSection() {
    return (
        // Make this a desktop card when desktop
        <div className="w-full h-fit flex flex-col gap-y-[16px] px-[8px] self-stretch">
            <H2>Traffic Sources</H2>
            <div className="w-full h-fit flex flex-row overflow-x-auto whitespace-nowrap hide-scrollbar gap-x-[16px]">
                {trafficSources.map((source, index) => (
                <TrafficSourceItem
                    key={index} // Use a unique key for each item
                    title={source.title}
                    url={source.url}
                    topProduct={source.topProduct}
                    visits={source.visits}
                    conversionRate={source.conversionRate}
                    className={"inline-block"} // TODO: when desktop make this not inline-block 
                />
            ))}
        </div>
      </div>
    );
}
