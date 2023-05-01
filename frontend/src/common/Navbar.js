import React, { useState, Fragment } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { navigation } from '../data/NavBarLinks'
import { useNavigate } from 'react-router-dom'
import { Menu, Transition } from '@headlessui/react'
import { Avatar } from 'flowbite-react'

const NavBar = () => {
    const itemsStorage = localStorage.getItem('data')

    const userData = JSON.parse(itemsStorage)

    console.log('data ini', userData)
    let initials =
        userData !== null
            ? userData.first_name[0].toUpperCase() +
              userData.last_name[0].toUpperCase()
            : ''

    const [nav, setNav] = useState(false)
    const navigate = useNavigate()
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }
    const Signout = () => {
        console.log('Signing out')
        // localStorage.setItem('data', '')
        window.location = '/'
    }
    return (
        <div className=" z-50 fixed flex items-center w-full h-14 px-4 md:px-12 bg-gray-800">
            <div className="text-start mr-auto">
                <button
                    className="justify-items-center text-2xl font-extrabold py-6 text-white "
                    onClick={() => navigate('/')}
                >
                    LOGO.
                </button>
            </div>

            <ul className="pb-10">
                {navigation.map(({ id, link, path }) => (
                    <li key={id}>
                        <button
                            className="text-white hover:text-gray-500 link-underline font-semibold px-4"
                            onClick={() => navigate(path)}
                        >
                            {' '}
                            {link}
                        </button>
                    </li>
                ))}
            </ul>

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
                                    href="/sign-in"
                                    className={classNames(
                                        active ? 'bg-gray-100' : '',
                                        'block px-4 py-2 text-sm text-gray-700'
                                    )}
                                >
                                    Sign in
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
