import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { Toaster } from "@/components/ui/toaster"

import "./globals.css"

import Header from "@/components/header"
import { cn } from "@/utils/clsx"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Wallet",
  description: "A simple wallet app to manage your expenses and income.",
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "px-4", "bg-background")}>
        <Header />
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  )
}
