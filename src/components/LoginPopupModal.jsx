import React, { useRef, useState } from 'react'
import BgImg from '../assets/bg-image.jpg'

import Login from './Login'
import SignIn from './SignIn'
const LoginPopupModal = ({ toggleLoginPopup, loginPopup }) => {

    const [showSignIn, setShowSignIn] = useState(false);
    const LogInRef = useRef()
    const handleSignIn = () => {
        setShowSignIn(!showSignIn)
    }


    const BgImage = {
        backgroundImage: `url(${BgImg})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        height: '100%',
        width: '100%'
    }

    window.addEventListener('click', (e) => {
        if(e.target === LogInRef.current){
            toggleLoginPopup(false)
        }
    })
    return (
        <>
            {
                loginPopup && <div
                ref={LogInRef}
                >
                    <div className=' fixed top-0 w-full h-full z-50 overflow-y-auto'>
                        <div className='absolute top-1/2 left-1/2 transform
                 -translate-x-1/2 -translate-y-1/2 rounded-2xl
                  shadow-md w-[90%]  sm:w-auto md:w-[700px] bg-white'>
                            <div>
                                <div className=' grid grid-cols-1 sm:grid-cols-2
                     gap-4 items-center sm:w-[600px] md:w-[700px]
                      relative'>
                                    {/* Login form section  */}
                                    {
                                        showSignIn ?
                                            <SignIn handleSignIn={handleSignIn}/>
                                            : <Login handleSignIn={handleSignIn} />
                                    }


                                    {/* Image form section  */}
                                    <div className=' w-full rounded-2xl' style={BgImage}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </>
    )
}

export default LoginPopupModal
