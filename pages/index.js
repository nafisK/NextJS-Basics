import Head from 'next/head'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ninja List | Home</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1 className={styles.title}>Home Page</h1>
        <p className={styles.text}>
          Welcome to Ninja Listing. Hire the next top Ninja.{' '}
        </p>
        <p>Built with Next.js</p>
        <Link href='/ninjas' className={styles.btn}>
          See Ninja Listing
        </Link>
      </div>
    </>
  )
}
