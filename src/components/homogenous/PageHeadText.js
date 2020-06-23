import React from 'react'

const PageHeadText = ({text}) => {
    return (
            <div className=" container mr-4 flex flex-col flex-no-wrap ">
                <div className="text-black font-extrabold tracking-wide sm:text-8xl text-6xl">{text}
                    <span className="title-gradient block h-1 -mt-4 self-stretch"></span>
                </div>
            </div>
    )
}

export default PageHeadText