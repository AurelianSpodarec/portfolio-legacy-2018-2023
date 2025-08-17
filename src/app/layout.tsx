import type { Metadata } from "next";

import "./../styles/globals.css";

import WebHeader from "./(pages)/_components/Header";
import WebFooter from "./(pages)/_components/Footer";

export const metadata: Metadata = {
  title: "Next.js Dashboard with TailwindCSS",
  description: "Created with best practices in mind",
};

function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <WebHeader />
        {children}
        <WebFooter />
      </body>
    </html>
  );
}

export default RootLayout
