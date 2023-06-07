import SideBar from './SideBar'
import { useEffect, useState } from 'react'
import { getAllPublicDogProfiles } from '../services/DogService'
import { createDogs } from '../services/DogService'
import Card from './MainPage'

const Dog_info = () => {
    const [dogs, setDogs] = useState([])

    const [showModal, setShowModal] = useState(false)

    const toggleModal = (e) => {
        setShowModal(!showModal)
    }
    const onSubmitForm = async (e) => {
        e.preventDefault()

        try {
            console.log('hahaha ano ang data', formData)
            await createDogs(formData)
            // window.location = '/user-dashboard'
            setFormData({
                owner_id: '',
                name: '',
                breed: '',
                age: '',
                color: '',
                size: '',
                date_of_birth: '',
                gender: '',
                description: '',
            })
        } catch (error) {
            console.error(error.message)
        }
    }
    const itemsStorage = localStorage.getItem('data')
    const userData = JSON.parse(itemsStorage)
    console.log('ano ang id', userData)
    const [formData, setFormData] = useState({
        owner_id: userData ? userData.id : '',
        image: 'https://images.unsplash.com/photo-1529906920574-628dc1e49f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
        name: '',
        breed: '',
        age: '',
        color: '',
        size: '',
        date_of_birth: '',
        gender: '',
        description: '',
    })
    function handleChange(event) {
        console.log('ano ka', event.target.name)
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        })
    }
    useEffect(() => {
        const fetchDogs = async () => {
            try {
                const itemsStorage = localStorage.getItem('data')
                const userData = JSON.parse(itemsStorage)
                // console.log('hahahahh ano ka', userData.id)
                const doggo = await getAllPublicDogProfiles(userData.id)
                // console.log('hahahah ano laman ni doggo', doggo)
                setDogs(doggo)
            } catch (error) {
                console.error(error.message)
            }
        }

        fetchDogs()
    }, [])
    return (
        <>
            <div className="w-full bg-gray-800 pt-20">
                <div className="flex flex-wrap justify-center gap-20 pt-8 pb-10 mx-auto">
                    {dogs.map((card, index) => (
                        <div
                            className="w-full sm:w-1/2 md:w-1/2 lg:w-1/2 xl:w-1/2 max-w-sm"
                            key={index}
                        >
                            <Card {...card} />
                        </div>
                    ))}
                </div>
            </div>

            {showModal && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div className="flex py-20 px-40 text-xs items-center justify-center">
                        <div className=" rounded-lg text-white w-1/2">
                            <form
                                onSubmit={onSubmitForm}
                                className="bg-white  shadow-md rounded px-8 text-xs pt-6 pb-8 mb-4 flex flex-wrap justify-between"
                            >
                                <div className="mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="block text-xs text-gray-700 font-bold mb-2"
                                        htmlFor="name"
                                    >
                                        Dog Name
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="name"
                                        type="text"
                                        placeholder="Enter dog name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=" mb-4 flex-grow w-full md:w-1/3 px-2 text-xs">
                                    <label
                                        className=" text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="color"
                                    >
                                        Color
                                    </label>
                                    <input
                                        className=" text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="color"
                                        type="text"
                                        placeholder="Enter dog color"
                                        name="color"
                                        value={formData.color}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className=" text-xs mb-4 flex-grow w-full md:w-1/3 pl-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="size"
                                    >
                                        Size
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="size"
                                        name="size"
                                        value={formData.size}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select dog size
                                        </option>
                                        <option value="small">Small</option>
                                        <option value="medium">Medium</option>
                                        <option value="large">Large</option>
                                    </select>
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="breed"
                                    >
                                        Breed
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="breed"
                                        name="breed"
                                        value={formData.breed}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">Select a breed</option>
                                        <option value="Golden Retriever">
                                            Golden Retriever
                                        </option>
                                        <option value="Labrador Retriever">
                                            Labrador Retriever
                                        </option>
                                        <option value="German Shepherd">
                                            German Shepherd
                                        </option>
                                        <option value="Poodle">Poodle</option>
                                        <option value="Bulldog">Bulldog</option>
                                        <option value="Chihuahua">
                                            Chihuahua
                                        </option>
                                        <option value="Dachshund">
                                            Dachshund
                                        </option>
                                        <option value="Boxer">Boxer</option>
                                        <option value="Siberian Husky">
                                            Siberian Husky
                                        </option>
                                        <option value="Doberman Pinscher">
                                            Doberman Pinscher
                                        </option>
                                    </select>
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 px-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="age"
                                    >
                                        Age
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="age"
                                        type="number"
                                        placeholder="Enter dog age"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pl-2">
                                    <label
                                        className="block text-gray-700 font-bold mb-2"
                                        htmlFor="date_of_birth"
                                    >
                                        Date of Birth
                                    </label>
                                    <input
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="date_of_birth"
                                        type="date"
                                        placeholder="Enter dog's date of birth"
                                        name="date_of_birth"
                                        value={formData.date_of_birth}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="text-xs mb-4 flex-grow w-full md:w-1/3 pr-2">
                                    <label
                                        className="text-xs block text-gray-700 font-bold mb-2"
                                        htmlFor="gender"
                                    >
                                        Gender
                                    </label>
                                    <select
                                        className="text-xs shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        id="gender"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option value="">
                                            Select dog gender
                                        </option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                </div>
                                <div className="flex items-center px-2 mt-2">
                                    <input
                                        type="checkbox"
                                        id="vaccinated"
                                        name="vaccinated"
                                        value={formData.description}
                                        class="rounded-full text-primary-600 focus:ring-primary-500 border-gray-300"
                                    ></input>
                                    <label
                                        for="vaccinated"
                                        class="ml-2 text-gray-700"
                                    >
                                        Vaccinated
                                    </label>
                                </div>
                                <div class="flex items-center mt-2">
                                    <input
                                        type="checkbox"
                                        id="pcci-registered"
                                        name="pcci-registered"
                                        value={formData.description}
                                        class="rounded-full text-primary-600 focus:ring-primary-500 border-gray-300"
                                    ></input>
                                    <label
                                        for="pcci-registered"
                                        class="ml-2 text-gray-700"
                                    >
                                        PCCI Registered
                                    </label>
                                </div>
                                <div className="text-xs mb-4 w-full flex justify-center pt-10">
                                    <div className="text-center">
                                        <button
                                            className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                            type="submit"
                                        >
                                            Register
                                        </button>
                                        <button
                                            className="text-xs bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mx-2"
                                            type="submit"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}
export default Dog_info
