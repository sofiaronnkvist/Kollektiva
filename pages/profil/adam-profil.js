import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import AdamProfilKomp from '../../components/Profil/AdamProfilKomp';
import ProfilMeny from '../../components/Profil/ProfilMeny';

function AdamProfilSida() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <AdamProfilKomp></AdamProfilKomp>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AdamProfilSida