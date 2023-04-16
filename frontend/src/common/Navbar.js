import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/NavBarLinks'
import { useNavigate } from 'react-router-dom'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const navigate = useNavigate()

    // const handleCloseNav = () => {
    //     if (nav) {
    //         setNav(false)
    //     }
    // }

    return (
        <div className="fixed flex items-center w-full h-20 px-4 md:px-12 bg-white text-black z-50">
            <div className="text-start mr-auto">
                <button
                    className="text-2xl ml-3 font-extrabold py-6 text-orange-500 bg-clip-text"
                    onClick={() => navigate('/')}
                >
                    pawsbook.
                </button>
            </div>

            {navigation.map(({ id, link, path }) => (
                <ul className="list-none">
                    <li
                        key={id}
                        className=" text-sm px-6 cursor-pointer font-semibold text-gray-800 hover:scale-105 hover:text-orange-500 link-underline"
                    >
                        <button
                            className="text-gray-800"
                            onClick={() => navigate(path)}
                        >
                            {' '}
                            {link}
                        </button>
                    </li>
                </ul>
            ))}

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-start absolute top-0 left-0 w-full h-screen bg-white">
                    <div className="fixed flex justify-between items-center w-full h-20 px-4 bg-white">
                        <div className="flex items-center ml-4 pt-4">
                            <h1 className="text-2xl font-bold text-black">
                                pawsbook
                            </h1>
                        </div>
                    </div>
                    {navigation.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                            // onClick={() => handleCloseNav}
                        >
                            {link}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar
