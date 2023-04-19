import { useState } from 'react'
import { mdiHeart } from '@mdi/js'

const Card = ({ image, title, description, age }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg">
            <img className="w-full h-48 object-cover" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    {title}
                    {','} {age}
                </div>
                <p className="text-gray-700 text-base h-20 overflow-hidden">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4 flex justify-between items-center">
                <button
                    className="hover:text-red-600 text-gray-500 focus:outline-none"
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

                <div className="">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded  text-xs">
                        Profile
                    </button>
                </div>
                <div className="">
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
            image: 'https://www.svgrepo.com/show/436014/dog-4.svg',
            title: 'Talia',
            description: 'Super maldita, but sweet and loving doggo.',
            age: 3,
        },
        {
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Cookie',
            description: 'HAHAHA Im just a dog',
            age: 2,
        },
    ]

    return (
        <div className="flex flex-wrap justify-center py-20 gap-8">
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
