import { useState } from 'react'
import { mdiHeart } from '@mdi/js'
import { IoMdMale, IoMdFemale } from './Icons'

const Card = ({ image, name, breed, description, age, gender }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }
    const itemsStorage = localStorage.getItem('data')
    const userData = JSON.parse(itemsStorage)
    if (userData === null) {
        window.location = '/sign-up'
    }
    return (
        <>
            <div className="w-64 h-96 rounded overflow-hidden bg-gray-800">
                <img
                    className="w-full h-1/2 object-cover"
                    src={image}
                    alt={name}
                />
                <div className="flex items-center px-4 pt-4 pb-4">
                    <button
                        className="hover:text-red-600 text-white focus:outline-none mr-2"
                        onClick={handleFavoriteClick}
                    >
                        <svg
                            viewBox="0 0 24 24"
                            className={`w-6 h-6 ${
                                isFavorite ? 'text-red-600' : ''
                            }`}
                        >
                            <path fill="currentColor" d={mdiHeart} />
                        </svg>
                    </button>
                    <div className="text-md text-center font-semibold text-white">
                        {name}
                        {','} {age}
                    </div>
                </div>
                <div className="px-4 pt-2">
                    <div className="font-semibold text-sm mb-2 text-gray-300">
                        {gender}
                        <IoMdFemale /> {breed}
                    </div>
                    <p className="text-white text-xs font-semibold h-16 md:h-20 overflow-hidden">
                        {description}
                        <div className="pt-6 flex justify-center items-center">
                            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                More about me
                            </button>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Card
