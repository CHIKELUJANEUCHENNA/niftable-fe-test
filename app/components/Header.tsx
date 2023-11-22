'use client';

import Image from "next/image"
import logo from "../../public/img/logo.svg"
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { useState } from "react";
import { FaDiscord, FaTelegramPlane, FaTwitter } from "react-icons/fa";



const Header = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
        <div className="w-full flex items-center justify-between font-[400] italic text-sm text-white">
            <Image src={logo} alt=""/>
            <div className="flex items-center justify-center gap-14">
            <ul className="hidden items-center justify-center gap-14 xl:flex">
                <li>Creon Pass</li>
                <li className="relative">Token <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[-5px]">SOON</span></li>
                <li className="relative">AI Revenue <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[-5px]">SOON</span></li>
                <li className="relative">AI Launchpad <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[-5px]">SOON</span></li>
            </ul>
            <div className="flex items-center justify-center gap-4">
            <div className="border px-3 py-1 rounded-md">Connect</div>
            <GiHamburgerMenu onClick={() => {setIsOpen(true)}} className='xl:hidden flex border p-1 rounded-md w-7 h-7'/>
            </div>
            </div>
            { isOpen?
               <div className="absolute top-0 right-0 h-[100vh] flex flex-col gap-7 items-start justify-start pl-8 pt-4 pr-4 bg-black">
               <div className="flex items-center justify-between gap-10 py-4 border-b border-[#13171D]">
               <div className="border px-3 py-1 rounded-md">Connect</div>
               <IoMdClose onClick={() => {setIsOpen(false)}} className='p-1 rounded-md w-7 h-7 bg-[#3D8BFF]'/>
               </div>
               <ul>
               <li className="border-b border-[#13171D] py-4">Creon Pass</li>
                 <li className="relative border-b border-[#13171D] py-4">Token <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[12px]">SOON</span></li>
                 <li className="relative border-b border-[#13171D] py-4">AI Revenue <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[12px]">SOON</span></li>
                 <li className="relative border-b border-[#13171D] py-4">AI Launchpad <span className="absolute bg-black rounded-xl text-[0.5rem] text-[#AB23FF] px-1 py-[0.05px] ml-1 top-[12px]">SOON</span></li>
               </ul>
               <span className="absolute bottom-8">
               <div className='flex items-center justify-center gap-4'>
                    <div className='border border-white rounded-full p-1'><FaTelegramPlane className=''/></div>
                    <div className='border border-white rounded-full p-1'><FaDiscord/></div>
                    <div className='border border-white rounded-full p-1'><FaTwitter/></div>
              </div>
               </span>
             </div>
             : null
            }
           
        </div>
  )
}

export default Header