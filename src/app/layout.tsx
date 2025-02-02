import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { LanguageProvider } from "@/contexts/LanguageContext";
import { Montserrat } from "next/font/google";

export const metadata: Metadata = {
  title: "CydeSoft",
  description: "Software development company.",
};

const monserratFont = Montserrat();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`antialiased ${monserratFont.className}`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <LanguageProvider>
            <div className="bg-cs-background text-cs-foreground">
              <main className="pt-10">{children}</main>
            </div>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
