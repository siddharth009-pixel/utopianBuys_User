import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { generatePublicUrl } from '../../urlConfig'
import NewModal from '../Modal'

export default function ProductDetailsModal(props) {

    
    const productModal = useSelector(state => state.productModal)
    const {productDetails }=productModal
  
    const [pic, setPic] = useState(productDetails?productDetails.productPictures[0].img:'')
   
    
   
    const {
        show,
        handleClose,
        onSubmit,
        modalTitle
    } = props
  

    const {
        name,
        price,
        category,
        description,
        productPictures,
        quantity
    } = productDetails
   

    return (
        <>
            {

                console.log('name', name)
            }
            <div style={{ zIndex: 5 }}>
                <NewModal show={show}
                    handleClose={()=>{handleClose();setPic('') }}
                    onSubmit={onSubmit}
                    primaryButton={"BUY NOW"}
                    secondaryButton={"cancel"}
                    body={
                        <section class="sec-product-detail bg0 " style={{ paddingTop: '10px' }}>
                            <div class="container">
                                <div class="row">
                                    <div class="col-md-6 col-lg-7 p-b-30">
                                        <div class="p-l-25 p-r-30 p-lr-0-lg">
                                            <div class="wrap-slick3 flex-sb flex-w">
                                                <div class="wrap-slick3-dots">
                                                {productPictures&&
                                                        productPictures.map(picture => {
                                                            return (
                                                                <>
                                                                    <div class="item-slick3" data-thumb="images/product-detail-02.jpg"
                                                                        style={{ marginBottom: '10px' }}>
                                                                        <div class="wrap-pic-w pos-relative">
                                                                        <img style={{cursor: 'pointer'}} onClick={()=>{setPic(picture.img)}} src={generatePublicUrl(picture.img)} alt="IMG-PRODUCT" />

                                                                        </div>
                                                                    </div>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    {/* <div class="item-slick3" data-thumb="images/product-detail-02.jpg"
                                                        style={{ marginBottom: '10px' }}>
                                                        <div class="wrap-pic-w pos-relative">
                                                            <img src="images/product-detail-02.jpg" alt="IMG-PRODUCT" />
                                                            <a class="flex-c-m  how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href="images/product-detail-02.jpg">
                                                            </a>
                                                        </div>
                                                    </div>
                                              */}

                                                </div>
                                                <div class="slick3 gallery-lb">
                                                    <div class="item-slick3" data-thumb="images/product-detail-01.jpg">
                                                        <div class="wrap-pic-w pos-relative">
                                                            <img src={generatePublicUrl(pic)} alt="IMG-PRODUCT" />
                                                            <a class="flex-c-m size-108 how-pos1 bor0 fs-16 cl10 bg0 hov-btn3 trans-04" href={generatePublicUrl(pic)}>
                                                                <i class="fa fa-expand"></i>
                                                            </a>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="col-md-6 col-lg-5 p-b-30">
                                        <div class="p-r-50 p-t-5 p-lr-0-lg">
                                            <h4 class="mtext-105 cl2 js-name-detail p-b-14">
                                                {name}
                                            </h4>
                                            <span class="mtext-106 cl2"> {price}</span>
                                            <p class="stext-102 cl3 p-t-23">
                                                {description}
                                            </p>

                                            <div class="p-t-33">
                                                <div class="flex-w flex-r-m p-b-10">
                                                    <div class="size-203 flex-c-m respon6">Size</div>
                                                    <div class="size-204 respon6-next">
                                                        <div class="rs1-select2 bor8 bg0">
                                                            <div class="dropDownSelect2">
                                                                <select class="js-select2 select2-hidden-accessible" name="time" tabindex="-1">
                                                                    <option>Choose an option</option>
                                                                    <option>Size S</option>
                                                                    <option>Size M</option>
                                                                    <option>Size L</option>
                                                                    <option>Size XL</option>
                                                                </select><span class="select2 select2-container select2-container--default select2-container--below" dir="ltr" style={{ width: '141.2px' }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-time-cm-container"><span class="select2-selection__rendered" id="select2-time-cm-container" title="Size S">Size S</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-w flex-r-m p-b-10">
                                                    <div class="size-203 flex-c-m respon6">Color</div>
                                                    <div class="size-204 respon6-next">
                                                        <div class="rs1-select2 bor8 bg0">
                                                            <select class="js-select2 select2-hidden-accessible" name="time" tabindex="-1" aria-hidden="true">
                                                                <option>Choose an option</option>
                                                                <option>Red</option>
                                                                <option>Blue</option>
                                                                <option>White</option>
                                                                <option>Grey</option>
                                                            </select><span class="select2 select2-container select2-container--default select2-container--below select2-container--focus" dir="ltr" style={{ width: '141.2px' }}><span class="selection"><span class="select2-selection select2-selection--single" role="combobox" aria-haspopup="true" aria-expanded="false" tabindex="0" aria-labelledby="select2-time-lq-container"><span class="select2-selection__rendered" id="select2-time-lq-container" title="Red">Red</span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span></span></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>
                                                            <div class="dropDownSelect2"></div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex-w flex-r-m p-b-10">
                                                    <div class="size-204 flex-w flex-m respon6-next">
                                                        <div class="wrap-num-product flex-w m-r-20 m-tb-10">
                                                            <div class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m">
                                                                <i class="fs-16 zmdi zmdi-minus"></i>
                                                            </div>
                                                            <input class="mtext-104 cl3 txt-center num-product" type="number" name="num-product" value="1" />
                                                            <div class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m">
                                                                <i class="fs-16 zmdi zmdi-plus"></i>
                                                            </div>
                                                        </div>
                                                        <button class="flex-c-m stext-101 cl0 size-101 bg1 bor1 hov-btn1 p-lr-15 trans-04 js-addcart-detail">
                                                            Add to cart
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="flex-w flex-m p-l-100 p-t-40 respon7">
                                                <div class="flex-m bor9 p-r-10 m-r-11">
                                                    <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 js-addwish-detail tooltip100" data-tooltip="Add to Wishlist">
                                                        <i class="zmdi zmdi-favorite"></i>
                                                    </a>
                                                </div>
                                                <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Facebook">
                                                    <i class="fa fa-facebook"></i>
                                                </a>
                                                <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Twitter">
                                                    <i class="fa fa-twitter"></i>
                                                </a>
                                                <a href="#" class="fs-14 cl3 hov-cl1 trans-04 lh-10 p-lr-5 p-tb-2 m-r-8 tooltip100" data-tooltip="Google Plus">
                                                    <i class="fa fa-google-plus"></i>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    } />


            </div>

        </>)
}
