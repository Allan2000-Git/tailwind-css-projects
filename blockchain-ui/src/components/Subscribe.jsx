import React from 'react'

function Subscribe() {
    return (
        <>
            <div className="w-full text-white bg-black">
                <div className="max-w-[1260px] mx-auto py-20 bg">
                    <div className="flex flex-col items-center justify-center py-16">
                        <h2 className="text-4xl font-bold text-center">Join our <span className='bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)] bg-clip-text text-transparent tracking-wider'>#Defi</span> Community</h2>
                        <form className="mt-8 flex flex-wrap gap-4 items-center justify-center">
                            <input className="px-4 py-3 rounded-full outline-none border-none text-black sm:w-[300px] bg-white/70" type="email" name="email"/>
                            <button className="px-8 py-3 rounded-full font-medium bg-gradient-to-r from-[var(--primary-blue)] to-[var(--primary-purple)]" type="submit">Join</button>
                        </form>
                        <div className="mt-14 flex gap-2 justify-center items-center">
                            <input type="checkbox" name="check"/>
                            <label for="terms">Yes, I agree to receive email communications from #DeFi.</label>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Subscribe
