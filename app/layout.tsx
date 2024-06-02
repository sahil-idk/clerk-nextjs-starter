import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { ThemeProvider } from "@/components/theme-provider";

import Navbar from "@/components/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar />
            {/* <NavigationMenuDemo/> */}
            <main className="container mx-auto">
              <div className="flex items-start justify-center min-h-screen">
                <div className="mt-20">

                  {children}
                </div>
              </div>
            </main>
            
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
