import UserDashboard from './components/UserDashboard'
import Dashboard from './common/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'
import Signup from './authentication/Signup'
import Signin from './authentication/Signin'
import MainPage from './components/MainPage'
function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/UserDashboard" element={<UserDashboard />} />
                <Route path="/Signup" element={<Signup />} />
                <Route path="/Signin" element={<Signin />} />
                <Route path="/MainPage" element={<MainPage />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
