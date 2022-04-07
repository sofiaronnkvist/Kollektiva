import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigation'
import Logo from '../components/Logo'
import SearchBar from '../components/SearchBar'

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
      <div className="w-screen flex justify-center">
      <SearchBar></SearchBar>
      </div>
    </div>
  )
}

export default Home
