import React from 'react'

function Splash() {
    return (
        <>
            <div className="bg-white flex flex-col justify-center items-center h-screen">
                <p className="text-green-800 text-6xl font-extrabold mb-8">
                    Let's go paws and multiply
                </p>
                <button className="bg-green-800 text-white text-lg font-bold py-2 px-4 rounded-xl">
                    Register your dog
                </button>
            </div>
        </>
    )
}

export default Splash
