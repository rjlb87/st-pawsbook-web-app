import SideBar from './SideBar'
import { IoMdMale, IoMdFemale } from './Icons'
import Card from './MainPage'

const Dog_info = () => {
    const cards = [
        {
            id: 1,
            image: 'https://images.unsplash.com/photo-1608096299210-db7e38487075?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
            title: 'Talia',
            breed: 'Shih tzu',
            age: 3,
            gender: <IoMdFemale />,
            description: 'Super maldita and sweet.',
        },
        {
            id: 2,
            image: 'https://images.unsplash.com/photo-1543320317-15188058b450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Mon',
            breed: 'Pug',
            gender: <IoMdMale />,
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            id: 3,
            image: 'https://images.unsplash.com/photo-1658347124285-281deec3dee8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80',
            title: 'Valley',
            breed: 'Corgy',
            gender: <IoMdFemale />,
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            id: 4,
            image: 'https://images.unsplash.com/photo-1529906920574-628dc1e49f5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=867&q=80',
            title: 'Tilly',
            breed: 'Golden Retriever',
            gender: <IoMdFemale />,
            description: 'I eat everything except you.',
            age: 2,
        },
    ]

    return (
        <>
            <div className="flex flex-col bg-gray-100">
                <div className="flex">
                    <SideBar />
                    <div className="flex-1"></div>
                    <div className=" px-4 mt-20 pl-10">
                        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-10">
                            Register Your Dog
                        </button>

                        <div className="flex flex-row justify-center ">
                            <input
                                className="border border-gray-400 bg-white h-10 px-5 pr-10 rounded-full text-sm focus:outline-none"
                                type="text"
                                placeholder="Search"
                            />
                            <button className="bg-blue-500 hover:bg-blue-700 text-white ml-2 py-2 px-4 rounded">
                                Search
                            </button>
                        </div>
                        <div className="flex flex-wrap sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-x-6 gap-y-6 pt-8">
                            {cards.map((card, index) => (
                                <div
                                    className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 sm:max-w-sm"
                                    key={index}
                                >
                                    <Card {...card} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Dog_info
