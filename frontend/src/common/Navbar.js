import React, { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll'

const NavBar = () => {
    const [nav, setNav] = useState(false)

    const links = [
        {
            id: 1,
            link: 'SIGN UP',
        },
        {
            id: 1,
            link: 'SIGN IN',
        },
    ]

    const handleCloseNav = () => {
        if (nav) {
            setNav(false)
        }
    }

    return (
        <div className="fixed flex justify-between items-center w-full h-20 px-4 bg-slate-950">
            <div className="flex items-center ml-4 pt-4">
                <h1 className="text-3xl font-bold text-orange-600 font-rushk pb-4">
                    pawsbook
                </h1>
            </div>
            <ul className="hidden md:flex">
                {links.map(({ id, link }) => (
                    <li
                        key={id}
                        className="px-3 cursor-pointer font-medium text-gray-500 hover:scale-105 hover:text-white link-underline"
                    >
                        <Link
                            activeClass="active"
                            to={link}
                            spy={true}
                            smooth={true}
                            duration={0} // set duration to 0
                            onClick={handleCloseNav}
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>

            <div
                onClick={() => setNav(!nav)}
                className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
            >
                {nav ? <FaTimes size={20} /> : <FaBars size={20} />}
            </div>

            {nav && (
                <ul className="flex flex-col justify-start absolute top-0 left-0 w-full h-screen bg-gradient-to-r from-teal-500 to-green-200">
                    <div className="fixed flex justify-between items-center w-full h-20 px-4 bg-gradient-to-r from-teal-500 to-green-200 text-gray-800 nav">
                        <div className="flex items-center ml-4 pt-4">
                            <h1 className="text-2xl font-bold text-black font-rushk">
                                {'<rj'}
                            </h1>
                        </div>
                    </div>
                    {links.map(({ id, link }) => (
                        <li
                            key={id}
                            className="px-4 cursor-pointer capitalize py-6 text-4xl"
                        >
                            <Link
                                activeClass="active"
                                to={link}
                                spy={true}
                                smooth={true}
                                duration={0} // set duration to 0
                                onClick={handleCloseNav}
                            >
                                {link}
                            </Link>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default NavBar
