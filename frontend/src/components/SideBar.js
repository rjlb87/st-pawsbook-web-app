import React from 'react'

const Sidebar = () => {
    return (
        <div className="bg-gray-800 text-white max-h-fit w-64 px-4 flex flex-col mt-25 pt-10">
            <div className="flex items-center justify-center h-14 border-b border-gray-700"></div>
            <nav className="flex-1 mt-4">
                <a
                    href="/main-page"
                    className="block py-2.5 px-4 text-sm hover:bg-green-700 rounded"
                >
                    Dashboard
                </a>
                <a
                    href="/appointments"
                    className="block py-2.5 px-4 text-sm hover:bg-green-700 rounded"
                >
                    Appointments
                </a>
                <a
                    href="/dog-profiles"
                    className="block py-2.5 px-4 text-sm hover:bg-green-700 rounded"
                >
                    Dog Profiles
                </a>
                <a
                    href="/"
                    className="block py-2.5 px-4 text-sm hover:bg-green-700 rounded"
                >
                    Settings
                </a>
            </nav>
        </div>
    )
}

export default Sidebar
