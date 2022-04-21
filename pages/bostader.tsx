import Head from 'next/head'
import Navigation from '../components/Navigations/Navigation'
import SearchBar from '../components/SearchBar'
import HeroIndex from '../components/HeroIndex'
import Footer from '../components/Footer'

function Bostader() {
    return(
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
      <Footer></Footer>
    </div>
    );
}

export default Bostader;