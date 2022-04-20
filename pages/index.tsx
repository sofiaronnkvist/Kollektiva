import type { NextPage } from 'next'
import Head from 'next/head'
import Navigation from '../components/Navigations/Navigation'
import SearchBar from '../components/SearchBar'
import HeroIndex from '../components/HeroIndex'
import HeroUsp from '../components/HeroUsp'
import HeroBoenden from '../components/HeroBoenden'
import HeroFaq from '../components/HeroFaq'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Kollektiva</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="mt-3 w-screen">
        <Navigation></Navigation>
      </nav>
      <div className="flex w-full justify-center">
        <SearchBar></SearchBar>
      </div>
      <HeroIndex></HeroIndex>
      <HeroUsp></HeroUsp>
      <HeroBoenden></HeroBoenden>
      <HeroFaq></HeroFaq>
      <Footer></Footer>
    </div>
  )
}

export default Home
