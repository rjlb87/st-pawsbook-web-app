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
            window.location = '/user-dashboard'
        } catch (error) {
            console.error(error.message)
        }
    }

    return (
        <div className="bg-gray-800 flex justify-center py-20">
            <div className="sm:w-96 p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl text-gray-800 font-semibold mb-6 text-center pt-3 pb-3">
                    Sign Up
                </h1>
                <form onSubmit={onSubmitForm}>
                    <div className="flex gap-4">
                        <div className="flex-1">
                            <label className="mb-4 block text-xs">
                                First Name
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
                        </div>
                        <div className="flex-1">
                            <label className="mb-4 block text-xs">
                                Last Name
                                <input
                                    className="border-gray-300 border text-xs rounded-md px-3 py-2 w-full mt-1"
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
                        </div>
                    </div>
                    <label className="block mb-4 text-xs">
                        Email
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 w-full text-xs mt-1"
                            type="email"
                            placeholder="name@gmail.com"
                            value={email}
                            onChange={(e) =>
                                setOwners({ ...owners, email: e.target.value })
                            }
                        />
                    </label>
                    <label className="mb-4 block text-xs">
                        Password
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
                        </div>
                    </label>
                    <label className="mb-4 block text-xs">
                        Phone Number
                        <input
                            className="border-gray-300 border rounded-md px-3 py-2 mb-4 block text-xs w-full mt-1"
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
                        className="bg-gray-800 text-white hover:bg-gray-500 rounded-md px-4 py-2 mt-4 w-full"
                    >
                        Sign Up
                    </button>
                    <div className=" text-gray-800 text-xs flex-row text-center pt-6">
                        <p>Already have an account? </p>
                        <button className="font-semibold underline">
                            Sign in
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default SignUp
