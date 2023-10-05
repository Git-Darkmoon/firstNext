// To accept params through the URL:
/* 
1. Change the name of the route (folder) to
[desiredName]
2. Inside the component we create in page.jsx, we are going
to have some props so we can use them, the props
are going to be the elements that are in the URL
it is going to return i.e: 
{ params: {id: 123}, searchParams: {} }

*/

import { Suspense } from "react"
import Posts from "../page"

const API_URL = "https://jsonplaceholder.typicode.com/posts/"

async function loadPostById(postId) {
  const res = await fetch(`${API_URL}${postId}`)
  const post = res.json()
  return post
}

async function SinglePostPage({ params }) {
  const post = await loadPostById(params.postId)

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
      <hr />

      <h2>Other Posts</h2>
      {/* Suspense is going to add some
      fallback for the separated code in case this
      have extra loading.

      Podemos generar una carga independiente por componentes
      */}
      <Suspense fallback={<h4>Loading Posts...</h4>}>
        <Posts />
      </Suspense>
    </section>
  )
}
export default SinglePostPage
