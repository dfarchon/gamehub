import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';

const font = localFont({
  src: "../fonts/Geologica-Regular.ttf",
});

export const metadata = {
  title: "GameHub",
  description: "Access to the latest onchain games website with one click.",
  keywords: ["onchain games", "blockchain games", "web3 games", "GameHub", "DFArchon"],
  authors: [{ name: "DFArchon", url: "https://twitter.com/dfarchon" }],
  creator: "DFArchon",
  publisher: "DFArchon",
  metadataBase: new URL("https://gamehub.dfmud.xyz"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "GameHub - Onchain Games Portal",
    description: "Access to the latest onchain games website with one click. Discover Dark Forest, SkyStrife, and more.",
    url: "https://gamehub.dfmud.xyz",
    siteName: "GameHub",
    images: [
      {
        url: "/images/gamehub.png",
        width: 800,
        height: 600,
        alt: "GameHub - Onchain Games Portal",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "GameHub - Onchain Games Portal",
    description: "Access to the latest onchain games website with one click.",
    creator: "@dfarchon",
    images: ["/images/gamehub.png"],
  },
  viewport: "width=device-width, initial-scale=1.0",
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} no-scrollbar`}>{children}
        <Analytics />
      </body>
    </html>
  );
}
