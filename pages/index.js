import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <p>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
      <p>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
      <p>
        Consequat magna aliquip et sit veniam mollit aute nulla ipsum laborum
        dolore magna.
      </p>
    </div>
  )
}
