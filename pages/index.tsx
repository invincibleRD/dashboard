import { Inter } from 'next/font/google'
import React from 'react'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div>
      <Link href={'login'}>click</Link>
      </div>
    </>
  )
}
