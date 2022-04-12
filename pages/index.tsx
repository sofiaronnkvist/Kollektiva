import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigations/Navigation'
import SearchBar from '../components/SearchBar'
import HeroIndex from '../components/HeroIndex'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="mt-3 w-screen">
        <Navigation></Navigation>
      </nav>
      <div className="flex w-screen justify-center">
        <SearchBar></SearchBar>
      </div>
      <HeroIndex></HeroIndex>
    </div>
  )
}

export default Home
