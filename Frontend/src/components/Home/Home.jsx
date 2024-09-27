import React from 'react'
import Headings from './Headings'
import Footer from '../Footer'

const Home = () => {
  return (
    <>
      <div className='flex lg:flex-col justify-center px-4 sm:px-52 items-center sm:flex-row flex-col sm:space-x-5 space-y-5 sm:space-y-0'>
        <div className=' w-full'>
          <Headings />
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home