import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Register from './blimedlem'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="mt-3 flex w-screen justify-between">
        <Logo></Logo>
        <Navigation></Navigation>
      </nav>
    </div>
  )
}

export default Home
