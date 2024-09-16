import type { Metadata } from "next";
import "../style/index.scss";

export const metadata: Metadata = {
  title: "Josh Post",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
