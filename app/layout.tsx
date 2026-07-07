import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { BottomNav } from "@/components/layout/BottomNav";
import { DisclaimerFooter } from "@/components/layout/DisclaimerFooter";
import { Sidebar } from "@/components/layout/Sidebar";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Painel de Suplementação",
  description: "Painel pessoal de acompanhamento de suplementação e metas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col pb-16 md:pb-0">
        <div className="flex flex-1">
          <Sidebar />
          <div className="flex flex-1 flex-col">
            <main className="mx-auto w-full max-w-5xl flex-1 px-4 py-6 sm:px-6">
              {children}
            </main>
            <DisclaimerFooter />
          </div>
        </div>
        <BottomNav />
      </body>
    </html>
  );
}
