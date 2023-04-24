import UserDashboard from './components/UserDashboard'
import Dashboard from './common/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
import Signup from './authentication/Signup'
import Signin from './authentication/Signin'
import MainPage from './components/MainPage'
import { FaKaaba } from 'react-icons/fa'
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
                <Route path="/user-dashboard" element={<UserDashboard />} />
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
                <Route path="/main-page" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App

function Layout(props) {
    const { children } = props
    const path = window.location.pathname
    const showNavbar = ['/', '/sign-up', '/sign-in'].includes(path)
    return (
        <>
            {showNavbar && <NavBar />}
            {children}
        </>
    )
}
