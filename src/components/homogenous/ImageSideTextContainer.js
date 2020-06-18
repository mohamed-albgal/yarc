import React from 'react';
import { GoZap } from 'react-icons/go'

export default () => {
    const longImageUrl = "https://images.unsplash.com/photo-1555212697-194d092e3b8f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
    return (
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
                <LongImage imgSrc={longImageUrl}/>
                <SideTextIcon />
            </div>
        </div>
    )
}

export const LongImage = ({imgSrc}) => {
    return (
        <div className="w-full md:w-4/12 mx-auto my-4 px-4">
            <img
                alt="..."
                className="max-w-full rounded-lg shadow-lg"
                src={imgSrc}
            />
        </div>
    )
}

const SideTextIcon = () => {
    return (
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 relative">
                <h3 className="text-3xl font-semibold text-center">
                Students, Get Your Studying Done Here 
                </h3>
                <div className="w-full mt-2 inline-flex justify-center">
                    <div className="text-white p-3 mt-4 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-orange-900">
                        <GoZap />
                    </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-center text-gray-600">
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