import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import BgImg from './assets/bg-image.jpg'
import LoginPopupModal from './components/LoginPopupModal'

const App = () => {
  const [loginPopup,setLoginPopup] = useState(false);

  const toggleLoginPopup = () => {
    setLoginPopup(!loginPopup)
  }

  const BgImage = {
    backgroundImage:`url(${BgImg})`,
    backgroundPosition:'center',
    backgroundSize:'cover',
    backgroundRepeat:'no-repeat',
    height:'100vh',
    width:'100%'
  }
  return (
    <div style={BgImage}>
     <Navbar toggleLoginPopup={toggleLoginPopup}/>
     <Hero toggleLoginPopup={toggleLoginPopup}/>

     <LoginPopupModal
     toggleLoginPopup={toggleLoginPopup}
     loginPopup={loginPopup}
     />

    </div>
  )
}

export default App
