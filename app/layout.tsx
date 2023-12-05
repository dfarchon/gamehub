import "./globals.css";
import localFont from "next/font/local";

const font = localFont({
  src: "../fonts/Geologica-Regular.ttf",
});

export const metadata = {
  title: "Autonomous Worlds Door",
  description: "Enter different autonomous worlds with the Autonomous World Door maintained by DF Archon",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${font.className} no-scrollbar`}>{children}</body>
    </html>
  );
}
