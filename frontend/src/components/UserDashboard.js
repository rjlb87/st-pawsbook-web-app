import React, { useEffect, useState } from 'react'
import { getAllOwners, deleteOwner } from '../services/UserService'
import EditDashboard from './EditDashboard'
import ReactPaginate from 'react-paginate'

function UserDashboard() {
    const [owners, setOwners] = useState([])
    const [currentPage, setCurrentPage] = useState(0)
    const itemsPerPage = 10
    const pageCount = Math.ceil(owners.length / itemsPerPage)

    const handlePageClick = ({ selected }) => {
        setCurrentPage(selected)
    }

    const startIndex = currentPage * itemsPerPage + 1
    const endIndex = startIndex + itemsPerPage

    const currentData = (owners || []).slice(
        startIndex,
        Math.min(endIndex, owners.length)
    )
    const handleDeleteOwners = async (id) => {
        try {
            const success = await deleteOwner(id)
            if (success) {
                setOwners((prevUsers) => prevUsers.filter((u) => u.id !== id))
            }
        } catch (error) {
            console.error(error.message)
        }
    }
    useEffect(() => {
        const fetchOwners = async () => {
            try {
                const owners = await getAllOwners()
                setOwners(owners)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchOwners()
    }, [])

    return (
        <div className="h-auto bg-gray-200 px-4 py-10">
            <div className="flex justify-center items-center uppercase my-5 text-2xl text-gray-800">
                <h1 className="font-bold tracking-wider pb-10 pt-10">
                    Owners Dashboard
                </h1>
            </div>
            <table className=" mx-auto border-collapse">
                <thead>
                    <tr className="bg-gray-800">
                        <th className=" px-6  text-xs font-semibold text-white">
                            #
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            First Name
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Last Name
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Email
                        </th>
                        <th className=" px-6  text-xs font-semibold uppercase text-white">
                            Phone Number
                        </th>
                        <th
                            colSpan={2}
                            className="border-gray-300 px-6 py-4 text-xs font-semibold uppercase text-white"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {currentData.map((owners, index) => (
                        <tr
                            key={owners.id}
                            className="hover:bg-gray-100 transition-colors text-xs"
                        >
                            <td className=" border-gray-500 px-6  bg-gray-600 text-center text-white font-semibold">
                                {startIndex + index}
                            </td>
                            <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                {owners.first_name}
                            </td>
                            <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                {owners.last_name}
                            </td>
                            <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                {owners.email}
                            </td>
                            <td className="border-gray-500 px-6  bg-gray-600  text-center text-white font-light">
                                {owners.phone_number}
                            </td>
                            <td className="border-gray-500 bg-gray-600">
                                <EditDashboard owners={owners} />
                            </td>
                            <td className="border-gray-500  bg-gray-600">
                                <td className="flex justify-center group py-4 px-6">
                                    <button
                                        className=" bg-gray-800 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                                        onClick={() =>
                                            handleDeleteOwners(owners.id)
                                        }
                                    >
                                        Delete
                                    </button>
                                </td>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="flex justify-center mt-4">
                <nav class="bg-white rounded-lg shadow-md">
                    <ReactPaginate
                        previousLabel={'Prev'}
                        nextLabel={'Next'}
                        pageCount={5}
                        containerClassName={'flex'}
                        pageClassName={
                            'flex items-center justify-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        activeClassName={'text-blue-700'}
                        previousClassName={
                            'px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 rounded-l-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        nextClassName={
                            'px-4 py-2 text-sm font-medium text-gray-500 bg-white border-gray-300 rounded-r-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500'
                        }
                        previousLinkClassName={'page-link'}
                        nextLinkClassName={'page-link'}
                        onPageChange={handlePageClick}
                    />
                </nav>
            </div>
        </div>
    )
}

export default UserDashboard
