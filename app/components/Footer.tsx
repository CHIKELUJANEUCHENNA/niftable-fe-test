import React from 'react'
import Container from './Container'
import { FaTelegramPlane } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <Container>
        <div className='lg:flex hidden items-center justify-between py-7'>
            <div className='flex items-center justify-start gap-10'>
                <span className='font-[700] italic text-xs'>&copy; Creon 2023, All rights reserved.</span>
                <div className='flex items-center justify-center gap-4'>
                    <div className='border border-white rounded-full p-1'><FaTelegramPlane className=''/></div>
                    <div className='border border-white rounded-full p-1'><FaDiscord/></div>
                    <div className='border border-white rounded-full p-1'><FaTwitter/></div>
                </div>
            </div>
            <p className='font-[700] italic text-xs'>Powered by <span className='normal font-[400] text-sm'>NIFTABLES</span></p>
        </div>
        <div className='lg:hidden md:flex hidden items-center justify-between py-7'>
          <span className='font-[700] italic text-xs'>&copy; Creon 2023, All rights reserved.</span>
                <div className='flex items-center justify-center gap-4'>
                    <div className='border border-white rounded-full p-1'><FaTelegramPlane className=''/></div>
                    <div className='border border-white rounded-full p-1'><FaDiscord/></div>
                    <div className='border border-white rounded-full p-1'><FaTwitter/></div>
                </div>
            <p className='font-[700] italic text-xs'>Powered by <span className='normal font-[400] text-sm'>NIFTABLES</span></p>
        </div>
        <div className='md:hidden flex flex-col items-center justify-center gap-4 py-7'>
         <div className='flex items-center justify-center gap-4'>
                    <div className='border border-white rounded-full p-1'><FaTelegramPlane className=''/></div>
                    <div className='border border-white rounded-full p-1'><FaDiscord/></div>
                    <div className='border border-white rounded-full p-1'><FaTwitter/></div>
          </div>
          <span className='font-[700] italic text-xs'>&copy; Creon 2023, All rights reserved.</span>
          <p className='font-[700] italic text-xs'>Powered by <span className='normal font-[400] text-sm'>NIFTABLES</span></p>
        </div>
    </Container>
  )
}

export default Footer