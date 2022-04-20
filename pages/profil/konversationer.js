import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import Konversation from '../../components/Profil/Konversation';
import ProfilMeny from '../../components/Profil/ProfilMeny';

function Konversationer() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <ProfilMeny></ProfilMeny>
        <Konversation></Konversation>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default Konversationer