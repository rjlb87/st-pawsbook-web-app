import React, { useState } from 'react'
import { createOwners } from '../services/UserService'
import { Link } from 'react-router-dom'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'

const SignUp = () => {
    const [owners, setOwners] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        phone_number: '',
        showPassword: false, // To toggle password visibility
    })

    const {
        first_name,
        last_name,
        email,
        password,
        phone_number,
        showPassword,
    } = owners

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

    const togglePasswordVisibility = () => {
        setOwners((prevState) => ({
            ...prevState,
            showPassword: !prevState.showPassword,
        }))
    }

    return (
        <div className="bg-gray-200 min-h-screen flex items-center justify-center p-8">
            <div className="w-full max-w-4xl p-8 shadow-md rounded-md bg-white flex items-center gap-20">
                <div className="flex-1">
                    <h1 className="text-2xl font-semibold mb-6 text-yellow-400 uppercase">
                        Welcome to PawsBook!
                    </h1>
                    <p className="text-md  text-gray-600">
                        The ultimate web app for breeders and pet enthusiasts!
                        Whether you're a passionate breeder or simply adore our
                        furry friends, PAWSBOOK is here to connect you with
                        like-minded individuals and provide a seamless breeding
                        experience. Join our vibrant community to showcase your
                        breeding achievements, connect with other breeders, and
                        discover a plethora of adorable furry companions. With
                        user-friendly registration and intuitive features,
                        you'll be sharing your love for pets in no time.
                    </p>
                </div>
                <div className="flex-1 bg-gray-100 p-8 rounded-lg">
                    <h2 className="text-2xl text-gray-800 font-semibold mb-6 text-center uppercase">
                        Register
                    </h2>
                    <form
                        onSubmit={onSubmitForm}
                        className="flex flex-col gap-4"
                    >
                        <label className="block text-xs">
                            First Name
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
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
                        <label className="block text-xs">
                            Last Name
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
                        <label className="block text-xs">
                            Email
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="email"
                                placeholder="johndoe@example.com"
                                value={email}
                                onChange={(e) =>
                                    setOwners({
                                        ...owners,
                                        email: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label className="block text-xs">
                            Phone Number
                            <input
                                className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1"
                                type="tel"
                                placeholder="Enter your phone number"
                                value={phone_number}
                                onChange={(e) =>
                                    setOwners({
                                        ...owners,
                                        phone_number: e.target.value,
                                    })
                                }
                            />
                        </label>
                        <label className="block text-xs">
                            Password
                            <div className="relative">
                                <input
                                    className="border-gray-300 border rounded-md px-3 py-2 w-full mt-1 pr-10"
                                    type={showPassword ? 'text' : 'password'}
                                    placeholder="******"
                                    value={password}
                                    onChange={(e) =>
                                        setOwners((prevState) => ({
                                            ...prevState,
                                            password: e.target.value,
                                        }))
                                    }
                                />
                                <div
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 cursor-pointer"
                                    onClick={togglePasswordVisibility}
                                >
                                    {showPassword ? (
                                        <AiOutlineEyeInvisible size={20} />
                                    ) : (
                                        <AiOutlineEye size={20} />
                                    )}
                                </div>
                            </div>
                        </label>
                        <button
                            type="submit"
                            className="bg-gray-800 text-white hover:bg-gray-500 rounded-md px-4 py-2 mt-4 w-full"
                        >
                            Submit
                        </button>
                        <div className="text-gray-800 text-xs flex-row text-center pt-6">
                            <p>Already have an account? </p>
                            <Link
                                to="/sign-in"
                                className="font-semibold underline"
                            >
                                Sign in
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default SignUp
