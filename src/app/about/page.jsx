"use client"

import { useRouter } from "next/navigation"

function AboutPage() {
  const router = useRouter()

  return (
    <section>
      <h1>AboutPage</h1>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum corporis
        facere consequatur commodi! Corrupti, neque consequatur, minus deserunt,
        culpa provident voluptate similique praesentium iure vitae quod nisi
        illum commodi! Libero, a officiis quibusdam, placeat eos minus voluptas
        inventore hic ab ratione accusantium architecto dolor ipsum ipsam
        veniam, temporibus ex. Laudantium, vel iusto! Maxime ut unde minus, quos
        praesentium voluptates nesciunt quaerat nulla architecto autem
        asperiores quis dolore, doloribus eaque, officia dignissimos eius labore
        ipsam earum dicta nihil deleniti maiores fuga atque. Adipisci, id
        deserunt. Magni autem tempore laborum iste architecto veritatis
        exercitationem deleniti, adipisci ut enim veniam voluptatem asperiores
        voluptatibus.
      </p>
      {/* Si estas redireccionando basado en un evento
      next, no se hace con <Link/> sino con navigation
      o lo que en versiones anteriores era "router"
      */}
      <button
        className="bg-sky-300 px-4 py-2 rounded-sm"
        onClick={() => {
          alert("Executing code...")
          router.push("/")
        }}
      >
        Click
      </button>
    </section>
  )
}
export default AboutPage
