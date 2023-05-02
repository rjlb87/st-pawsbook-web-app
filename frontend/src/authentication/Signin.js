import React, { useState } from 'react'
import { ownerSignin } from '../services/SigninService'
import { useNavigate } from 'react-router-dom'

function Signin() {
    const navigate = useNavigate()
    const ownersData = { email: '', password: '' }
    const [userData, setUserData] = useState(ownersData)
    console.log('sign in ni siya', userData)

    const handleChange = (e) => {
        const { name, value } = e.target
        setUserData((previous) => {
            return { ...previous, [name]: value }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            ownerSignin(userData).then((res) => {
                if (JSON.stringify(res) !== '{}') {
                    sessionStorage.setItem('jwt', res[1].jwt)
                    localStorage.setItem('data', JSON.stringify(res[0]))
                    const itemsStorage = localStorage.getItem('data')
                    console.log(
                        'HAHAHAH CHICKEN nuggets',
                        JSON.parse(itemsStorage)
                    )
                } else {
                    console.log('User does not exist')
                }
            })
        } catch (error) {
            console.log('Error:', error)
        }
    }

    return (
        <div className="bg-gray-800 dark:bg-white pt-10">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Sign in to your account
                        </h1>
                        <form
                            className="space-y-4 md:space-y-6"
                            action="sign-up"
                            onClick={handleSubmit}
                            onChange={handleChange}
                        >
                            <div>
                                <label
                                    for="email"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Your email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    placeholder="name@company.com"
                                    required=""
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div>
                                <label
                                    for="password"
                                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="••••••••"
                                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    required=""
                                    onChange={handleChange}
                                ></input>
                            </div>

                            <button
                                type="submit"
                                className="w-full text-white bg-gray-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                                onClick={() => navigate('/main-page')}
                            >
                                Sign in
                            </button>
                            <p className=" text-center text-sm font-light text-gray-500 dark:text-gray-400">
                                Don’t have an account yet?{' '}
                                <button className=" text-center font-medium text-primary-600 hover:underline dark:text-primary-500">
                                    Sign up
                                </button>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signin
