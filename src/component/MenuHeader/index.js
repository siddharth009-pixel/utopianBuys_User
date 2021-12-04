import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './style.css'
import samplePic from '../../asset/Home.png'

const cats = [
    {
        "_id": "60d4b68571f09d5b6096482f",
        "name": "ELectronics",
        "slug": "ELectronics",
        "parentId": null,
        "type": "store",
        "children": [
            {
                "_id": "60d4b69b71f09d5b60964830",
                "name": "Phone",
                "slug": "Phone",
                "parentId": "60d4b68571f09d5b6096482f",
                "type": "undefined",
                "children": [
                ]
            },
            {
                "_id": "60d4b6c471f09d5b60964831",
                "name": "Laptop",
                "slug": "Laptop",
                "parentId": "60d4b68571f09d5b6096482f",
                "type": "store",
                "children": [
                ]
            }
        ]
    },
    {
        "_id": "60d4b70b71f09d5b60964832",
        "name": "clothes",
        "slug": "clothes",
        "children": [
            {
                "_id": "60d4b92871f09d5b6096483d",
                "name": "men",
                "slug": "men",
                "parentId": "60d4b70b71f09d5b60964832",
                "children": [
                ]
            }
        ]
    },
    {
        "_id": "60df524743a9932508c07b64",
        "name": "Cat2",
        "slug": "Cat2",
        "parentId": null,
        "type": "store",
        "children": [
        ]
    },
    {
        "_id": "60df5ae733321b0ee8be1cc6",
        "name": "Cat20",
        "slug": "Cat20",
        "parentId": null,
        "type": "undefined",
        "children": [
            {
                "_id": "60df5b1b33321b0ee8be1cc7",
                "name": "SubCat20",
                "slug": "SubCat20",
                "parentId": "60df5ae733321b0ee8be1cc6",
                "type": "store",
                "children": [
                ]
            },
            {
                "_id": "60df5b2e33321b0ee8be1cc8",
                "name": "SubCat21",
                "slug": "SubCat21",
                "parentId": "60df5ae733321b0ee8be1cc6",
                "type": "undefined",
                "children": [
                    {
                        "_id": "60df5b3d33321b0ee8be1cc9",
                        "name": "SubSubCat20",
                        "slug": "SubSubCat20",
                        "parentId": "60df5b2e33321b0ee8be1cc8",
                        "type": "undefined",
                        "children": [
                        ]
                    }
                ]
            }
        ]
    }
]

export default function MenuHeader() {

    const { categories } = useSelector(store => store.category)

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat.name}>
                    {
                        cat.parentId ? <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a> : (cat.children.length > 0 ? <span>{cat.name}</span> : <span><a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a></span>)
                    }
                    {cat.children.length > 0 ? (<ul>{renderCategories(cat.children)}</ul>) : <span style={{ padding: 0, margin: 0 }}></span>}
                </li>)
        }

        return myCategories;
    }

    const renderCategoriesNew = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat.name}>
                    {
                        cat.parentId ?
                            (
                                <div>
                                    <img style={{ height: '100px', width: '100%' }} src='https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/13/858676-shraddhakapoor-081419.jpg' />
                                    {/* <img src={samplePic} /> */}
                                    <a className="nav-link" href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a>
                                </div>
                            ) :
                            <a className="nav-link" href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a>
                    }
                    {
                        cat.children.length > 0 &&
                        (<ul className="subCatUl">{renderCategoriesNew(cat.children)}</ul>)
                    }

                </li>
            )
        }


        return myCategories;
    }


    return (
        <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
            <div className="container headerDiv">

                <ul className="navbar-nav" className="mainCatUl">

                    {
                        renderCategoriesNew(categories)
                    }

                </ul>

            </div>
        </nav>
    )
}
