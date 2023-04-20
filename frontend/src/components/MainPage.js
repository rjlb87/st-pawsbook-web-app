import { useState } from 'react'
import { mdiHeart } from '@mdi/js'
import SideBar from './SideBar'

const Card = ({ image, title, breed, description, age }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <div className="max-w-xs md:max-w-md rounded-lg overflow-hidden shadow-lg mt-20 bg-yellow-200">
            <img className="w-full h-40 md:h-48" src={image} alt={title} />
            <div className="flex items-center px-4 pt-4 pb-4">
                <button
                    className="hover:text-red-600 text-gray-700 focus:outline-none mr-2"
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
                <div className="font-bold text-lg md:text-xl text-center text-gray-800 uppercase">
                    {title}
                    {','} {age}
                </div>
            </div>
            <div className="px-4 pt-2">
                <div className="font-semibold text-lg md:text-xl mb-2 text-red-500">
                    {breed}
                </div>
                <p className="text-gray-700 text-sm md:text-base h-16 md:h-20 overflow-hidden">
                    {description}
                </p>
            </div>
            <div className=" py-4 flex justify-center">
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs">
                    More about me
                </button>
                {/* <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded text-xs">
        Book me
    </button> */}
            </div>
        </div>
    )
}

const Dog_info = () => {
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
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1610866443075-9188b628003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Cookie',
            breed: 'Shih tzu',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1610866443075-9188b628003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Cookie',
            breed: 'Shih tzu',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1610866443075-9188b628003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Cookie',
            breed: 'Shih tzu',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1610866443075-9188b628003c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Cookie',
            breed: 'Shih tzu',
            description: 'I eat everything except you.',
            age: 2,
        },
    ]

    return (
        <>
            <div className=" flex-1 mx-10 mt-6 font-bold text-gray-800 text-3xl">
                pawsbook.
            </div>
            <div className="flex h-screen">
                <SideBar />
                <div className="flex-1"></div>
                <div className="bg-white flex justify-evenly mt-20 gap-x-2 gap-y-2 h-auto sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-flow-row flex-wrap">
                    {cards.map((card, index) => (
                        <div
                            className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 mb-8 sm:max-w-sm"
                            key={index}
                        >
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default Dog_info
