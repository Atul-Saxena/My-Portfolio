import React from 'react'
import { FaFigma } from "react-icons/fa";
import { VscVscode } from "react-icons/vsc";
import { FiCodesandbox } from "react-icons/fi";
import {
  SiPostman ,
  SiAdobexd ,
  SiCodesandbox 
} from "react-icons/si";

const Tools = () => {
  return (
    <section className="  py-24 px-4 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl mb-32">Tools I use</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">

          <div className="relative group h-48 flex   flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
            <a className="block">
              <div className="h-28">
                <div
                  className="absolute -top-0 lg:top-[0%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  bg-gray-900  duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                    <VscVscode className="w-36 h-36 text-sky-500 mt-6 m-auto"/>
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p
                  className="mb-2 inline-block text-white text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  VS Code
                </p>
              </div>
            </a>
          </div>

          <div className="relative group h-48 flex   flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
            <a
              className="block">
              <div className="h-28">
                <div
                  className="absolute -top-0 lg:top-[0%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  bg-gray-900  duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <SiCodesandbox className="w-36 h-36 text-white mt-6 m-auto"/>
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p
                  className="mb-2 inline-block text-white text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Code Sandbox
                </p>
              </div>
            </a>
          </div>
          
          <div className="relative group h-48 flex   flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
            <a className="block">
              <div className="h-28">
                <div
                  className="absolute -top-0 lg:top-[0%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  bg-gray-900  duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <SiPostman className="w-36 h-36 text-orange-600 mt-6 m-auto"/>
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p
                  className="mb-2 inline-block text-white text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Postman
                </p>
              </div>
            </a>
          </div>

          <div className="relative group h-48 flex   flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
            <a className="block">
              <div className="h-28">
                <div
                  className="absolute -top-0 lg:top-[0%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]  shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  bg-gray-900 duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <SiAdobexd className="w-36 h-36 text-fuchsia-500 mt-6 m-auto"/>
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p
                  className="mb-2 inline-block text-white text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Adobe XD
                </p>
              </div>
            </a>
          </div>

          <div className="relative group h-48 flex   flex-col rounded-xl bg-clip-border text-gray-700 shadow-md">
            <a className="block">
              <div className="h-28">
                <div
                  className="absolute -top-0 lg:top-[0%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9] shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]  bg-gray-900  duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <FaFigma className="w-36 h-36 text-yellow-500 mt-6 m-auto"/>
                </div>
              </div>
              <div className="p-6   z-10 w-full   ">
                <p
                  className="mb-2 inline-block text-white text-center w-full  text-xl  font-sans  font-semibold leading-snug tracking-normal   antialiased">
                  Figma
                </p>
              </div>
            </a>
          </div>


        </div>
      </div>
    </section>
  )
}

export default Tools