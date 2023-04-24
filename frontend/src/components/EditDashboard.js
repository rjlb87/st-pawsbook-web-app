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
    // useEffect(() => {}, [])

    return (
        <div>
            <div className="py-4 mx-10 h-auto">
                <button
                    className=" bg-gray-800 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded"
                    onClick={toggleModal}
                >
                    Edit
                </button>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="mt-40 flex items-center justify-center">
                        <div className="bg-gray-900 rounded-lg text-white ">
                            <div className="p-10">
                                <h2 className="text-lg text-white font-bold pb-10">
                                    Edit Owner's Information
                                </h2>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-md mt-2 px-6 py-2"
                                        type="text"
                                        name="first_name"
                                        placeholder="First Name"
                                        defaultValue={owners.first_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-md px-6 py-2"
                                        type="text"
                                        name="last_name"
                                        placeholder="Last Name"
                                        defaultValue={owners.last_name}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-md px-6 py-2"
                                        type="text"
                                        name="email"
                                        placeholder="Email"
                                        defaultValue={owners.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="mb-4 text-sm">
                                    <input
                                        className="bg-slate-500 rounded-md px-6 py-2"
                                        type="text"
                                        name="phone_number"
                                        placeholder="Phone"
                                        defaultValue={owners.phone_number}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className="flex justify-end mt-10">
                                    <button
                                        className=" text-sm bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md"
                                        onClick={(e) => {
                                            handleSubmit(e)
                                            toggleModal()
                                        }}
                                    >
                                        Save
                                    </button>
                                    <div className="px-6">
                                        <button
                                            className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-md text-sm"
                                            onClick={toggleModal}
                                        >
                                            Cancel
                                        </button>
                                    </div>
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
