import React, { useState, Fragment, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/NavBarLinks'
import { useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Avatar } from 'flowbite-react'

const NavBar = () => {
    const [nav, setNav] = useState(false)
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
        window.location.href = '/' // Redirect to home page
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
        <div
            className={`transition duration-500 ease-in-out ${
                isVisible ? '' : 'hidden'
            } z-50 fixed flex items-center w-full h-14 px-4 md:px-12 bg-transparent`}
        >
            <div className="text-start mr-auto">
                <button
                    className="justify-items-center text-2xl font-bold py-6 text-white "
                    onClick={() => navigate('/')}
                >
                    <img
                        src="pawsbooklogo.png"
                        className="h-60 w-50 mt-10"
                        alt="logo"
                    />
                </button>
            </div>

            {loggedIn ? (
                <Menu as="div" className="relative ml-3">
                    <div>
                        <Menu.Button className="flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800">
                            <div className="flex flex-wrap gap-2">
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
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
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
            ) : (
                <>
                    <a
                        href="/sign-up"
                        className={classNames(
                            'block px-4 py-2 text-sm text-white uppercase'
                        )}
                    >
                        Sign Up
                    </a>
                    <a
                        href="/sign-in"
                        className={classNames(
                            'block px-4 py-2 text-sm text-white uppercase'
                        )}
                    >
                        Sign In
                    </a>
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
