import React, { useState } from 'react'
import { editOwners } from '../services/UserService'

const EditDashboard = ({ owners }) => {
    const [userDetails, setUserDetails] = useState({
        id: owners.id ?? '',
        first_name: owners.first_name ?? '',
        last_name: owners.last_name ?? '',
        email: owners.email ?? '',
        phone_number: owners.phone_number ?? '',
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserDetails((prev) => {
            return { ...prev, [name]: value }
        })
        console.log(name, value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        editOwners(userDetails).then(console.log(userDetails))
    }

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }

    return (
        <div>
            <div className="py-4 mx-10 mt-10">
                <button
                    className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
                    onClick={toggleModal}
                >
                    Edit
                </button>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className=" pt-40 flex items-center justify-center">
                        <div className="bg-gray-800 rounded-lg text-white ">
                            <div className="p-4">
                                <h2 className="text-md text-white font-bold mb-4">
                                    Edit user information
                                </h2>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-sm mt-2 px-2"
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        defaultValue={owners.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-sm px-2"
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        defaultValue={owners.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-sm px-2"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        defaultValue={owners.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-sm px-2"
                                        type="text"
                                        name="phone_number"
                                        placeholder="Phone"
                                        defaultValue={owners.phone_number}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex justify-around">
                                    <button
                                        className=" text-sm bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded"
                                        onClick={(e) => {
                                            handleSubmit(e)
                                            toggleModal()
                                        }}
                                    >
                                        Save
                                    </button>
                                    <button
                                        className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded text-sm"
                                        onClick={toggleModal}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}
export default EditDashboard
