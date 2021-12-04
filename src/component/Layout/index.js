import React, { Children, useEffect, useRef } from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader';
import TempButton from '../tempComp';


const Layout = (props) => {


    const divRef = useRef(null)
    useEffect(() => {
        console.log(divRef)
    }, [])


    return (
        <>
            {/* <div ref={divRef} style={{ margin: 'auto', height: '300px', width: '300px' }}>
                hello world
            </div>
            <TempButton ref={divRef} ></TempButton> */}
            <Header ref={divRef} history={props.history} />
            <div ref={divRef}>
                {props.children}
            </div>
        </>
    )
}

export default Layout;