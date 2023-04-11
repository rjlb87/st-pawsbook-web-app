// import Login from './authentication/Login'
import SignUp from './authentication/Signup';
import UserDashboard from './components/UserDashboard';


function App() {
    return (
        <div className="bg-black">
            <div className="flex justify-center items-center h-screen">
                <p className="text-white font-semibold text-4xl"></p>
                <div>
                <SignUp />
                </div>
            </div>
            <UserDashboard />

        </div>
    )
}

export default App