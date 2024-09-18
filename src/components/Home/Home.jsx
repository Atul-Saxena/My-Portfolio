import React from 'react'
import Headings from './Headings'

const Home = () => {
  return (
    <>
      <div className='flex justify-between px-4 sm:px-52 items-center sm:flex-row flex-col sm:space-x-5 space-y-5 sm:space-y-0'>
        <div className='sm:w-1/2 w-full'>
          <Headings />
        </div>
        <div className='sm:w-1/2 w-full'>
          <img
            className="h-full w-full rounded-md object-cover"
            src="https://images.unsplash.com/photo-1568038479111-87bf80659645?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHBvcnRyYWl0fGVufDB8fDB8fHww"
            alt=""
          />
        </div>
      </div>
    </>
  )
}

export default Home