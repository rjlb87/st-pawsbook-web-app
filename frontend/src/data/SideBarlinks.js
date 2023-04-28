import Calendar from '../assets/Calendar.png'
import Chart_fill from '../assets/Chart_fill.png'
import Chart from '../assets/Chart.png'
import Chat from '../assets/Chat.png'
import control from '../assets/control.png'
import Folder from '../assets/Folder.png'
import Search from '../assets/Search.png'
import Setting from '../assets/Setting.png'
import User from '../assets/User.png'

export const Menus = [
    {
        id: 1,
        title: 'Dashboard',
        src: Chart_fill,
        path: '/Appointments',
    },
    {
        id: 2,
        title: 'Inbox',
        src: Chat,
        path: '/',
    },
    {
        id: 3,
        title: 'Accounts',
        src: User,
        path: '/',
    },
    {
        id: 4,
        title: 'Appointments',
        src: Calendar,
        path: '/appointments',
    },
    {
        id: 5,
        title: 'Search',
        src: Search,
        path: '/',
    },
    {
        id: 6,
        title: 'Settings',
        src: Setting,
        path: '/',
    },
]
