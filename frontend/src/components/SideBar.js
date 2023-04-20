import { mdiViewDashboard, mdiDog, mdiCalendarCheck, mdiHeart } from '@mdi/js'

const Sidebar = () => {
    return (
        <div className=" bg-gray-800 text-white rounded-lg mx-10 my-10">
            <div className="p-10">
                <ul>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                        >
                            <path d={mdiViewDashboard} />
                        </svg>
                        <button className="flex items-center text-white hover:text-orange-500">
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
                        <button className="flex items-center text-white hover:text-gray-900">
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
                        <button className="flex items-center text-white hover:text-gray-900">
                            <span className="ml-2">Schedules</span>
                        </button>
                    </li>
                    <li className="flex items-center mb-4">
                        <svg
                            className="w-6 h-6 mr-2"
                            viewBox="0 0 24 24"
                            fill="currentcolor"
                        >
                            <path d={mdiHeart} />
                        </svg>
                        <button className="flex items-center text-white hover:text-gray-900">
                            <span className="ml-2">Favorites</span>
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Sidebar
