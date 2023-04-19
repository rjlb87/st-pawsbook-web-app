import { mdiViewDashboard, mdiDog, mdiCalendarCheck, mdiHeart } from '@mdi/js'

const Sidebar = () => {
    return (
        <div className="h-screen bg-gray-200 mb-20">
            <div className="">
                <ul>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d={mdiViewDashboard} />
                        </svg>
                        <button className="flex items-center text-gray-700 hover:text-gray-900">
                            <span className="ml-2">Dashboard</span>
                        </button>
                    </li>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d={mdiDog} />
                        </svg>
                        <button className="flex items-center text-gray-700 hover:text-gray-900">
                            <span className="ml-2">Dogs</span>
                        </button>
                    </li>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d={mdiCalendarCheck} />
                        </svg>
                        <button className="flex items-center text-gray-700 hover:text-gray-900">
                            <span className="ml-2">Schedules</span>
                        </button>
                    </li>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d={mdiHeart} />
                        </svg>
                        <button className="flex items-center text-gray-700 hover:text-gray-900">
                            <span className="ml-2">Favorites</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
