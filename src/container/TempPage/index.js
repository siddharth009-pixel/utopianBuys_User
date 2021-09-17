import React from 'react'
import NewModal from '../../component/Modal'
import ProductDetailsModal from '../../component/ProductDetailsModal'

export default function index() {
    const handleClose = () => { }
    const onSubmit = () => { }

    return (
        <>


{/* 

            <div className="wrap-header-cart js-panel-cart" style={{right:'20px'}} >
                
                <div className="header-cart flex-col-l p-l-65 p-r-25" >
                    <div style={{right:0}}>
                    <div className="header-cart-title flex-w flex-sb-m p-b-8">
                        <span className="mtext-103 cl2"> Your Cart </span>
                        <div className="fs-35 lh-10 cl2 p-lr-5 pointer hov-cl1 trans-04 js-hide-cart">
                            <i className="zmdi zmdi-close"></i>
                        </div>
                    </div>
                    <div className="header-cart-content flex-w js-pscroll ps" style={{position: "relative" ,overflow: "hidden",width:'260px'}}>
                        <ul className="header-cart-wrapitem w-full">
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-01.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        White Shirt Pleat
                                    </a>
                                    <span className="header-cart-item-info"> 1 x $19.00 </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-02.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Converse All Star
                                    </a>
                                    <span className="header-cart-item-info"> 1 x $39.00 </span>
                                </div>
                            </li>
                            <li className="header-cart-item flex-w flex-t m-b-12">
                                <div className="header-cart-item-img">
                                    <img src="images/item-cart-03.jpg" alt="IMG" />
                                </div>
                                <div className="header-cart-item-txt p-t-8">
                                    <a href="#" className="header-cart-item-name m-b-18 hov-cl1 trans-04">
                                        Nixon Porter Leather
                                    </a>
                                    <span className="header-cart-item-info"> 1 x $17.00 </span>
                                </div>
                            </li>
                        </ul>
                        <div className="w-full">
                            <div className="header-cart-total w-full p-tb-40">Total: $75.00</div>
                            <div className="header-cart-buttons flex-w w-full">
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-r-8 m-b-10">
                                    View Cart
                                </a>
                                <a href="shoping-cart.html" className="flex-c-m stext-101 cl0 size-107 bg3 bor2 hov-btn3 p-lr-15 trans-04 m-b-10">
                                    Check Out
                                </a>
                            </div>
                        </div>
                        <div className="ps__rail-x" style={{ left: 0, bottom: 0 }}><div className="ps__thumb-x" tabIndex="0" style={{ left: 0, width: 0 }}></div></div><div className="ps__rail-y" style={{top: 0, right: 0}}><div className="ps__thumb-y" tabIndex="0" style={{top: 0, height: 0}}></div></div></div>
               
                    </div>
                </div>
            </div> */}

            
            <ProductDetailsModal show={true}
            handleClose={handleClose}
            onSubmit={onSubmit}
        /> 

        </>)
}
