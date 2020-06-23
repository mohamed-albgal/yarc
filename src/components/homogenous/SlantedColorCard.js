import React from 'react'


const SlantedColorCard = ({bgColorTW, head, body, textColorTW="white", cardImage}) => {
    return (
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-${bgColorTW}`} >
                <img
                alt="..."
                src={cardImage}
                className="w-full align-middle rounded-t-lg"
                />
                <div className="relative p-8 mb-4">
                    
                    <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className={`absolute left-0 w-full block text-${bgColorTW} fill-current`}
                    style={{
                    height: "95px",
                    top: "-94px"
                    }}
                    >
                        <path
                        d="M-30 95h613V65z"
                        ></path>
                    </svg>
                    <h4 className={`sm:text-2xl font-bold text-${textColorTW}`}>
                        {head}
                    </h4>
                    <p className={`text-md font-light mt-2 text-${textColorTW}`}>
                    {body}
                    </p>
                </div>
                
            </div>
        </div>
    )
}

export default SlantedColorCard;