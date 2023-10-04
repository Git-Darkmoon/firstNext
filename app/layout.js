// All components in NextJS are server side components
// unless you mark them with "use client"

import Navbar from "@/components/Navbar"

// This is the import for using fonts from google fonts
import { Roboto } from "next/font/google"

// metadata only works with server side components
export const metadata = {
  title: "My Landing - Next.js",
  description: "First project generated with Next.js 13",
}

// Roboto behaves like a function so it
// must be invoked and can receive
// certain parameters.

const ffRoboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ffRoboto.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
