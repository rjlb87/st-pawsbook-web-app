import { useState } from 'react'
import { mdiHeart } from '@mdi/js'
import { IoMdMale, IoMdFemale } from './Icons'
import { Link, useNavigate } from 'react-router-dom'

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
    const navigate = useNavigate()

    return (
        <>
            <Link to="/appointments" className="block">
                <div className="flex flex-row rounded overflow-hidden bg-gray-900  w-96 h-64 ">
                    <img className="w-1/2 object-cover" src={image} alt="" />
                    <div className="flex flex-col justify-between w-1/2 p-4">
                        <div className="font-bold text-xs mb-2 text-white flex flex-row items items-center uppercase pl-10 ">
                            {name}
                        </div>
                        <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                            Age: {age}
                        </div>
                        <div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Gender: {getGenderIcon(gender)}
                            </div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Breed: {breed}
                            </div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Size: {size}
                            </div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Date of birth: {date_of_birth}
                            </div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Color: {color}
                            </div>

                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                About me: {description}
                            </div>
                        </div>
                        {/* <div className="flex justify-end">
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
                            </button> */}
                        {/* <button
                            onClick={() => navigate('/appointments')}
                            className="bg-gray-500 hover:bg-white hover:text-gray-600 text-white  text-xs font-bold py-1 px-8 rounded-xl"
                        >
                            Breed me!
                        </button> */}
                        {/* </div> */}
                    </div>
                </div>
            </Link>
        </>
    )
}

export default Card
