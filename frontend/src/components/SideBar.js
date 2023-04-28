import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import control from '../assets/control.png'
import pawprints from '../assets/pawprints.png'
import { Menus } from '../data/SideBarlinks'

const App = () => {
    const [open, setOpen] = useState(true)
    const navigate = useNavigate()

    return (
        <div className="flex ">
            <div
                className={` ${
                    open ? 'w-72' : 'w-20 '
                } bg-gray-800 h-screen p-5  pt-8 rounded-b-md mt-20 duration-300`}
            >
                <img
                    src={control}
                    className={` top-9 w-8 rounded-full  ${
                        !open && 'rotate-180'
                    }`}
                    onClick={() => setOpen(!open)}
                    alt=""
                />
                {/* <div className="flex gap-x-4 items-center">
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
                    ></div>
                </div> */}
                <ul className="pt-6">
                    {Menus.map((id, path) => (
                        <li
                            key={id}
                            className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${id.gap ? 'mt-2' : 'mt-2'} ${id === 0 && 'bg-light-white'} `}
                            onClick={() => navigate(path)}
                        >
                            <img src={id.src} alt={id.title} />
                            <span
                                className={`${
                                    !open && 'hidden'
                                } origin-left duration-200`}
                            >
                                {id.title}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default App
