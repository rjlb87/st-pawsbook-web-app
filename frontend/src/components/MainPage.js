import { useState } from 'react'
import { IoMdMale, IoMdFemale } from './Icons'
import { Link, useNavigate } from 'react-router-dom'
import MakeAppointment from './MakeAppointment'

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
    const [showModal, setShowModal] = useState(false)

    // const handleFavoriteClick = () => {
    //     setIsFavorite(!isFavorite)
    // }

    const itemsStorage = localStorage.getItem('data')
    const userData = JSON.parse(itemsStorage)
    if (userData === null) {
        // You may want to navigate instead of using window.location
        // For that, make sure you have 'react-router-dom' properly set up.
        // navigate('/sign-up');
    }

    function getGenderIcon(gender) {
        return gender === 'female' ? <IoMdFemale /> : <IoMdMale />
    }

    const navigate = useNavigate()

    return (
        <>
            <div className="block uppercase">
                <div
                    className="flex flex-row rounded overflow-hidden bg-red-900 w-96 h-64"
                    onClick={() => setShowModal(true)} // Show modal on card click
                >
                    <img className="w-1/2 object-cover" src={image} alt="" />
                    <div className="flex flex-col justify-between w-1/2 p-4">
                        <div className="font-extrabold text-lg text-white flex flex-row justify-center uppercase">
                            {name}
                        </div>
                        <div className="font-bold text-sm justify-center mb-8 text-yellow-300 flex flex-row">
                            {breed}
                        </div>
                        <div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Gender: {getGenderIcon(gender)}
                            </div>
                            <div className="font-semibold text-xs mb-2 text-gray-300 flex flex-row">
                                Age:{age}
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
                    </div>
                </div>
            </div>

            {/* The Modal */}
            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex py-20 px-40 text-xs items-center justify-center ">
                        <div className="rounded-lg  w-1/2">
                            <MakeAppointment />
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default Card
