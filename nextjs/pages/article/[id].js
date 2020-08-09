import Head from 'next/head'
import styles from '../../styles/Home.module.css'

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          {posts.name}
        </h1>
      </main>
    </div>
  )
}

export async function getStaticPaths() {
  console.log('getStaticPaths')
  const res = await fetch('http://127.0.0.1:3000/api/list')
  const posts = await res.json()
  const paths = posts.map((post) => ({
    params: { id: post.id },
  }))
  console.log(paths)
  return {
    paths, // will be passed to the page component as props
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  console.log('getStaticProps', params)
  // Call an external API endpoint to get posts
  const res = await fetch(`http://127.0.0.1:3000/api/news?id=${params.id}`)
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
