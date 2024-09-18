import React from 'react'

const Tools = () => {
  return (
    <section className="  py-24 px-4 lg:px-16">
      <div className="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 className="text-center text-5xl pb-12">Professional Skillset</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-28 lg:gap-y-16">

          <div className="relative group h-48 flex   flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <a href="#" className="block">
              <div className="h-28">
                <div
                  className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/Automotive.png"
                    className="w-36 h-36  mt-6 m-auto" alt="Automotive" title="Automotive" loading="lazy"
                    width="200" height="200" />
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

          <div className="relative group h-48 flex   flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <a href="#" className="block">
              <div className="h-28">
                <div
                  className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/Toys-and-Baby-Products.png"
                    className="w-36 h-36  mt-6 m-auto" alt="Toys and Baby Products"
                    title="Toys and Baby Products" loading="lazy" width="200" height="200" />
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

          <div className="relative group h-48 flex   flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <a href="#" className="block">
              <div className="h-28">
                <div
                  className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/MEDICAL.png"
                    className="w-36 h-36  mt-6 m-auto" alt="Medical" title="Medical" loading="lazy" width="200"
                    height="200" />
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

          <div className="relative group h-48 flex   flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <a href="#" className="block">
              <div className="h-28">
                <div
                  className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/Glass.png"
                    className="w-36 h-36  mt-6 m-auto" alt="Glass" title="Glass" loading="lazy" width="200"
                    height="200" />
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

          <div className="relative group h-48 flex   flex-col rounded-xl bg-gray-800 bg-clip-border text-gray-700 shadow-md">
            <a href="#"
              className="block">
              <div className="h-28">
                <div
                  className="absolute -top-20 lg:top-[-10%] left-[5%] z-40  group-hover:top-[-40%] group-hover:opacity-[0.9]   duration-300 w-[90%] h-48 rounded-xl justify-items-center align-middle">
                  <img src="https://epicpadprinting.com/public/img/indus/Jewelry-coins-and-medallions.png"
                    className="w-36 h-36  mt-6 m-auto" alt="Jewelry Coins and Medallions"
                    title="Jewelry Coins and Medallions" loading="lazy" width="200" height="200" />
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