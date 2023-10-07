import Link from "next/link"

function NotFound() {
  return (
    <section>
      <h1>404</h1>
      <p>Page not found</p>
      <Link href={"/"}>Go back</Link>
    </section>
  )
}
export default NotFound
