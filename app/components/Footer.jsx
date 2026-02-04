import React from 'react'
import { assets } from '@/assets/assets'
import Image from 'next/image'

const Footer = ({isDarkMode}) => {
  return (
    <div className='mt-20'>
      <div className='text-center'>
        <Image src={isDarkMode ? assets.logo_dark : assets.logo} alt='footer background' className='w-36 mx-auto mb-2'/>
      </div>

      <div className='w-max flex items-center gap-2 mx-auto'>
        <Image src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon} alt='' className='w-6'/>
        alccommunity2017@gmail.com
      </div>

    <div className='text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6'>
        <p className='text-center text-sm'>© 2026 William Mark. All rights reserved.</p>
        <ul className='flex items-center gap-10 justify-center mt-4 sm:mt-0'>
            <li><a href="https://www.facebook.com/communityALC/" target='_blank'>GitHub</a></li>
            <li><a href="https://www.facebook.com/communityALC/" target='_blank'>LinkedIn</a></li>
            <li><a href="https://www.facebook.com/communityALC/" target='_blank'>Instagram</a></li>
        </ul>
    </div>

    </div>
    
  )
}

export default Footer
