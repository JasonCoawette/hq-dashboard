import { Geist } from "next/font/google";
import "./globals.css";

// Default URL for metadata
const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

// Metadata configuration
export const metadata = {
  metadataBase: new URL(defaultUrl),
  title: "Stratus HQ Dashboard",
  description: "All IOS products for Stratus Ventures",
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
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}