import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import Sparade from '../../components/Profil/Sparade';
import ProfilMeny from '../../components/Profil/ProfilMeny';

function SparadeAnnonser() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <ProfilMeny></ProfilMeny>
        <Sparade></Sparade>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default SparadeAnnonser