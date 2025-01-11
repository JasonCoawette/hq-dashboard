import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./styles/globals.css";


import Footer from './components/global/Footer';
import NavBar from './components/global/NavBar';


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
      <html lang="en" className={GeistSans.className}>
          <head>
            <title>{metadata.title}</title>
            <link rel="icon" href="/favicon.ico" />
            <meta name="description" content={metadata.description} />
            <meta name="viewport" content="width=device-width, height=device-height, initial-scale=1.0" />
          </head>
          <body className={`
            w-full h-[100vh]
            flex flex-col 
            justify-between items-center // Might have to change this between in the future
            bg-backgroundGradient
            ${GeistSans.variable} ${GeistMono.variable}
          `}>
            <NavBar />
            {children}
            <Footer />
          </body>
      </html>
  );
}