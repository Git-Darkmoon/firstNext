import Link from "next/link"
import "./navbar.css"

function Navbar() {
  return (
    <nav className="navbar py-5 px-10">
      <h1 className="text-2xl font-bold">NextJS Course</h1>
      <ul className="navbar_list">
        <li>
          <Link href={"/"}>Home</Link>
        </li>
        <li>
          <Link href={"/about"}>About</Link>
        </li>
        <li>
          <Link href={"/shop"}>Shop</Link>
        </li>
        <li>
          <Link href={"/posts"}>Posts</Link>
        </li>
      </ul>
    </nav>
  )
}
export default Navbar
