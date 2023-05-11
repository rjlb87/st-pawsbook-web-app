import { BrowserRouter, Routes, Route } from 'react-router-dom'
import UserDashboard from './components/UserDashboard'
import Dashboard from './common/Dashboard'
import NavBar from './common/Navbar'
import Signup from './authentication/Signup'
import Signin from './authentication/Signin'
import DogInfo from './components/DogInfos'
import DogProfiles from './components/DogProfiles'
import MakeAppointment from './components/MakeAppointment'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/user-dashboard" element={<UserDashboard />} />
                <Route path="/sign-up" element={<Signup />} />
                <Route path="/sign-in" element={<Signin />} />
                <Route path="/main-page" element={<DogInfo />} />
                <Route path="/appointments" element={<MakeAppointment />} />
                <Route path="/dog-profiles" element={<DogProfiles />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

// function Layout(props) {
//     const { children } = props
//     const path = window.location.pathname
//     const showNavbar = [
//         '/',
//         '/user-dashboard',
//         '/sign-up',
//         '/sign-in',
//         '/main-page',
//         '/appointments',
//         '/dog-profiles',
//     ].includes(path)
//     return (
//         <>
//             {showNavbar && <NavBar />}
//             {children}
//         </>
//     )
// }
