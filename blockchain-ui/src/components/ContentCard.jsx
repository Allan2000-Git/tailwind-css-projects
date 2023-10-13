import React from 'react'

function ContentCard(props) {
  return (
    <>
      <div className='block border text-left rounded-xl py-10 px-8'>
        <div className='bg-[var(--primary-blue)] inline-block p-4 rounded-full'>
            {props.icon}
        </div>
        <h4 className='text-xl font-bold py-4'>{props.heading}</h4>
        <p className='text-justify'>{props.para}</p>
      </div>
      
    </>
  )
}

export default ContentCard
