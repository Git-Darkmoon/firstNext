// "use client"

import Link from "next/link"

// RCC
function PostCard({ post }) {
  const { id, title, body } = post

  return (
    <article>
      <h2>
        {id}. {title}
      </h2>
      <p>{body}</p>
      {/* <button onClick={() => alert(`Card ${id} clicked.`)}>Details</button> */}
      <Link href={`/posts/${id}`}>Details</Link>
    </article>
  )
}
export default PostCard
