import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';


const font = localFont({
  src: "../fonts/Geologica-Regular.ttf",
});

export const metadata = {
  title: "GameHub",
  description: "Access to the latest onchain games website with one click.",
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
