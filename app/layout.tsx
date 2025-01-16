import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./styles/globals.css";



const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";


  const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stratus Ventures",
  description: "We build IOS apps that print money",
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" className={`
        ${GeistSans.className}
        bg-primaryBG
      `}>
          <head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
          </head>
          <body className={`
            w-full h-fit
            flex flex-col 
            justify-between items-center 
            ${GeistSans.variable} ${GeistMono.variable}
            bg-backgroundGradient
            overscroll-none
            scrollbar-none
          `}>
            {children}
          </body>
      </html> 
  );
}