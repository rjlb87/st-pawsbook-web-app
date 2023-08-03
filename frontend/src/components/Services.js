import React from 'react'

function Services() {
    return (
        <>
            <div
                className="bg-gray-200 overflow-hidden h-screen"
                name="Services"
            >
                <div className="max-w-6xl mx-auto p-5 py-20">
                    <div className="text-center">
                        <h2 className="text-3xl font-bold text-yellow-400  pb-10">
                            SERVICES
                        </h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            {/* <FaHiking className="text-5xl text-gray-800 mb-4" /> */}
                            <h3 className="text-md font-semibold text-white mb-2 bg-[#a51e36] rounded-2xl px-4 py-2">
                                MATCHING
                            </h3>
                            <p className="text-gray-600 text-center">
                                Welcome to Pawsbook's Matching feature, where
                                your dream canine companion awaits! Discover a
                                variety of adorable dogs that match your desired
                                breed type, size, and temperament. Connect with
                                potential mates for your dog, ensuring a perfect
                                match for breeding.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            {/* <FaMountain className="text-5xl text-gray-800 mb-4" /> */}
                            <h3 className="text-md font-semibold text-white mb-2 bg-[#a51e36] rounded-2xl px-4 py-2">
                                SCHEDULE
                            </h3>
                            <p className="text-gray-600 text-center">
                                Simplify breeding arrangements with Pawsbook's
                                convenient Schedule feature. Plan appointments
                                and meetings for your dogs to come together and
                                start their breeding journey. Coordinate the
                                time and location for a successful and
                                harmonious union.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center">
                            {/* <FaCampground className="text-5xl text-gray-800 mb-4" /> */}
                            <h3 className="text-md font-semibold text-white mb-2 bg-[#a51e36] rounded-2xl px-6 py-2">
                                BREED
                            </h3>
                            <p className="text-gray-600 text-center">
                                With Pawsbook's Breed feature, make informed
                                decisions about dog breeding. Learn about
                                different breeds' characteristics and traits,
                                and select the ideal mate for your dog to ensure
                                healthy and happy offspring.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Services
