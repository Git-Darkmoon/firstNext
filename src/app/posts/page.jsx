import PostCard from "@/components/PostCard"
import "./posts.css"

const API_URL = process.env.API_URL

async function loadPosts() {
  const res = await fetch(API_URL)
  const posts = res.json()
  return posts
}

// RSC
async function Posts() {
  const posts = await loadPosts()

  return (
    <section className="grid">
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
    </section>
  )
}
export default Posts
