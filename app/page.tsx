import PlatformIntro from './components/PlatformIntro'
import CreonPass from './components/CreonPass'
import Footer from './components/Footer'

export default function Home() {
  return (
  <div className='bg-black text-white'>
    <PlatformIntro/>
    <CreonPass/>
    <Footer/>
  </div>
  )
}
