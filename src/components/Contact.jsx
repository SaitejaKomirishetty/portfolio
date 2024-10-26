import React from 'react';

export default function Contact() {
    return (
        <section className=' flex items-center justify-center px-4 pb-8 '>
            <div className='max-w-lg w-full'>
                {/* Contact Header */}
                <div className='text-center mb-8'>
                    <h1 className='text-4xl font-bold mb-4'>Contact</h1>
                    <p className='text-gray-400'>
                        I'm always looking to collaborate on interesting
                        projects with great people. Need a supportive hand? I
                        have two!
                    </p>
                    <a
                        href='mailto:komirishettysaiteja@gmail.com'
                        class='icon-button'
                        target='_blank'
                        rel='noopener noreferrer'
                    >
                        <button className='mt-6 px-4 py-2 bg-gray-800  hover:bg-gray-700 text-white font-semibold rounded shadow inline-flex items-center'>
                            <span role='img' aria-label='email'>
                                📧
                            </span>{' '}
                            E-Mail
                        </button>
                    </a>
                </div>

                {/* Send a Message Form */}
                <div>
                    <h2 className='text-xl font-semibold mb-4'>
                        Send a message
                    </h2>
                    <form className='space-y-4'>
                        <div className='flex space-x-4'>
                            <input
                                type='text'
                                placeholder='Name'
                                className='w-1/2 p-2 dark:bg-gray-800 bg-gray-100 rounded focus:outline-none focus:ring-2 focus:ring-gray-600'
                            />
                            <input
                                type='email'
                                placeholder='Email'
                                className='w-1/2 p-2 dark:bg-gray-800 bg-gray-100  rounded focus:outline-none focus:ring-2 focus:ring-gray-600'
                            />
                        </div>
                        <textarea
                            placeholder='Message'
                            className='w-full p-2 dark:bg-gray-800 bg-gray-100  rounded focus:outline-none focus:ring-2 focus:ring-gray-600 h-32'
                        ></textarea>
                        <button
                            type='submit'
                            className='w-full py-2 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded shadow'
                        >
                            Send now
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
