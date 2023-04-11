import React, { useState } from 'react'
import { createOwners } from '../services/UserService'

const SignUp = () => {
    const [owners, setOwners] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phoneNumber: '',
    })

    const { firstName, lastName, email, password, phoneNumber } = owners

    const onSubmitForm = async (e) => {
        e.preventDefault()
        if (!firstName || !lastName || !email || !password || !phoneNumber) {
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
            <div className="flex justify-center items-center  bg-gray-100">
                <div className="w-full sm:w-96 p-6 bg-white rounded-lg shadow-md">
                    <h1 className="text-3xl font-semibold mb-6 text-center">Sign Up</h1>
                    <form
                        onSubmit={onSubmitForm}
                        >
                        <label className="mb-4 block">
                            First Name:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="text"
                                value={firstName}
                                onChange={(e) => setOwners({...owners, firstName: e.target.value})
                                }
                            />
                        </label>
                        <label className="mb-4 block">
                            Last Name:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="text"
                                value={lastName}
                                onChange={(e) => setOwners({...owners, lastName: e.target.value})
                            }                            />
                        </label>
                        <label className="block mb-4">
                            Email:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="email"
                                value={email}
                                onChange={(e) => setOwners({...owners, email: e.target.value})
                            }                            />
                        </label>
                        <label className="mb-4 block">
                            Password:
                            <div className="relative">
                                <input
                                    className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10"
                                    // type={showPassword ? 'text' : 'password'}
                                    type="password"
                                    placeholder='Password'
                                    value={password}
                                    onChange={(e) => setOwners({...owners, password: e.target.value})
                                }                                />
                                {/* <button
                                    type="button"
                                    onClick={handleShowPassword}
                                    className="absolute top-1/2 right-2 transform -translate-y-1/2"
                                >
                                    {showPassword ? 'Hide' : 'Show'}
                                </button> */}
                            </div>
                        </label>
                        <label className="mb-4 block">
                            Phone Number:
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="tel"
                                value={phoneNumber}
                                onChange={(e) => setOwners({...owners, phoneNumber: e.target.value}) }
                            // }   pattern="[0-9]*"
                            //     minLength="10"
                            //     maxLength="10"
                            //     placeholder="+63"
                            />
                        </label>
                        <button
                            type="submit"
                            className="bg-blue-500 text-white hover:bg-blue-700 rounded-md px-4 py-2 mt-4 w-full"
                        >Sign Up
                        </button>
                    </form>
                </div>
            </div>
        )
}
export default SignUp;
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