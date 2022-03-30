import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import Register from './Register'
import { Router, Link, Redirect } from '@reach/router'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next Susanne</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <nav className="mt-3 flex w-screen justify-between">
        <Logo></Logo>
        <Navigation></Navigation>
      </nav>
      <main>
        <Router>
          <Register path="/blimedlem" />
        </Router>
      </main>
    </div>
  )
}

export default Home
