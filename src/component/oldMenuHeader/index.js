import React, { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './style.css'

function OldMenuHeader(props, ref) {

    const { categories } = useSelector(store => store.category)
    const bgChanger = useRef(null)

    useEffect(() => {
        // if(bgChanger.current.style.hover=="true") {}
        // console.log(bgChanger.current.style)
    })

    // background-color: rgba(0,0,0, 0.4);
    const mouseOverFunc = () => {
        ref.current.style.opacity = "0.5";
        ref.current.style.color = "rgba(1,0,0, 0.1)";
    }

    const mouseLeaveFunc = () => {
        ref.current.style.opacity = "1";
        ref.current.style.color = "rgba(0,0,0, 1)";
    }

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li
                    key={cat.name}>
                    {
                        cat.parentId ? <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a> : <span>{cat.name}</span>
                    }
                    {cat.children.length > 0 ? (cat.parentId ? <ul className="subCatUl">{renderCategories(cat.children)}</ul> : <ul className="subCatUl">{renderCategories(cat.children)}</ul>) : <span style={{ padding: 0, margin: 0 }}></span>}
                </li>)
        }

        return myCategories;
    }

    return (
        <div className="container">
            <div className="menuHeader" >
                <ul className="ml-3" style={{height:'100%'}} ref={bgChanger}
                    onMouseOver={mouseOverFunc}
                    onMouseLeave={mouseLeaveFunc}>
                    {
                        renderCategories(categories)
                    }
                </ul>
                {/* <div ref={bgChanger}
            onMouseOver={mouseOverFunc}
            onMouseLeave={mouseLeaveFunc}
            >
                hell yeah
            </div>

            <button onClick={changeColor}>change below bg</button> */}
            </div>
        </div>

    )   
}

const forwardedOldMenuHeader = React.forwardRef(OldMenuHeader)

export default forwardedOldMenuHeader;