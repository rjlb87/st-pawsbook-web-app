import React, { useEffect, useState } from 'react'
import { getAllOwners, deleteOwner } from '../services/UserService'
import EditDashboard from './EditDashboard'

function UserDashboard() {
    const [owners, setOwners] = useState([])
    // const [successModal] = useState('')

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
        const fetchUsers = async () => {
            try {
                const owners = await getAllOwners()
                setOwners(owners)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div className="h-auto mx-auto bg-gray-500 px-4 py-20 mb-10">
            <div className="flex justify-center items-center uppercase my-5 text-2xl text-white">
                <h1 className="font-bold tracking-wider pb-10 pt-10">
                    Owners Dashboard
                </h1>
            </div>
            <table className="max-w-6xl mx-auto border-collapse border rounded-md">
                <thead>
                    <tr className="bg-[#eaf0f7]">
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-gray-700">
                            ID
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-gray-700">
                            First Name
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-gray-700">
                            Last Name
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-gray-700">
                            Email
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-gray-700">
                            Phone Number
                        </th>
                        <th
                            colSpan={2}
                            className="border-gray-300 px-6 py-4 text-xs font-semibold text-gray-700"
                        >
                            Actions
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {owners.map((owners) => (
                        <tr
                            //owners table
                            key={owners.id}
                            className="hover:bg-gray-100 transition-colors text-xs"
                        >
                            <td className="border  border-gray-500 px-6  bg-slate-900  text-center text-white font-light">
                                {owners.id}
                            </td>
                            <td className="border border-gray-500 px-6  bg-slate-900  text-center text-white font-light">
                                {owners.first_name}
                            </td>
                            <td className="border border-gray-500 px-6  bg-slate-900  text-center text-white font-light">
                                {owners.last_name}
                            </td>
                            <td className="border border-gray-500 px-6  bg-slate-900  text-center text-white font-light">
                                {owners.email}
                            </td>
                            <td className="border border-gray-500 px-6  bg-slate-900  text-center text-white font-light">
                                {owners.phone_number}
                            </td>
                            <td className="border border-gray-500 bg-slate-900 pb-10">
                                <EditDashboard owners={owners} />
                            </td>
                            <td className="border border-gray-500  bg-slate-900">
                                <td className="flex justify-center group  py-4 px-6">
                                    <button
                                        className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded mr-2"
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
        </div>
    )
}

export default UserDashboard
