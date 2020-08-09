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
          List
        </h1>

        <ul>
          {posts.map(item => (
            <li key={item.id}><a >{item.id} {item.name}</a></li>
          ))}
        </ul>
      </main>
    </div>
  )
}

// export async function getStaticPaths(context) {
//   console.log('getStaticPaths')
//   return {
//     props: {}, // will be passed to the page component as props
//   }
// }

export async function getStaticProps(context) {
  console.log('getStaticProps', context)
  // Call an external API endpoint to get posts
  const res = await fetch('http://127.0.0.1:3000/api/list')
  const posts = await res.json()

  // By returning { props: posts }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}
