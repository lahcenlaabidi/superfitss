import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SuperFitss — COD Store",
  description: "Shop quality products with cash on delivery across Morocco.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
