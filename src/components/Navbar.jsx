import React from 'react'
import NaturalLogo from '../assets/nature-logo.png'

const NavbarMenu = [
    {
        name:"Home",
        href:'#'
    },
    {
        name:"About",
        href:'#'
    },
    {
        name:"Contact",
        href:'#'
    },
    {
        name:"Services",
        href:'#'
    },
    {
        name:"Login",
        href:'#'
    },
]
const Navbar = ({toggleLoginPopup}) => {
  return (
    <header className=' bg-white/80 shadow-lg'>
      <div className="container">
        <nav className=' flex justify-between px-4
         py-3 items-center'>
            <a href="#" className=' text-gray-800
             font-bold text-3xl'>
                <img src={NaturalLogo} alt="" 
                className=' h-10 inline mr-1'/>
                TraveU
            </a>
            {/* Desktop Menu  */}
            <div className=' hidden lg:block '>
                <ul className=' flex justify-center
                 items-center gap-3'>
                   {
                    NavbarMenu.map((item)=>(
                        <li key={item.name}><a href={item.href}
                        onClick={() => {
                            if(item.name === 'Login'){
                                toggleLoginPopup(true)
                            }
                        }}
                         className='
                        hover:text-orange-600 px-4 py-4  font-serif
                         transition-all duration-300'>{item.name}</a></li>
                    ))
                   }
                    
                   
                </ul>
            </div>

            {/* mobile Menu  */}
            <div className=' sm:hidden block'>
                <ul>
                <li><a href='#' className='
                        hover:text-orange-600 px-4 py-4  font-serif
                         transition-all font-semibold duration-300'>Login</a></li>
                </ul>

            </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
