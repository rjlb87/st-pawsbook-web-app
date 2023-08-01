import React from 'react'
import aso from '../assets/awaw.jpg'

const About = () => {
    return (
        <div
            className="bg-red-900 h-screen flex justify-center items-center"
            name="About"
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12  ">
                <div className="flex flex-col justify-center items-center md:flex-row">
                    <div className="md:w-1/2">
                        <h1 className="text-4xl font-bold mb-4 text-white">
                            ABOUT {''}
                            <span className="text-yellow-400">PAWSBOOK</span>
                        </h1>
                        <p className="text-white leading-relaxed mb-8 mr-20 mt-10">
                            PAWSBOOK is the ultimate web application for dog
                            breeders. Discover a diverse range of dog breeds,
                            effortlessly book breeding pairs, and connect with a
                            community of responsible breeders. We promote
                            ethical practices, prioritize genetic health
                            testing, and ensure the privacy and security of your
                            data. Join Pawsbook today to embark on a hassle-free
                            and rewarding dog breeding experience.
                        </p>
                    </div>
                    <div className="md:w-1/2 flex justify-center items-center ">
                        <img
                            src={aso}
                            alt="doggo"
                            className="h-[250px] mx-auto md:mx-0 shadow-lg shadow-bottom rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
