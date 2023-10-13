import React from 'react'

function Footer() {
    return (
        <>
            <div className="w-full text-white bg-black">
                <div className="max-w-[1260px] mx-auto py-8">
                    <div className="grid lg:grid-cols-4 grid-cols-2">
                        <div className="text-center">
                            <h2 className="border-b-4 border-[var(--primary-blue)] inline-block font-semibold mb-4 mt-4">Market</h2>
                            <ul className="list-none">
                                <li>App</li>
                                <li>Analytics</li>
                                <li>Token Lists</li>
                                <li>#DeFi</li>
                            </ul>
                        </div>
                        <div className="text-center">
                            <h2 className="border-b-4 border-[var(--primary-blue)] inline-block font-semibold mb-4 mt-4">Exchange</h2>
                            <ul className="list-none">
                                <li>App</li>
                                <li>Analytics</li>
                                <li>Token Lists</li>
                                <li>#DeFi</li>
                            </ul>
                        </div>
                        <div className="text-center sm:mt-0 mt-8">
                            <h2 className="border-b-4 border-[var(--primary-blue)] inline-block font-semibold mb-4 mt-4">Activity</h2>
                            <ul className="list-none">
                                <li>App</li>
                                <li>Analytics</li>
                                <li>Token Lists</li>
                                <li>#DeFi</li>
                            </ul>
                        </div>
                        <div className="text-center sm:mt-0 mt-8">
                            <h2 className="border-b-4 border-[var(--primary-blue)] inline-block font-semibold mb-4 mt-4">Community</h2>
                            <ul className="list-none">
                                <li>App</li>
                                <li>Analytics</li>
                                <li>Token Lists</li>
                                <li>#DeFi</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
