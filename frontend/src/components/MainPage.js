import { useState } from 'react'
import { mdiHeart } from '@mdi/js'

const Card = ({ image, title, description, age }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-xs rounded overflow-hidden shadow-lg mt-20 bg-yellow-300">
            <img className="w-full h-48 pt-4" src={image} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-center text-gray-800 uppercase">
                    {title}
                    {','} {age}
                </div>
                <p className="text-gray-700 text-base h-20 overflow-hidden">
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
            image: 'https://www.svgrepo.com/show/436014/dog-4.svg',
            title: 'Talia',
            description: 'Super maldita, but sweet and loving doggo.',
            age: 3,
        },
        {
            image: 'https://www.svgrepo.com/show/436015/dog-5.svg',
            title: 'Cookie',
            description:
                'HAHAHA Im just a dog. I bark, I sleep, I run and eat everything except you',
            age: 2,
        },
        {
            image: 'https://www.svgrepo.com/show/436015/dog-5.svg',
            title: 'Cookie',
            description:
                'HAHAHA Im just a dog. I bark, I sleep, I run and eat everything except you',
            age: 2,
        },
        {
            image: 'https://www.svgrepo.com/show/436015/dog-5.svg',
            title: 'Cookie',
            description:
                'HAHAHA Im just a dog. I bark, I sleep, I run and eat everything except you',
            age: 2,
        },
    ]

    return (
        <div className="bg-gray-500 flex flex-wrap  justify-evenly pt-20 gap-4 h-auto">
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
