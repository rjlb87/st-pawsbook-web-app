import { useState } from 'react'
import Calendar from '../assets/Calendar.png'
import Chart_fill from '../assets/Chart_fill.png'
import Chat from '../assets/Chat.png'
import control from '../assets/control.png'
import Search from '../assets/Search.png'
import Setting from '../assets/Setting.png'
import User from '../assets/User.png'
import pawprints from '../assets/pawprints.png'

const App = () => {
    const [open, setOpen] = useState(false)
    const Menus = [
        { title: 'Dashboard', src: Chart_fill },
        { title: 'Inbox', src: Chat },
        { title: 'Accounts', src: User, gap: true },
        { title: 'Appointments', src: Calendar },
        { title: 'Search', src: Search },
        { title: 'Setting', src: Setting },
    ]

    return (
        <div className="flex">
            <div
                className={` ${
                    open ? 'w-72' : 'w-20 '
                } bg-gray-800 h-screen p-5  pt-8 rounded-b-md relative duration-300`}
            >
                <img
                    src={control}
                    className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && 'rotate-180'}`}
                    onClick={() => setOpen(!open)}
                    alt=""
                />
                <div className="flex gap-x-4 items-center">
                    <img
                        src={pawprints}
                        className={`cursor-pointer duration-500 ${
                            open && 'rotate-[360deg]'
                        }`}
                        alt=""
                    />
                    <div
                        className={`text-white  text-2xl duration-200 uppercase font-bold ${
                            !open && 'scale-0'
                        }`}
                    >
                        pawsbook
                    </div>
                </div>
                <ul className="pt-6">
                    {Menus.map((Menu, index) => (
                        <li
                            key={index}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? 'mt-2' : 'mt-2'} ${
                                index === 0 && 'bg-light-white'
                            } `}
                        >
                            <img src={Menu.src} alt={Menu.title} />
                            <span
                                className={`${
                                    !open && 'hidden'
                                } origin-left duration-200`}
                            >
                                {Menu.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
