import type { Metadata } from "next";
import "./globals.css";
import { openSans } from "@/utils/fonts";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/utils/theme-provider";

export const metadata: Metadata = {
  title: "Wordle Clone",
  description: "Made with Next.JS and TypeScript, developed by Rohil Varma.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${openSans.className} scroll-smooth antialiased theme`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
