import { useState } from 'react'
import { mdiHeart } from '@mdi/js'
import { IoMdMale, IoMdFemale } from './Icons'

const Card = ({
    image,
    name,
    breed,
    description,
    age,
    gender,
    color,
    size,
    date_of_birth,
}) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }
    const itemsStorage = localStorage.getItem('data')
    const userData = JSON.parse(itemsStorage)
    if (userData === null) {
        window.location = '/sign-up'
    }
    function getGenderIcon(gender) {
        return gender === 'female' ? <IoMdFemale /> : <IoMdMale />
    }
    return (
        <>
            <div className="flex flex-row rounded overflow-hidden bg-gray-800 w-96 h-64">
                <img className="w-1/2 object-cover" src={image} alt={name} />
                <div className="flex flex-col justify-between w-1/2 p-4">
                    <div className="text-right text-white text-lg font-semibold">
                        Dog name: {name}
                    </div>
                    <div>
                        <div className="font-semibold text-sm mb-2 text-gray-300">
                            {getGenderIcon(gender)} {breed}
                        </div>
                        <div className="text-white text-sm">
                            {size} {date_of_birth} {color}
                        </div>
                        <p className="text-white text-sm h-20 overflow-hidden">
                            {description}
                        </p>
                    </div>
                    <div className="flex justify-end">
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
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            Breed me!
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Card
