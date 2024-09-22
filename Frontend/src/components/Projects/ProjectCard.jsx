import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = ({ name, description, img, tech ,link }) => {

    return (
        <div className="p-3 rounded-xl group sm:flex space-x-6 bg-gradient-to-r from-slate-600 bg-opacity-0 shadow-xl hover:rounded-2xl transition duration-500 ease-in-out transform hover:scale-105">
            <img src={img} alt="art cover" loading="lazy" width="1000" height="667" className="h-56 sm:h-full w-full sm:w-5/12 object-cover object-top rounded-lg transition duration-500 group-hover:rounded-xl" />
            <div className="sm:w-7/12 pl-0 p-5">
                <div className="space-y-2">
                    <div className="space-y-4">
                        <h4 className="text-2xl font-semibold text-white">{name}</h4>
                        <p className="text-gray-300">{description}</p>
                        {
                            typeof tech === 'string' ? (
                                <span
                                    class="inline-flex items-center justify-center rounded-full mr-3 bg-emerald-100 px-2.5 py-0.5 text-emerald-700 dark:bg-black dark:text-emerald-100"
                                >
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        class="-ms-1 me-1.5 size-4"
                                    >
                                        <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                        />
                                    </svg>

                                    <p class="whitespace-nowrap text-sm">{tech}</p>
                                </span>
                            ) : (
                                tech.map((item) => (
                                    <span
                                        class="inline-flex items-center mr-3 justify-center rounded-full bg-emerald-100 px-2.5 py-0.5 text-emerald-700 dark:bg-black dark:text-emerald-100"
                                    >
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            class="-ms-1 me-1.5 size-4"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                            />
                                        </svg>

                                        <p class="whitespace-nowrap text-sm">{item}</p>
                                    </span>
                                )
                                )
                            )
                        }
                    </div>
                    <Link to={link}
                        className="group relative inline-block overflow-hidden decoration-0 border-black px-8 py-3 focus:outline-none focus:ring"
                        href="#"
                    >
                        <span
                            className="absolute inset-y-0 left-0 w-[2px] bg-black transition-all group-hover:w-full group-active:bg-black"
                        ></span>

                        <span
                            className="relative text-sm font-medium text-white transition-colors group-hover:text-white"
                        >
                            Github
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard


