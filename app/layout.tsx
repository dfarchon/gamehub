import "./globals.css";
import localFont from "next/font/local";
import { Analytics } from '@vercel/analytics/react';


const font = localFont({
  src: "../fonts/Geologica-Regular.ttf",
});

export const metadata = {
  title: "Autonomous Worlds Door",
  description: "Enter Autonomous Worlds through Autonomous Worlds Door. Maintained by DF Archon",
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
