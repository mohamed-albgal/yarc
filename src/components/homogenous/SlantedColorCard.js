import React from 'react'


const SlantedColorCard = ({bgColorTW, title, caption, textColorTW="white"}) => {
    return (
        <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
            <div className={`relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-${bgColorTW}`} >
                <img
                alt="..."
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80"
                className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                    
                    <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block"
                    style={{
                    height: "95px",
                    top: "-94px"
                    }}
                    >
                        <polygon
                        points="-30,95 583,95 583,65"
                        className={`text-${bgColorTW} fill-current`}
                        ></polygon>
                    </svg>
                    <h4 className={`sm:text-2xl font-bold text-${textColorTW}`}>
                        {title}
                    </h4>
                    <p className={`text-md font-light mt-2 text-${textColorTW}`}>
                    {caption}
                    </p>
                </blockquote>
                
            </div>
        </div>
    )
}

export default SlantedColorCard;