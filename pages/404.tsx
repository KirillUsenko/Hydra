import { useEffect } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Menu from '../components/Menu.tsx'
import Center from '../components/Center.tsx'

const Error: NextPage = () => {
  return (
    <div className='content'>
      <Head>
        <title>404</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>

      <Menu />

      <Center>
        <h1 className="title">404 Страница не найдена</h1>
      </Center>
    </div>
  )
}

export default Error
