import React, { useEffect, useState } from 'react'
import { getAllOwners, deleteOwner } from '../services/UserService'
import EditDashboard from './EditDashboard'

function UserDashboard() {
    const [owners, setOwners] = useState([])
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
        <div className="h-screen bg-gray-800 px-4 py-20">
            <div className="flex justify-center items-center uppercase my-5 text-2xl text-white">
                <h1 className="font-bold tracking-wider pb-10 pt-10">
                    Owners Dashboard
                </h1>
            </div>
            <table className=" mx-auto border-collapse">
                <thead>
                    <tr className="bg-orange-500">
                        <th className=" border-gray-300 px-6  text-xs font-semibold text-white">
                            #
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold uppercase text-white">
                            First Name
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold uppercase text-white">
                            Last Name
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold uppercase text-white">
                            Email
                        </th>
                        <th className=" border-gray-300 px-6  text-xs font-semibold uppercase text-white">
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
                    {owners.map((owners, index) => (
                        <tr
                            key={owners.id}
                            className="hover:bg-gray-100 transition-colors text-xs"
                        >
                            <td className="border  border-gray-500 px-6  bg-slate-900  text-center text-white font-semibold">
                                {index + 1}
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
                            <td className="border border-gray-500 bg-slate-900">
                                <EditDashboard owners={owners} />
                            </td>
                            <td className="border border-gray-500  bg-slate-900">
                                <td className="flex justify-center group py-4 px-6">
                                    <button
                                        className=" bg-gray-800 hover:bg-orange-500 text-white font-bold py-2 px-4 rounded"
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
