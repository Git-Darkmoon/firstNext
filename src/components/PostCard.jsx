// "use client"

import Link from "next/link"

// RCC
function PostCard({ post }) {
  const { id, title, body } = post

  return (
    <article className="bg-gray-950 p-10">
      <h2 className="text-2xl text-slate-100 font-bold mb-4">
        {id}. {title}
      </h2>
      <p className="text-slate-300">{body}</p>
      {/* <button onClick={() => alert(`Card ${id} clicked.`)}>Details</button> */}
      <Link href={`/posts/${id}`}>Details</Link>
    </article>
  )
}
export default PostCard
