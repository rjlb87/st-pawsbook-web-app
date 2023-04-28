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
        {
            id: 5,
            image: 'https://images.unsplash.com/photo-1608831540955-35094d48694a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=526&q=80',
            title: 'Const',
            breed: 'Shih tzu',
            gender: <IoMdFemale />,
            description: 'I eat everything except you.',
            age: 2,
        },
        {
            id: 6,
            image: 'https://images.unsplash.com/photo-1605244863941-3a3ed921c60d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
            title: 'Summer',
            breed: 'Poodle',
            gender: <IoMdFemale />,
            description: 'I eat everything except you.',
            age: 2,
        },
    ]

    return (
        <div className="flex">
            <SideBar />
            <div className="flex-1"></div>

            <div className="flex flex-wrap justify-center sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 gap-6 gap-y-5">
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
    )
}

export default Dog_info
