import NavBar from './NavBar'
import UserDashboard from '../components/UserDashboard'
import SignUp from '../authentication/Signup'
import Splash from '../components/Splash'

export default function Dashboard() {
    return (
        <div>
            <NavBar />
            <Splash />
            <UserDashboard />
            <SignUp />
        </div>
    )
}
