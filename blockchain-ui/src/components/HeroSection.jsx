import React from 'react'
import heroVideo from '../assets/video.mp4'

function HeroSection() {
  return (
    <>
      <div className="w-full h-[90vh] top-[90px]">
        <video src={heroVideo} autoPlay muted loop className="object-cover h-full w-full absolute -z-20"/>
        <div className="flex flex-col items-center justify-center h-[80vh] gap-y-6 px-4">
            <h2 className="text-white text-3xl sm:text-5xl font-bold text-center leading-10 md:leading-[4rem]">DeFi Crypto Card Payment Infrastructure</h2>
            <p className="sm:leading-9 leading-8 text-white text-lg sm:text-xl md:max-w-[1000px] text-center">Unlocking the Future of Finance: Revolutionizing Payments with DeFi Crypto Card Infrastructure. Discover a <span>Seamless</span>, <span>Secure</span>, and <span>Decentralized</span> Way to Transact.</p>
            <div className="flex gap-x-4 flex-wrap items-center justify-center gap-y-4">
                <button className="text-[1rem] text-white px-5 py-2.5 rounded-full font-medium bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)]">Connect Wallet</button>
                <button className="text-[1rem] px-5 py-2.5 rounded-full font-bold border-2 border-[var(--primary-blue)] bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)] bg-clip-text text-transparent">Trade Now</button>
            </div>
        </div>
        <div className='text-white text-xl sm:text-2xl text-center font-semibold'>
            <p>Total Volume: $62,500,000 and Rising</p>
        </div>
      </div>
    </>
  )
}

export default HeroSection
