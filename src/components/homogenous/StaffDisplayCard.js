import React from 'react'

export default ({name, title, image}) => {
    return (
        <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
            <div className="px-6">
                <img
                alt="..."
                src={image}
                className="shadow-2xl-white border-2 border-gray-600 rounded-full max-w-full mx-auto"
                style={{ maxWidth: "120px" }}
                />
                <div className="pt-6 text-center">
                    <h5 className="text-xl font-bold">
                        {name}
                    </h5>
                    <p className="mt-1 text-sm text-gray-900 uppercase font-semibold">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
}