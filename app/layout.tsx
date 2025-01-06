import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import "./globals.css";

// Default URL for metadata
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Metadata configuration
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stratus HQ Dashboard",
  description: "Dashboard for all IOS products for Stratus Ventures",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={`flex flex-col justify-start items-center ${GeistSans.variable} ${GeistMono.variable} bg-primaryBG py-[32px] gap-y-[24px] px-[8px]`}>
        {children}
        <footer className="w-full h-fit justify-start items-center px-[8px]">
          <span className="text-tertiaryFG text-start text-[16px] font-light tracking-[-0.02em] self-stretch">© 2024 Stratus Ventures. All rights Reserved</span>
        </footer>
      </body>
    </html>
  );
}