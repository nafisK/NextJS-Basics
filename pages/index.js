import styles from '@/styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
      <p className={styles.text}>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
      <p className={styles.text}>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
      <Link href='/ninjas' className={styles.btn}>
        See Ninja Listing
      </Link>
    </div>
  )
}
