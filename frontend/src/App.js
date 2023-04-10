// import Login from './authentication/Login'
import Signup from './authentication/Signup';
import UserDashboard from './components/UserDashboard';


import './index.css'
function App() {
    return (
        <div className="bg-black">
            <div className="flex justify-center items-center h-[100vh]">
                <p className="text-white font-semibold text-4xl">Pawsbook 🐾</p>
                <div>
                    <Signup />
                </div>
            </div>
            <UserDashboard />

        </div>
    )
}

export default App