import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";
export const metadata = {
  title: "Get_reddit",
  description: "A Reddit clone built with Next.js and TypeScript.",
};

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  adjustFontFallback: true,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={cn('bg-white text-slate-900 antialiased light', poppins.className)}>
      <body className="min-h-screen pt-12 bg-slate-50 antialiased">
        <div className="container max-w-7xl mx-auto h-full pt-12">
        {children}</div>
        </body>
    </html>
  );
}
