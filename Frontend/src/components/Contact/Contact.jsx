import React, { useState } from 'react'
import TechShpere from './TechStack/TechSphere';
import Form from './Form';

const Contact = () => {

  return (
    <div className='flex items-center justify-center sm:flex-row flex-col'>
      <Form />
      <div className="sm:w-1/2">
        <TechShpere />
      </div>
    </div>
  )
}

export default Contact