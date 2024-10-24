import React, { useState } from 'react'

import { FcGoogle } from 'react-icons/fc'
import { FaEyeSlash, FaLinkedinIn } from 'react-icons/fa'
import { FaEye } from 'react-icons/fa6'
const Login = ({handleSignIn}) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <div className=' p-5'>
                <h1 className=' text-2xl text-gray-600 font-semibold
                             text-center mb-4'>Login</h1>
                <form>
                    <div>
                        <label htmlFor="username" className='input-label'>
                            UserName
                        </label>
                        <input type="text" className='input' />
                    </div>
                    <div>
                        <label htmlFor="username" className='input-label'>
                            Passowrd
                        </label>
                        <div className=' relative flex justify-between'>
                            <input

                                type={showPassword ? "text" : "password"} className='input' />
                           {
                            showPassword ? (
                                <FaEye className=' absolute top-1/2
                                right-3 -translate-y-1/2 text-gray-500
                                 cursor-pointer'
                          onClick={() => setShowPassword(!showPassword)}
                      />
                            ):(
                                <FaEyeSlash className=' absolute top-1/2
                                right-3 -translate-y-1/2 text-gray-500
                                 cursor-pointer'
                          onClick={() => setShowPassword(!showPassword)}
                      />
                            )
                           }
                        </div>

                    </div>
                </form>
                <button className='btn w-full h-full mt-4'>Submit</button>

                <p className=' text-center text-gray-500
                             text-sm my-3'>or login with</p>
                <div className=' flex gap-4 justify-center'>
                    <FcGoogle className=' text-2xl text-gray-600
                             grayscale hover:grayscale-0 transition-all duration-300'/>
                    <FaLinkedinIn className=' text-2xl 
                              hover:text-blue-500 transition-all duration-300'/>
                </div>
                <p>
                    <a
                    onClick={()=> handleSignIn()}
                     href="#" >No Account? <span className=' text-blue-500 underline'>Create Account here</span></a>
                </p>
            </div>
        </>
    )
}

export default Login
