import React from 'react'
import Headings from './Headings'
import home from '../../assets/home.png'

const Home = () => {
  return (
    <>
      <div className='flex justify-center px-4 sm:px-52 items-center sm:flex-row flex-col sm:space-x-5 space-y-5 sm:space-y-0'>
        <div className=' w-full'>
          <Headings />
        </div>
        {/* <div className='sm:w-1/2 w-full'>
          <img
            className="h-full w-full rounded-md object-cover"
            src={home}
            alt=""
          />
        </div> */}
      </div>
    </>
  )
}

export default Home