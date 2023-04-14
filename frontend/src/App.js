// import SignUp from './authentication/Signup'
// import UserDashboard from './components/UserDashboard'
import Dashboard from './common/Dashboard'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './common/NavBar'

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<Dashboard />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
