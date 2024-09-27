import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-white mb-7"></div>
      <h1 className="text-3xl font-bold text-center">Your message is being sent...</h1>
    </div>  )
}

export default Loader