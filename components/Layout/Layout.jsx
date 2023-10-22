import React from 'react'
import Navbar from '../Navbar/Navbar'


const Layout = ({children}) => {
    return (
        <div>
            <Navbar />
            {children}
            <footer>Footer</footer>

            <style jsx>
                {`
                    div {
                        background: salmon
                    }
                `}
            </style>
        </div>
    )
}

export default Layout