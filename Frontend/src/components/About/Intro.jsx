import React from 'react'
import { Link } from 'react-router-dom'
import illustration1 from '../../assets/illustration3.png'

const Intro = () => {
    return (
        <div className='flex flex-col sm:flex-row justify-evenly items-center'>
            <div className='bg-gradient-to-r from-gray-900  p-10 rounded-md sm:w-1/2 '>

                <h1 className='mb-5 text-4xl font-bold text-white'>LET ME INTRODUCE MYSELF</h1>

                <h2 className='mb-5 normal-case'>I am a <span className='text-blue-200'>full stack web developer.</span></h2>

                <h2 className='mb-5 Normal-case'>My field of Interest's are building new  Web Technologies and Products.</h2>

                <h2 className='mb-5 normal-case'>Whenever possible, I also apply my passion for developing products with <span className='text-blue-300'>Node.js</span> and modern <span className='text-blue-300'>JavaScript</span> library and frameworks  like <span className='text-blue-300'>React.js</span> and <span className='text-blue-300'>Next.js.</span></h2>

                <h2 className='mb-5 Normal-case'> Well-versed in <span className='text-blue-300'>GIT</span> and <span className='text-blue-300'>GITHUB</span> for efficient version control, collaboration, and code management in team environments.</h2>

                <Link to={'https://drive.google.com/drive/folders/10X7jhkRBD8N8ijXy2ihyeMq84Q61ZRFq?usp=sharing'}>
                <button
                    type="button"
                    className="rounded-md bg-white px-3 py-2 text-sm font-semibold text-black shadow-sm hover:bg-white/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                    Checkout my Resume
                </button>
                </Link>

            </div>

            <img className="max-w-xl rounded-md object-cover w-full h-auto" src={illustration1} alt="" />

        </div>
    )
}

export default Intro