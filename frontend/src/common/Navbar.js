import React, { useState, Fragment, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/NavBarLinks'
import { useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Avatar } from 'flowbite-react'
import { Link } from 'react-scroll'
import { Bars } from '../data/Bars'

const NavBar = () => {
    const [nav, setNav] = useState(false)
    const [showSearchBar, setShowSearchBar] = useState(false)
    const navigate = useNavigate()
    const [isVisible, setIsVisible] = useState(true)
    const [loggedIn, setloggedIn] = useState(false)
    const itemsStorage = localStorage.getItem('data')

    const jwt = sessionStorage.getItem('jwt')

    if (jwt && JSON.stringify(itemsStorage) !== '{}') {
        if (!loggedIn) {
            setloggedIn(true)
        }
    }
    const userData = JSON.parse(itemsStorage)

    let initials =
        userData !== null
            ? userData.first_name[0].toUpperCase() +
              userData.last_name[0].toUpperCase()
            : ''

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    const Signout = () => {
        console.log('Signing out')
        localStorage.removeItem('data') // Remove data from local storage
        sessionStorage.removeItem('jwt')
        setloggedIn(true)
        window.location.href = '/' // Redirect to home page
    }
    // Function to toggle the search bar
    const toggleSearchBar = () => {
        setShowSearchBar(!showSearchBar)
    }
    useEffect(() => {
        function handleScroll() {
            const scrollTop = document.documentElement.scrollTop
            const threshold = 50
            setIsVisible(scrollTop < threshold)
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <div className="z-50  justify-between items-center flex w-full h-24 px-4 md:px-12 bg-gray-100">
            <div className=" flex items-center">
                <button
                    className="text-2xl font-bold py-6 text-white "
                    onClick={() => navigate('/')}
                >
                    <img
                        src="pawsbooklogo.png"
                        className="h-50 w-60 mt-10 mb-4 pr-20 "
                        alt="logo"
                    />
                </button>
            </div>

            <ul className="flex space-x-8 justify-center mr-36 font-bold uppercase text-sm text-gray-900">
                {loggedIn &&
                    Bars.map(({ id, link, path }) => (
                        <li
                            className="cursor cursor-pointer"
                            key={id}
                            onClick={() => navigate(path)}
                        >
                            {link}
                        </li>
                    ))}
            </ul>

            {/* </div> */}

            {loggedIn ? (
                <>
                    <div className="pr-10">
                        <div className="relative flex items-center  ">
                            <input
                                type="search"
                                className="w-32 sm:w-40 px-2 py-1 text-sm border rounded-2"
                                placeholder="Search"
                                aria-label="Search"
                                aria-describedby="button-addon3"
                            />
                            <button
                                className="px-4 py-1 text-sm text-white bg-red-900 rounded-r hover:bg-red-800"
                                type="button"
                                id="button-addon3"
                                data-te-ripple-init
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <Menu as="div" className="relative ml-3">
                        <div>
                            <Menu.Button className="flex rounded-full  border-4 border-red-800  ">
                                <div className="flex flex-wrap gap-2 ">
                                    <Avatar
                                        rounded={true}
                                        placeholderInitials={initials}
                                    />
                                </div>
                            </Menu.Button>
                        </div>
                        <Transition
                            as={Fragment}
                            enter="transition ease-out duration-100"
                            enterFrom="transform opacity-0 scale-95"
                            enterTo="transform opacity-100 scale-100"
                            leave="transition ease-in duration-75"
                            leaveFrom="transform opacity-100 scale-100"
                            leaveTo="transform opacity-0 scale-95"
                        >
                            <Menu.Items className=" absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Your Profile
                                        </a>
                                    )}
                                </Menu.Item>
                                <Menu.Item>
                                    {({ active }) => (
                                        <a
                                            onClick={Signout}
                                            href="/"
                                            className={classNames(
                                                active ? 'bg-gray-100' : '',
                                                'block px-4 py-2 text-sm text-gray-700'
                                            )}
                                        >
                                            Sign out
                                        </a>
                                    )}
                                </Menu.Item>
                            </Menu.Items>
                        </Transition>
                    </Menu>
                </>
            ) : (
                <>
                    <div>
                        <a
                            href="/sign-up"
                            className={classNames(
                                ' px-4 py-2 text-sm bg-[#a51e36] text-white uppercase font-bold rounded-sm border shadow-sm '
                            )}
                        >
                            Register
                        </a>
                        <a
                            href="/sign-in"
                            className={classNames(
                                'px-4 py-2 text-sm text-[#a51e36] uppercase font-bold border shadow-sm '
                            )}
                        >
                            Sign in
                        </a>
                    </div>
                </>
            )}
            <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden">
                {nav ? (
                    <FaTimes size={20} onClick={() => setNav(!nav)} />
                ) : (
                    <FaBars size={20} onClick={() => setNav(!nav)} />
                )}
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
