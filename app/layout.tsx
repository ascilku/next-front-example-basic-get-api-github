import Link from "next/link";
import Head from "./head";

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head />

      <body>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="cari">cari</Link>
          </li>
        </ul>
        {children}
      </body>
    </html>
  );
}
