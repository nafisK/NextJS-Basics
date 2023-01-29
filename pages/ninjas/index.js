import React from 'react'
import Head from 'next/head'
import styles from '@/styles/Ninjas.module.css'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await res.json()
  return {
    props: {
      ninjas: data,
    },
  }
}

export default function index({ ninjas }) {
  return (
    <>
      <Head>
        <title>Ninja List | Ninja Listing</title>
        <meta name='keywords' content='ninjas' />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map(ninja => (
          <div key={ninja.id}>
            <a href={`/ninjas/${ninja.id}`} className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </div>
        ))}
      </div>
    </>
  )
}
