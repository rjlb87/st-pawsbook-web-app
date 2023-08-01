import React from 'react'

function Splash() {
    return (
        <div className="relative h-screen">
            {/* Video Background */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <video
                    className="object-cover w-full h-full"
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                    <source src="/dogsvid.mp4" type="video/mp4" />
                </video>
            </div>

            {/* Content */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="uppercase text-8xl text-white font-extrabold">
                    Let's go Paws and Multiply!
                </div>
            </div>
        </div>
    )
}

export default Splash
