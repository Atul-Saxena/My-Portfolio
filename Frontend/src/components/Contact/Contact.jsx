import React, { useState } from 'react'
import TechShpere from './TechStack/TechSphere';
import Form from './Form';
import Footer from '../Footer'

const Contact = () => {

  return (
    <>
    <div className='flex items-center justify-center sm:flex-row flex-col'>
      <Form />
      <div className="sm:w-1/2">
        <TechShpere />
      </div>
    </div>
    <Footer />
    </>
  )
}

export default Contact