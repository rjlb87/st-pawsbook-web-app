import { useState } from 'react'
import { mdiHeart } from '@mdi/js'

const Card = ({ image, title, description }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg">
            <img
                className="w-full h-48 sm:h-auto object-cover"
                src={image}
                alt={title}
            />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">{description}</p>
            </div>
            <div className="px-6 py-4 flex justify-between">
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

                <div className="flex">
                    <button className="hidden sm:block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">
                        Profile
                    </button>
                    <button className="hidden sm:block bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
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
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Talia',
            description: 'Super maldita, but sweet and loving doggo.',
        },
        {
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Card 2',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Card 3',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Card 4',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
        {
            image: 'https://source.unsplash.com/random/400x300',
            title: 'Card 5',
            description:
                'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        },
    ]

    return (
        <div className="flex flex-wrap -mx-2 md:-mx-4">
            {cards.map((card, index) => (
                <div
                    className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 md:px-4 py-4"
                    key={index}
                >
                    <Card {...card} />
                </div>
            ))}
        </div>
    )
}

export default CardList
