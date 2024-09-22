import React from 'react'

const Footer = () => {
  return (
<footer class="mx-auto mt-32 w-full max-w-container px-4 sm:px-6 lg:px-8 pb-6" aria-labelledby="footer-heading">
    <div class="items-centers grid grid-cols-1 justify-between gap-4 border-t border-gray-100 py-6 md:grid-cols-2">
        <p class="text-sm/6 text-gray-400 max-md:text-center">
            Designed and developed by Atul Saxena.
        </p>
        <div class="flex items-center justify-center space-x-4 text-sm/6 text-gray-400 md:justify-end">
            <p>Copyright ©</p>
            <div class="h-4 w-px bg-gray-200"></div>
            <p>All rights reserved.</p>
        </div>
    </div>
    <ul class="flex flex-col space-y-2 text-sm text-gray-400 sm:flex-row sm:space-x-4 sm:space-y-0 md:justify-start md:space-x-6">
        <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
            </svg>
            <span class="ml-2">atulsaxena194@gmail.com</span>
        </li>
        <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            <span class="ml-2">+91 9630572449</span>
        </li>
        <li class="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span class="ml-2">Bhopal, Madhya Pradesh</span>
        </li>
    </ul>
</footer>
  )
}

export default Footer