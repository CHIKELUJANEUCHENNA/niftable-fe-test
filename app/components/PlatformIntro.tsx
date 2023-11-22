import React from 'react'
import Header from './Header'
import background from '../../public/img/home.png'
import Container from './Container'

const Intro = () => {
  return (
    <div style={{ backgroundImage: `url(${background.src})` }}
    className='lg:h-[100vh] w-[100vw] bg-cover object-center bg-center' 
    >
      <Container>
        <div className='flex flex-col items-center justify-start gap-72 md:pb-16'>
        <Header/> 
        <div className='xl:flex hidden flex-col items-start justify-start gap-7 xl:px-[14rem] lg:px-0'>
        <h1 className='text-[39px] text-white leading-[2.9rem]'>
          THE WORLD'S FIRST PLATFORM FOR TOKENIZING AI BLOCKCHAIN PROJECTS
        </h1>
        <p className='grad py-1 text-md font-[400] italic border-y bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
          Hold the Creon Pass NFT and earn passive income from AI Tools</p>
        </div>
        <div className='xl:hidden flex flex-col items-start justify-start gap-7 xl:px-[14rem] lg:px-0'>
        <h1 className='text-[39px] text-white leading-[2.9rem]'>
        EMPOWERING AI-CRYPTO INNOVATIONS AND INTEGRATING AI TOOLS INTO CRYPTO.
        </h1>
        <p className='grad py-1 text-md font-[400] italic border-y bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] inline-block text-transparent bg-clip-text'>
        Creon «Create On» confidential AI Tools for granting access through NFTs.</p>
        </div>
        </div>
      </Container>
    </div>
  )
}

export default Intro