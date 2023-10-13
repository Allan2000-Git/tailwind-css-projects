import React from 'react'
import terminalImg from '../assets/terminal.png'

function Developer() {
    return (
        <>
            <div className="w-full text-white bg-black">
                <div className="max-w-[1260px] mx-auto py-8">
                    <div className='flex flex-col justify-center items-center py-10 text-center px-4'>
                        <h4 className='text-3xl font-bold'>Superpowers for DEFI developers.</h4>
                        <p className='mt-6 text-[1.1rem] leading-9'>Checkout the <span>documentation</span>, the <span>quick start</span>  or a guide below to
                        integrate your project with thousands of tokens and billions of
                        liquidity.</p>
                        <div className='py-20 '>
                            <img className='shadow-lg shadow-orange-600/50' src={terminalImg} alt=""/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Developer
