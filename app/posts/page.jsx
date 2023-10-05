import PostCard from "@/components/PostCard"

const API_URL = "https://jsonplaceholder.typicode.com/posts"

async function loadPosts() {
  const res = await fetch(API_URL)
  const posts = res.json()
  return posts
}

// RSC
async function Posts() {
  const posts = await loadPosts()

  return (
    <section>
      {posts.map((post) => {
        return <PostCard key={post.id} post={post} />
      })}
    </section>
  )
}
export default Posts
