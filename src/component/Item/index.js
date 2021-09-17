import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import ProductDetailsModal from '../ProductDetailsModal';
import {addProductModalAction} from '../../actions/productModal.action'
import './style.css'


export default function Item(props) {

    const { name, price, image, slug, _id,productDetails } = props
    // const [proDetailsModal, setProDetailsModal] = useState(false)
    const dispatch = useDispatch()

    const handlesubmit = (e) => {
        e.preventDefault();
        console.log(e);
    }


    // const onSubmit = () => {

    // }


    const tempFunction = () => {
        console.log(productDetails)
    }

    return (
        <>

            <div style={{ height: '100%', width: '100%' }}
            >
                <div class="block2" style={{ height: '100%', width: '100%' }}>
                    <div class="block2-pic hov-img0">
                        <div className="productImgContainer">

                            <img src={image} alt="IMG-PRODUCT" />
                        </div>

                        <button
                            onClick={(e) => {
                                tempFunction();
                                dispatch(addProductModalAction({productDetails:productDetails}));
                                // setProDetailsModal(true)
                                handlesubmit(e)
                            }}
                            class="block2-btn flex-c-m stext-103 cl2 size-102 bg0 bor2 hov-btn1 p-lr-15 trans-04 js-show-modal1"
                        >
                            Quick View
                        </button>
                    </div>
                    <div class="block2-txt flex-w flex-t p-t-14">
                        <div class="block2-txt-child1 flex-col-l"
                            style={{ width: '60%' }}
                        >
                            <Link
                                // to="/productdetail"
                                to={`/${slug}/${_id}/p`}
                                class="stext-104 cl4 hov-cl1 trans-04 js-name-b2 p-b-6"
                            >
                                {name}
                            </Link>
                            <span class="stext-105 cl3"> ${price} </span>
                        </div>
                        <div class="block2-txt-child2 flex-r p-t-3"

                            style={{ justifyContent: 'center' }}>
                            <a
                                href="#"
                                class="btn-addwish-b2 dis-block pos-relative js-addwish-b2"
                            >
                                <img
                                    class=""
                                    src="images/icons/icon-heart-01.png"
                                    alt="ICON"
                                />
                                <img
                                    class="icon-heart2 dis-block trans-04 ab-t-l"
                                    src="images/icons/icon-heart-02.png"
                                    alt="ICON"
                                />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <ProductDetailsModal show={proDetailsModal}
                handleClose={() => { setProDetailsModal(false) }}
                onSubmit={onSubmit}
                productDetails={productDetails}
            />
 */}

        </>
    )
}
