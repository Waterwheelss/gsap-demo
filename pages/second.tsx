import { useEffect, useLayoutEffect } from 'react'
import type { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger'

const Second: NextPage = () => {
  useEffect(() => {
    const blocks = document.querySelectorAll('.animation')

    blocks.forEach((block) => {
      gsap.to(block, {
        scrollTrigger: {
          trigger: block,
        },
        x: 0,
        opacity: 1,
        duration: 0.5,
      })
    })

    ScrollTrigger.refresh()

    return () => {
      const triggers = ScrollTrigger.getAll()

      triggers.forEach((trigger) => trigger.kill())

      gsap.killTweensOf('*')
    }
  }, [])

  const renderList = () => {
    const list = []

    for (let i = 20; i >= 0; i--) {
      list.push(
        <div
          key={i}
          className="animation bg-red-500 w-20 h-20 mb-10 opacity-0 translate-x-10"
        />
      )
    }

    return list
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
        <h1 className="text-6xl font-bold">
          Welcome to{' '}
          <a className="text-blue-600" href="https://nextjs.org">
            Next.js!
          </a>
        </h1>

        <ul className="flex gap-8">
          <li>
            <Link href="/">
              <a className="text-blue-500">First Page</a>
            </Link>
          </li>
          <li>
            <span>Second Page</span>
          </li>
        </ul>

        <div className="mt-20">{renderList()}</div>
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        <a
          className="flex items-center justify-center gap-2"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
        </a>
      </footer>
    </div>
  )
}

export default Second
