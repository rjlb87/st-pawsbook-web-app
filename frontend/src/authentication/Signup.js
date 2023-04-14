import React, { useState } from 'react'
import { createOwners } from '../services/UserService'

const SignUp = () => {
    const [owners, setOwners] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
    })

    const { first_name, last_name, email, password, phone_number } = owners

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!first_name || !last_name || !email || !password || !phone_number) {
            alert('Please fill in all fields')
            return
        }
        try {
            await createOwners(owners)
            window.location = '/'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-black flex justify-center items-center h-auto pt-20 pb-20">
            <div className=" sm:w-96 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-semibold mb-6 text-center pt-10">
                    Sign Up
                </h1>
                <form onSubmit={onSubmitForm}>
                    <label className="mb-4 block text-xs">
                        First Name:
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 text-xs"
                            type="text"
                            placeholder="John"
                            value={first_name}
                            onChange={(e) =>
                                setOwners({
                                    ...owners,
                                    first_name: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label className="mb-4 block text-xs ">
                        Last Name:
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                            type="text"
                            placeholder="Doe"
                            value={last_name}
                            onChange={(e) =>
                                setOwners({
                                    ...owners,
                                    last_name: e.target.value,
                                })
                            }
                        />
                    </label>
                    <label className="block mb-4 text-xs">
                        Email:
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                            type="email"
                            placeholder="youremail@gmail.com"
                            value={email}
                            onChange={(e) =>
                                setOwners({ ...owners, email: e.target.value })
                            }
                        />
                    </label>
                    <label className="mb-4 block text-xs">
                        Password:
                        <div className="relative">
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10"
                                // type={showPassword ? 'text' : 'password'}
                                type="password"
                                placeholder="******"
                                value={password}
                                onChange={(e) =>
                                    setOwners({
                                        ...owners,
                                        password: e.target.value,
                                    })
                                }
                            />
                            {/* <button
                            type="button"
                            onClick={handleShowPassword}
                            className="absolute top-1/2 right-2 transform -translate-y-1/2"
                        >
                            {showPassword ? 'Hide' : 'Show'}
                        </button> */}
                        </div>
                    </label>
                    <label className="mb-4 block text-xs">
                        Phone Number:
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                            type="tel"
                            value={phone_number}
                            placeholder="+63"
                            onChange={(e) =>
                                setOwners({
                                    ...owners,
                                    phone_number: e.target.value,
                                })
                            }
                        />
                    </label>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white hover:bg-blue-700 rounded-md px-4 py-2 mt-4 w-full"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}
export default SignUp
// const [showPassword, setShowPassword] = useState(false)
// const [phoneNumber, setPhoneNumber] = useState('')

// const handleShowPassword = () => {
//     setShowPassword(!showPassword)

// const handleFirstNameChange = (e) => {
//     setFirstName(e.target.value)
// }

// const handleLastNameChange = (e) => {
//     setLastName(e.target.value)
// }
// const handleEmailChange = (e) => {
//     setEmail(e.target.value)
// }

// const handlePasswordChange = (e) => {
//     setPassword(e.target.value)
// }

// const handlePhoneNumberChange = (e) => {
//     // Allow only digits to be entered
//     const value = e.target.value.replace(/\D/g, '')
//     setPhoneNumber(value)
