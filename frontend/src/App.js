import Login from './authentication/Login'
import UserDashboard from './components/UserDashboard'

import './index.css'

function App() {
    return (
        <div className="bg-gray-700">
            <div className="flex justify-center items-center h-[100vh]">
                <p className="text-white">Cool Application!!! 🎉</p>
                <div>
                    <Login />
                </div>
            </div>
            <UserDashboard />
        </div>
    )
}

export default App