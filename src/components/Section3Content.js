import React from 'react';
import { GoZap } from 'react-icons/go'

export default ({image, sideHead, sideBody}) => {
    return (
        <div className="container mx-auto px-4">
            <div className="items-center flex flex-wrap">
                <LongImage imgSrc={image}/>
                <SideTextIcon sideHead={sideHead} sideBody={sideBody} />
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

const SideTextIcon = ({sideHead, sideBody}) => {
    return (
        <div className="w-full md:w-5/12 ml-auto mr-auto px-4">
            <div className="md:pr-12 relative">
                <h3 className="text-3xl font-semibold text-center">
                {sideHead}
                </h3>
                <div className="w-full mt-2 inline-flex justify-center">
                    <div className="text-white p-3 mt-4 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-orange-900">
                        <GoZap />
                    </div>
                </div>
                <p className="mt-4 text-lg leading-relaxed text-center text-gray-900">
                {sideBody}
                </p>
                {/**the below used to shown, removed since does not serve a purpose (listwithicons) */}
                {/*<ListWithIcons /> */}
            </div>
        </div>
    );
}