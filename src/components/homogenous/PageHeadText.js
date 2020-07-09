import React from 'react'

//text-8xl
const PageHeadText = ({text,}) => {
    return (
            <div className=" container mr-4 flex flex-col flex-no-wrap ">
                <div className={`text-black font-extrabold tracking-wide leading-relaxed sm:text-7xl text-5xl`}>{text}
                    <span className="title-gradient block h-1 -mt-4 self-stretch"></span>
                </div>
            </div>
    )
}

export default PageHeadText