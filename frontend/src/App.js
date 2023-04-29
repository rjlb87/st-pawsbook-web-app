import UserDashboard from './components/UserDashboard'
import Dashboard from './common/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
import Signup from './authentication/Signup'
import Signin from './authentication/Signin'
import DogInfo from './components/DogInfos'

import Appointments from './components/Appointments'
// import { FaKaaba } from 'react-icons/fa'
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path="/"
                    element={
                        <Layout>
                            <Dashboard />
                        </Layout>
                    }
                />
                <Route
                    path="/user-dashboard"
                    element={
                        <Layout>
                            <UserDashboard />
                        </Layout>
                    }
                />
                <Route
                    path="/sign-up"
                    element={
                        <Layout>
                            <Signup />
                        </Layout>
                    }
                />
                <Route
                    path="/sign-in"
                    element={
                        <Layout>
                            <Signin />
                        </Layout>
                    }
                />
                <Route
                    path="/main-page"
                    element={
                        <Layout>
                            <DogInfo />
                        </Layout>
                    }
                />
                {/* <Route
                    path="/appointments"
                    element={
                        <Layout>
                            <Appointments />
                        </Layout>
                    }
                /> */}
            </Routes>
        </BrowserRouter>
    )
}

export default App

function Layout(props) {
    const { children } = props
    const path = window.location.pathname
    const showNavbar = [
        '/',
        '/user-dashboard',
        '/sign-up',
        '/sign-in',
        '/main-page',
        // '/Appointments',
    ].includes(path)
    return (
        <>
            {showNavbar && <NavBar />}
            {children}
        </>
    )
}
