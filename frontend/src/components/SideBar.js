import React from 'react'

const Sidebar = () => {
    return (
        <div class="max-w-screen-xl mx-auto px-4 py-8 bg-gray-500 w-full">
            <ul class="flex space-x-8 justify-center">
                <li>
                    <a href="/" class="text-blue-500 hover:text-white">
                        Dashboard
                    </a>
                </li>
                <li>
                    <a href="/" class="text-blue-500 hover:text-white">
                        Appointments
                    </a>
                </li>
                <li>
                    <a href="/" class="text-blue-500 hover:text-white">
                        My Dogs
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar
