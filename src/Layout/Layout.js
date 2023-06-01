import React from 'react'
import Footer from '../components/Footer/Footer'
import NavigationBar from '../components/Navbar/Navbar'

const Layout = ({children}) => {
    return (
        <>
            <div style={{marginBottom: '90px'}}>
                <NavigationBar />
            </div>
            <div className="mx-2 mx-lg-5">
                {children}
            </div>
            <div className="mt-5">
                <Footer />
            </div>
        </>
    )
}

export default Layout