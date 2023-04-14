import NavBar from './NavBar'
import UserDashboard from '../components/UserDashboard'
import SignUp from '../authentication/Signup'

export default function Dashboard() {
    return (
        <div>
            <NavBar />
            <UserDashboard />
            <SignUp />
        </div>
    )
}
