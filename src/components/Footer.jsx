import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt } from 'react-icons/fa'
import playstore from '../assets/playstore.jpg'
import appstore from '../assets/appstore.jpg'

const Footer = () => {
    return (
        <div className='bg-gray-100 dark:bg-dark dark:text-white'>
            <div className="container mx-auto px-4">
                {/* Compact footer grid */}
                <div className='grid md:grid-cols-3 py-4'> {/* Reduced vertical padding */}
                    
                    {/* Column 1 - Tightened spacing */}
                    <div className='py-4 px-4'> {/* Reduced padding */}
                        <h1 className='text-xl sm:text-2xl font-bold mb-2'>VeloRent</h1> {/* Smaller text */}
                        <p className='text-sm mb-3'> {/* Smaller text and spacing */}
                            Experience the freedom of riding with our top-notch bike rental service.
                        </p>
                        <div className='flex items-center gap-2 mb-1'> {/* Tighter spacing */}
                            <FaLocationArrow className='text-sm' />
                            <p className='text-sm'>Bhubaneswar, Odisha</p>
                        </div>
                        <div className='flex items-center gap-2 mb-3'> {/* Tighter spacing */}
                            <FaMobileAlt className='text-sm' />
                            <p className='text-sm'>+91 9876543210</p>
                        </div>
                        <div className='flex items-center gap-2'> {/* Smaller social icons */}
                            <a href='#'>
                                <FaInstagram className='text-xl text-[#FF3D3D] hover:text-black dark:hover:text-white duration-300' /> {/* Smaller icons */}
                            </a>
                            <a href='#'>
                                <FaFacebook className='text-xl text-[#FF3D3D] hover:text-black dark:hover:text-white duration-300' />
                            </a>
                            <a href='#'>
                                <FaLinkedin className='text-xl text-[#FF3D3D] hover:text-black dark:hover:text-white duration-300' />
                            </a>
                        </div>
                    </div>

                    {/* Column 2 - Compact lists */}
                    <div className='py-4 px-4'> {/* Reduced padding */}
                        <div className='grid grid-cols-2 gap-6'> {/* Evenly spaced two columns */}
                            <div>
                                <h1 className='text-lg font-bold mb-2'>Company</h1> {/* Smaller heading */}
                                <ul className='flex flex-col gap-2 text-sm'> {/* Smaller text and gap */}
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>About Us</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Blog</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Careers</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Contact Us</a></li>
                                </ul>
                            </div>
                            <div>
                                <h1 className='text-lg font-bold mb-2'>Policies</h1>
                                <ul className='flex flex-col gap-2 text-sm'>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Privacy Policy</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Terms & Conditions</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Cancellation Policy</a></li>
                                    <li><a href='#' className='hover:text-[#FF3D3D] duration-300'>Refund Policy</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Column 3 - Compact app download */}
                    <div className='py-4 px-4'> {/* Reduced padding */}
                        <h1 className='text-lg font-bold mb-2'>Download Our App</h1> {/* Smaller heading */}
                        <div className='flex gap-3'> {/* Reduced gap */}
                            <a href='https://www.apple.com/in/app-store/' target="_blank" rel="noopener noreferrer">
                                <img src={appstore} alt="App Store" className='h-12 w-32 object-contain cursor-pointer' /> {/* Smaller images */}
                            </a>
                            <a href='https://play.google.com/store' target="_blank" rel="noopener noreferrer">
                                <img src={playstore} alt="Play Store" className='h-12 w-36 object-contain cursor-pointer' />
                            </a>
                        </div>
                    </div>
                </div>

                {/* Footer bottom - compact */}
                <div className='text-center text-xs py-2 border-t dark:border-gray-700'> {/* Smaller text and padding */}
                    © {new Date().getFullYear()} VeloRent. All rights reserved.
                </div>
            </div>
        </div>
    )
}

export default Footer
