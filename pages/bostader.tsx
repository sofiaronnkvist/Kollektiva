import Head from 'next/head'
import Navigation from '../components/Navigations/Navigation'
import SearchBar from '../components/SearchBar'
import HeroIndex from '../components/HeroIndex'
import Footer from '../components/Footer'
import Bostad from '../components/Bostad'

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
      <Bostad></Bostad>
      <Footer></Footer>
    </div>
    );
}

export default Bostader;