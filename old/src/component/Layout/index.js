import React, { Children, useEffect } from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader';


const Layout = (props) => {
    return (
        <>
            <Header/>

            {props.children}
        </>
    )
}

export default Layout;