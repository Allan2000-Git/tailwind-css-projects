import React from 'react'
import ContentCard from './ContentCard'
import { SiHiveBlockchain, SiStrapi, SiFsecure } from 'react-icons/si';
import { VscServerProcess } from 'react-icons/vsc';

function Content() {
    return (
        <>
        <div className="bg-black w-full text-white px-8">
            <div className="max-w-[1260px] mx-auto py-8">
                <div className='text-center py-10'>
                    <h4 className='text-3xl font-bold'>A Growing Protocol Ecosystem</h4>
                    <p className='mt-6 text-[1.1rem] leading-9'>The Defi protocol system empowers developers, liquidity providers,
                    and traders to participate in a financial marketplace that is open
                    and accessible to all.</p>
                </div>
                <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 mt-12">
                    <ContentCard icon={<SiHiveBlockchain size={30} />} heading="Secure, incorruptible network" para="Utilize decentralization, trusted nodes, premium data, and cryptographic proofs to link accurate, available data/APIs to smart contracts."/>
                    <ContentCard icon={<VscServerProcess size={30} />} heading="Secure off-chain computation" para="Use a decentralized network of DeFi Keeper nodes to automate contracts, mitigating risk of manual interventions and centralized servers."/>
                    <ContentCard icon={<SiStrapi size={30} />} heading="Proven, ready-made solutions" para="Integrate pre-built, time-tested oracle solutions that already secure tens of billions in smart contract value for market-leading decentralized applications."/>
                    <ContentCard icon={<SiFsecure size={30} />} heading="Seamless connection to any API" para="Build on a flexible framework that can retrieve data from any API, connect with existing systems, and integrate with any current or future blockchain."/>
                    
                </div>
            </div>
        </div>
        </>
    )
}

export default Content
