import React from 'react'

const PageHeadText = ({text, size='8xl'}) => {
    return (
            <div className=" container mr-4 flex flex-col flex-no-wrap ">
                <div className={`text-black font-extrabold tracking-wide leading-relaxed sm:text-${size} text-5xl`}>{text}
                    <span className="title-gradient block h-1 -mt-4 self-stretch"></span>
                </div>
            </div>
    )
}

export default PageHeadText