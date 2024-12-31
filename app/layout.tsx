import { Geist } from "next/font/google";
import "./globals.css";

// Default URL for metadata
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Metadata configuration
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "HQ Dashboard",
  description: "My global dashboard for all my projects",
};

// Font configurations
const geistSans = Geist({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={geistSans.className}>
      <head>
        <meta name="title" content={metadata.title} />
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}