import Navbar from "@/components/Navbar"

export const metadata = {
  title: "My First - Next.js",
  description: "First project generated with Next.js 13",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
