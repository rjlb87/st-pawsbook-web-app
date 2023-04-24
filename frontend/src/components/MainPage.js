import { useState } from 'react'
import { mdiHeart } from '@mdi/js'
import SideBar from './SideBar'

const Card = ({ image, title, breed, description, age }) => {
    const [isFavorite, setIsFavorite] = useState(false)

    const handleFavoriteClick = () => {
        setIsFavorite(!isFavorite)
    }

    return (
        <>
            <div className="w-64 h-96 rounded overflow-hidden bg-gray-800 mt-10">
                <img
                    className="w-full h-1/2 object-cover"
                    src={image}
                    alt={title}
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
                        {title}
                        {','} {age}
                    </div>
                </div>
                <div className="px-4 pt-2">
                    <div className="font-semibold text-sm mb-2 text-gray-300">
                        {breed}
                    </div>
                    <p className="text-white text-xs font-semibold h-16 md:h-20 overflow-hidden">
                        {description}
                        <div className="pt-6 flex justify-end">
                            <a
                                href="#_"
                                class="inline-flex items-center w-full px-2 py-2 mb-2 text-xs text-white bg-gray-500 rounded-md hover:bg-gray-600 hover:text-white sm:w-auto sm:mb-0"
                                data-primary="green-400"
                                data-rounded="rounded-2xl"
                                data-primary-reset="{}"
                            >
                                Profile
                                <svg
                                    class="w-4 h-4 ml-1"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                                        clip-rule="evenodd"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </p>
                </div>
            </div>
        </>
    )
}

const Dog_info = () => {
    const cards = [
        {
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            title: 'Talia',
            breed: 'Shih tzu',
            description: 'Super maldita and sweet.',
            age: 3,
        },
        {
            image: 'https://images.unsplash.com/photo-1543320317-15188058b450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Mon',
            breed: 'Pug',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1658347124285-281deec3dee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            title: 'Valley',
            breed: 'Corgy',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1529906920574-628dc1e49f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
            title: 'Tilly',
            breed: 'Golden Retriever',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80',
            title: 'Const',
            breed: 'Shih tzu',
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            image: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Summer',
            breed: 'Poodle',
            description: 'I eat everything except you.',
            age: 2,
        },
    ]

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1"></div>

            <div className="flex flex-wrap justify-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-5">
                {cards.map((card, index) => (
                    <div
                        className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:max-w-sm"
                        key={index}
                    >
                        <Card {...card} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Dog_info
