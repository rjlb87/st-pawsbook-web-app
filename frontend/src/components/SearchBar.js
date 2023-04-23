import React, { useState } from 'react'

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')

    const handleSearch = (event) => {
        setSearchTerm(event.target.value)
        //  search functionality here
    }

    return (
        <div className="relative">
            <input
                className="bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="search"
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={handleSearch}
            />
            <div className="absolute top-0 right-0 mt-3 mr-4">
                <svg
                    className="fill-current text-gray-500 w-6 h-6"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                >
                    <path d="M15.5 14.1h-.8l-.3-.3c1.1-1.3 1.8-3 1.8-4.8 0-4.4-3.6-8-8-8s-8 3.6-8 8 3.6 8 8 8c1.8 0 3.5-.6 4.8-1.8l.3.3v.8l6 6 1.4-1.4-6-6zm-7 0c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                </svg>
            </div>
        </div>
    )
}

export default SearchBar
