import React, { useState } from 'react'
import axios from 'axios';

const Form = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [open, setOpen] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (!name || !email || !message) {
                alert('Please fill in all fields');
            }

            if (!email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/)) {
                alert('Please enter a valid email address');
            }
            else {
                const res = await axios.post('http://localhost:3000/email', {
                    name,
                    email,
                    message,
                });
                setOpen(true)
            }
        } catch (error) {
            console.error('Error sending email', error);
            console.log('Failed to send email');
        }
        setName('');
        setEmail('');
        setMessage('');
        
    }

    if (open) {
        return (
            <div className="flex flex-col justify-evenly items-center bg-green-100 border border-green-400 text-green-700 px-4 py-8 rounded relative" role="alert">
                <strong className="font-bold mb-4">Success!</strong>
                <span className="block sm:inline mb-4">Your message has been sent. Thank you!</span>
                <button onClick={() => setOpen(false)} className="animate-pulse align-middle select-none font-sans font-bold text-center uppercase transition-all duration-300 ease-in-out disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">close</button>
            </div>
        )
    }
    else {
        return (

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">

                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Contact me</h2>
                    <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Feel free to contact me whenever you want, I'll get back to you as soon as possible...</p>

                    <form className="space-y-8">

                        <div>
                            <label for="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your Name</label>
                            <input type="text"
                                id="subject"
                                className="block p-3 w-full outline-none text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="Let me know your name"
                                onChange={(e) => setName(e.target.value)}
                                value={name}
                                required />
                        </div>

                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                            <input type="email"
                                id="email"
                                className="shadow-sm bg-gray-50 border outline-none border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                                placeholder="name@flowbite.com"
                                onChange={(e) => setEmail(e.target.value)}
                                value={email}
                                required />
                        </div>

                        <div className="sm:col-span-2">
                            <label for="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                            <textarea id="message"
                                rows="6"
                                className="block p-2.5 w-full text-sm outline-none text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder="Leave a message..."
                                value={message}></textarea>
                        </div>

                        <button onClick={handleSubmit} className="animate-pulse align-middle select-none font-sans font-bold text-center uppercase transition-all duration-300 ease-in-out disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-blue-600 text-white shadow-md shadow-blue-900/10 hover:shadow-lg hover:shadow-blue-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full">Send message</button>

                    </form>
                </div>
            </section>
        )
    }
}

export default Form