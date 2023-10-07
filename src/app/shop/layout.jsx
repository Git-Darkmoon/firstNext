import Link from "next/link"

export const metadata = {
  title: "Official Shop - Next.js",
  description: "First project generated with Next.js 13",
}

function shopLayout({ children }) {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href={"/shop/laptops"}>Laptops</Link>
          </li>
          <li>
            <Link href={"/shop/phones"}>Phones</Link>
          </li>
        </ul>
      </nav>
      {children}
    </>
  )
}
export default shopLayout
