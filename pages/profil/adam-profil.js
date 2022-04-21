import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import Ansokning from '../../components/Profil/Ansokning';
import ProfilMeny from '../../components/Profil/ProfilMeny';

function AdamProfilSida() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <ProfilMeny></ProfilMeny>
        <Ansokning></Ansokning>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AdamProfilSida