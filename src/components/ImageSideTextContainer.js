import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export default () => {
    return (
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
                <LongImage />
                <SideTextIcon />
            </div>
        </div>
    )
}

const LongImage = () => {
    return (
        <div className="w-full md:w-4/12 mx-auto my-4 px-4">
            <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src="https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            />
        </div>
    )
}

const SideTextIcon = () => {
    return (
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12">
                <div className="text-pink-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-pink-300">
                <FontAwesomeIcon icon={"coffee"} />
                </div>
                <h3 className="text-3xl font-semibold">
                Students, Get Your Studying Done Here 
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-gray-600">
                The extension comes with three pre-built pages to help you
                get started faster. You can change the text and images and
                you're good to go.
                </p>
                {/**the below used to shown, removed since does not serve a purpose (listwithicons) */}
                {/*<ListWithIcons /> */}
            </div>
        </div>
    );
}