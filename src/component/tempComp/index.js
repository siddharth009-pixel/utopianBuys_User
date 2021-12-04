import React, { Children, useEffect, useRef } from 'react'
import Header from '../Header'
import MenuHeader from '../MenuHeader';


const TempButton = (props, ref) => {


    const changeColor = () => {
        ref.current.style.backgroundColor = "red"
    }
    return (
        <>
            <button onClick={changeColor}>change vooo</button>
        </>
    )
}


const forwardedTempButton=React.forwardRef(TempButton)

export default forwardedTempButton;