// import Login from './authentication/Login'
import Signup from './authentication/Signup';
import UserDashboard from './components/UserDashboard';


import './index.css'
function App() {
    return (
        <div className="bg-black">
            <div className="flex justify-center items-center h-screen">
                <p className="text-white font-semibold text-4xl"></p>
                <div>
                    <Signup />
                </div>
            </div>
            <UserDashboard />

        </div>
    )
}

export default App