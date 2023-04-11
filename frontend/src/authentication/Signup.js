import React, { useState } from 'react'

const SignUpPage = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value)
    }

    const handleLastNameChange = (e) => {
        setLastName(e.target.value)
    }
    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handlePhoneNumberChange = (e) => {
        // Allow only digits to be entered
        const value = e.target.value.replace(/\D/g, '')
        setPhoneNumber(value)
    }

        return (
            <div className="flex justify-center items-center  bg-gray-100">
                <div className="w-full sm:w-96 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
                    <form>
                        <label className="mb-4 block">
                            First Name:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="text"
                                value={firstName}
                                onChange={handleFirstNameChange}
                            />
                        </label>
                        <label className="mb-4 block">
                            Last Name:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="text"
                                value={lastName}
                                onChange={handleLastNameChange}
                            />
                        </label>
                        <label className="block mb-4">
                            Email:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </label>
                        <label className="mb-4 block">
                            Password:
                            <div className="relative">
                                <input
                                    className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10"
                                    type={showPassword ? 'text' : 'password'}
                                    value={password}
                                    onChange={handlePasswordChange}
                                />
                                <button
                                    type="button"
                                    onClick={handleShowPassword}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button>
                            </div>
                        </label>
                        <label className="mb-4 block">
                            Phone Number:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="tel"
                                value={phoneNumber}
                                onChange={handlePhoneNumberChange}
                                pattern="[0-9]*"
                                minLength="10"
                                maxLength="10"
                                placeholder="+63"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white rounded-md px-4 py-2 mt-4 w-full"
                        >Sign Up
                        </button>
                    </form>
                </div>
            </div>
        )
    }
export default SignUpPage
