import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Separator } from "@/components/ui/separator";
import Navbar from "@/components/ui/navbar";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RemindMe",
  description: "Created by: @CodeWithKliton",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html
        lang="en"
        className={cn(inter.className, "dark")}
        style={{
          colorScheme: "dark",
        }}
      >
        <body>
          <div
            className="
             flex
             min-h-screen
             w-full
             flex-col
             items-center
             dark:bg-black"
          >
            <Navbar />
            <Separator />
            <main className="flex flex-grow w-full justify-center items-center dark:bg-neutral-950">
              {children}
              <Toaster />
            </main>
          </div>
        </body>
      </html>
    </ClerkProvider>
  );
}
