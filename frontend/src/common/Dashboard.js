import React from 'react'
import Splash from '../components/Splash'
import About from '../components/About'
import Footer from '../common/Footer'
import Services from '../components/Services'

function Dashboard() {
    return (
        <div>
            <Splash />
            <About />
            <Services />
            <Footer />
        </div>
    )
}
export default Dashboard
