import React from 'react'
import Link from 'next/link'

export default function Footer() {
  return (
    <div>
      <p>Copyright 2023 Ninja List</p>
      <Link href='/ninjas'>See Ninja Listing</Link>
    </div>
  )
}
