import React from 'react'
import { useSelector } from 'react-redux';
import './style.css'

export default function MenuHeader() {

    const { categories } = useSelector(store => store.category)

    const renderCategories = (categories) => {
        let myCategories = [];
        for (let cat of categories) {
            myCategories.push(
                <li key={cat.name} >
                    {
                        cat.parentId ? <a href={`/${cat.slug}?cid=${cat._id}&type=${cat.type}`}>{cat.name}</a> : <span>{cat.name}</span>
                    }
                    {cat.children.length > 0 ? (<ul>{renderCategories(cat.children)}</ul>) : <span style={{ padding: 0, margin: 0 }}></span>}
                </li>)
        }

        return myCategories;
    }

    return (
        <>



            <div class="flex-w p-b-10" >
                <div class="flex-w flex-l-m filter-tope-group m-tb-10" style={{ width:'100%'}} >

                    <div className="menuHeader">
                        <ul>
                            {
                                renderCategories(categories)
                            }
                        </ul>


                    </div>

                    {/* 

                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5 how-active1"
                    data-filter="*"
                >
                    All Products
                </button>
                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                    data-filter=".women"
                >
                    Women
                </button>
                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                    data-filter=".men"
                >
                    Men
                </button>
                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                    data-filter=".bag"
                >
                    Bag
                </button>
                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                    data-filter=".shoes"
                >
                    Shoes
                </button>
                <button
                    class="stext-106 cl6 hov1 bor3 trans-04 m-r-32 m-tb-5"
                    data-filter=".watches"
                >
                    Watches
                </button>
            </div>
            <div class="flex-w flex-c-m m-tb-10">
                <div
                    class="flex-c-m stext-106 cl6 size-104 bor4 pointer hov-btn3 trans-04 m-r-8 m-tb-4 js-show-filter"
                >
                    <i
                        class="icon-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-filter-list"
                    ></i>
                    <i
                        class="icon-close-filter cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"
                    ></i>
                    Filter
                </div>
                <div
                    class="flex-c-m stext-106 cl6 size-105 bor4 pointer hov-btn3 trans-04 m-tb-4 js-show-search"
                >
                    <i
                        class="icon-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-search"
                    ></i>
                    <i
                        class="icon-close-search cl2 m-r-6 fs-15 trans-04 zmdi zmdi-close dis-none"
                    ></i>
                    Search
                </div> */}
                </div>
            </div>
        </>
    )
}
