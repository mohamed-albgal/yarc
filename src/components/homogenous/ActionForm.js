import React from 'react'

export default () => {
    return (
        <div className="relative block py-24 lg:pt-0 jigsaw-bg bg-fixed">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap justify-center lg:-mt-64 -mt-48">
                    <div className="w-full lg:w-6/12 px-4">
                        <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gray-300">
                            <div className="flex-auto p-5 lg:p-10 border-2 border-gray-900">
                                <h4 className="text-2xl font-semibold">
                                    Interested In Working With Us?
                                </h4>
                                <p className="leading-relaxed mt-1 mb-4 text-gray-600">
                                    Complete this form and we will get back to you ASAP!
                                </p>
                                <form name="contact" method="POST" data-netlify="true">
                                    <div className="relative w-full mb-3 mt-8">
                                        <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="full-name"
                                        >
                                        Full Name
                                        </label>
                                        <input
                                        type="text"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Full Name"
                                        style={{ transition: "all .15s ease" }}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="email"
                                        >
                                        Email
                                        </label>
                                        <input
                                        type="email"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Email"
                                        style={{ transition: "all .15s ease" }}
                                        />
                                    </div>

                                    <div className="relative w-full mb-3">
                                        <label
                                        className="block uppercase text-gray-700 text-xs font-bold mb-2"
                                        htmlFor="message"
                                        >
                                        Message
                                        </label>
                                        <textarea
                                        rows="4"
                                        cols="80"
                                        className="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                                        placeholder="Type a message..."
                                        />
                                    </div>
                                    
                                    <div className="text-center mt-6">
                                        <button
                                        className=" text-gray-900 bg-yellow-500 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                                        type="submit"
                                        >
                                            Send
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}