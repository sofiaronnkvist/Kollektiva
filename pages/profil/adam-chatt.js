import React from 'react';
import NavLoggedIn from '../../components/Navigations/NavLoggedIn';
import Footer from '../../components/Footer';
import AdamChattKomp from '../../components/Profil/AdamChattKomp';

function AdamChattSida() {
  return (
    <div>
      <NavLoggedIn name="Marianne W" />
      <div className='flex'>
        <AdamChattKomp></AdamChattKomp>
      </div>
      <Footer></Footer>
    </div>
  )
}

export default AdamChattSida