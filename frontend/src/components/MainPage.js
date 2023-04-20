import { useState } from 'react'
import { mdiHeart } from '@mdi/js'

const Card = ({ image, title, breed, description, age }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-xs md:max-w-md rounded-lg overflow-hidden shadow-lg mt-20 bg-yellow-200">
            <img className="w-full h-40 md:h-48" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-lg md:text-xl mb-2 text-center text-gray-800 uppercase">
                    {title}
                    {','} {age}
                </div>
                <div className="font-semibold text-lg md:text-xl mb-2  text-gray-800">
                    {breed}
                </div>
                <p className="text-gray-700 text-sm md:text-base h-16 md:h-20 overflow-hidden">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
                <button
                    className="hover:text-red-600 text-gray-800 focus:outline-none"
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

                <div>
                    <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded  text-xs">
                        Profile
                    </button>
                </div>
                <div>
                    <button className=" bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs">
                        Book me
                    </button>
                </div>
            </div>
        </div>
    )
}

const CardList = () => {
    const cards = [
        {
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            title: 'Talia',
            breed: 'Shih tzu',
            description: 'Super maldita, but sweet and loving doggo.',
            age: 3,
        },
        {
            image: 'https://images.unsplash.com/photo-1543320317-15188058b450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'mon',
            breed: 'Pug',
            description:
                'HAHAHA Im just a dog. I bark, I sleep, I run and eat everything except you',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1610866443075-9188b628003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Cookie',
            breed: 'Shih tzu',
            description:
                'HAHAHA Im just a dog. I bark, I sleep, I run and eat everything except you',
            age: 2,
        },
    ]

    return (
        <div className="bg-white flex flex-wrap  justify-evenly pt-20 gap-4 h-auto">
            {cards.map((card, index) => (
                <div
                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8"
                    key={index}
                >
                    <Card {...card} />
                </div>
            ))}
        </div>
    )
}

export default CardList
