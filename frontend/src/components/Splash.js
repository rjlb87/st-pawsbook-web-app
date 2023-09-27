import React from 'react'

function Splash() {
    return (
        <div className="relative h-screen bg-[#ffa404]  ">
            <div>
                <img src="pawsbook.jpg" alt="pawsbook" />
            </div>
            {/* Video Background */}
            {/* <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/dogsvid.mp4" type="video/mp4" />
                </video>
            </div> */}

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 space-x-8 z-10">
                <div className=" text-8xl font-extrabold flex pt-28">
                    <p className="text-white">paws</p>
                    <p className="text-gray-900">book</p>
                </div>
                <div className="text-white font-extrabold text-3xl flex items-center justify-center pt-10 space-x-4">
                    <p>Let's go paws and multiply</p>
                </div>
                <div className="flex justify-center items-center pt-10">
                    <button className="text-gray-800  font-semibold uppercase border border-gray-800 rounded-full py-2 px-4">
                        match a fur
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Splash
