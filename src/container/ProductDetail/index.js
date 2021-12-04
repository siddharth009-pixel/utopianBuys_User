import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../../component/Layout'
import Footer from '../../component/Footer'
import { Link } from 'react-router-dom'
import { generatePublicUrl } from '../../urlConfig'
import { getProductDetailsById } from '../../actions/product.action'
import { addToCart } from '../../actions/cart.action'
import { FaCartArrowDown } from 'react-icons/fa';


export default function ProductDetail(props) {

    const dispatch = useDispatch()
    const product = useSelector(state => state.product)

    const { productDetails } = product
    // const [pic, setPic] = useState(productDetails?productDetails.productPictures[0].img:'')
    const [pic, setPic] = useState('')

    const addToCartButton = () => {
        const { _id, name, price } = product.productDetails;
        const img = product.productDetails.productPictures[0].img;
        console.log({ _id, name, price, img })
        dispatch(addToCart({ _id, name, price, img }))
        props.history.push(`/cart`)
    }

    useEffect(() => {
        const { product, productId } = props.match.params
        const payload = {
            productId
        }
        dispatch(getProductDetailsById(payload))
    }, [])




    if (Object.keys(product.productDetails).length == 0) {
        return null
    }

    const {
        name,
        price,
        category,
        description,
        productPictures,
        quantity
    } = product.productDetails


    const funct1 = () => {

        console.log('hooo')

        return (
            <>
                <div class="bor10 m-t-50 p-t-43 p-b-40">

                    <div class="tab01">

                        <ul class="nav nav-tabs" role="tablist">
                            <li class="nav-item p-b-10">
                                <a class="nav-link active" data-toggle="tab" href="#description" role="tab">Description</a>
                            </li>
                            <li class="nav-item p-b-10">
                                <a class="nav-link" data-toggle="tab" href="#information" role="tab">Additional information</a>
                            </li>
                            <li class="nav-item p-b-10">
                                <a class="nav-link" data-toggle="tab" href="#reviews" role="tab">Reviews (1)</a>
                            </li>
                        </ul>

                        <div class="tab-content p-t-43">

                            <div class="tab-pane fade show active" id="description" role="tabpanel">
                                <div class="how-pos2 p-lr-15-md">
                                    <p class="stext-102 cl6">
                                        Aenean sit amet gravida nisi. Nam fermentum est felis, quis feugiat nunc fringilla sit amet. Ut in blandit ipsum. Quisque luctus dui at ante aliquet, in hendrerit lectus interdum. Morbi elementum sapien rhoncus pretium maximus. Nulla lectus enim, cursus et elementum sed, sodales vitae eros. Ut ex quam, porta consequat interdum in, faucibus eu velit. Quisque rhoncus ex ac libero varius molestie. Aenean tempor sit amet orci nec iaculis. Cras sit amet nulla libero. Curabitur dignissim, nunc nec laoreet consequat, purus nunc porta lacus, vel efficitur tellus augue in ipsum. Cras in arcu sed metus rutrum iaculis. Nulla non tempor erat. Duis in egestas nunc.
                                    </p>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="information" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                        <ul class="p-lr-28 p-lr-15-sm">
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Weight
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    0.79 kg
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Dimensions
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    110 x 33 x 100 cm
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Materials
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    60% cotton
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Color
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    Black, Blue, Grey, Green, Red, White
                                                </span>
                                            </li>
                                            <li class="flex-w flex-t p-b-7">
                                                <span class="stext-102 cl3 size-205">
                                                    Size
                                                </span>
                                                <span class="stext-102 cl6 size-206">
                                                    XL, L, M, S
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            <div class="tab-pane fade" id="reviews" role="tabpanel">
                                <div class="row">
                                    <div class="col-sm-10 col-md-8 col-lg-6 m-lr-auto">
                                        <div class="p-b-30 m-lr-15-sm">

                                            <div class="flex-w flex-t p-b-68">
                                                <div class="wrap-pic-s size-109 bor0 of-hidden m-r-18 m-t-6">
                                                    <img src="images/avatar-01.jpg" alt="AVATAR" />
                                                </div>
                                                <div class="size-207">
                                                    <div class="flex-w flex-sb-m p-b-17">
                                                        <span class="mtext-107 cl2 p-r-20">
                                                            Ariana Grande
                                                        </span>
                                                        <span class="fs-18 cl11">
                                                            <i class="zmdi zmdi-star"></i>
                                                            <i class="zmdi zmdi-star"></i>
                                                            <i class="zmdi zmdi-star"></i>
                                                            <i class="zmdi zmdi-star"></i>
                                                            <i class="zmdi zmdi-star-half"></i>
                                                        </span>
                                                    </div>
                                                    <p class="stext-102 cl6">
                                                        Quod autem in homine praestantissimum atque optimum est, id deseruit. Apud ceteros autem philosophos
                                                    </p>
                                                </div>
                                            </div>

                                            <form class="w-full">
                                                <h5 class="mtext-108 cl2 p-b-7">
                                                    Add a review
                                                </h5>
                                                <p class="stext-102 cl6">
                                                    Your email address will not be published. Required fields are marked *
                                                </p>
                                                <div class="flex-w flex-m p-t-50 p-b-23">
                                                    <span class="stext-102 cl3 m-r-16">
                                                        Your Rating
                                                    </span>
                                                    <span class="wrap-rating fs-18 cl11 pointer">
                                                        <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                        <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                        <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                        <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                        <i class="item-rating pointer zmdi zmdi-star-outline"></i>
                                                        <input class="dis-none" type="number" name="rating" />
                                                    </span>
                                                </div>
                                                <div class="row p-b-25">
                                                    <div class="col-12 p-b-5">
                                                        <label class="stext-102 cl3" for="review">Your review</label>
                                                        <textarea class="size-110 bor8 stext-102 cl2 p-lr-20 p-tb-10" id="review" name="review"></textarea>
                                                    </div>
                                                    <div class="col-sm-6 p-b-5">
                                                        <label class="stext-102 cl3" for="name">Name</label>
                                                        <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="name" type="text" name="name" />
                                                    </div>
                                                    <div class="col-sm-6 p-b-5">
                                                        <label class="stext-102 cl3" for="email">Email</label>
                                                        <input class="size-111 bor8 stext-102 cl2 p-lr-20" id="email" type="text" name="email" />
                                                    </div>
                                                </div>
                                                <button class="flex-c-m stext-101 cl0 size-112 bg7 bor11 hov-btn3 p-lr-15 trans-04 m-b-10">
                                                    Submit
                                                </button>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </>
        )
    }

    return (

        <Layout>
            <section class="section-content padding-y bg">

                <div class="container">


                    <div class="card">
                        <div class="row no-gutters">
                            <aside class="col-md-6">
                                <article class="gallery-wrap">
                                    <div class="img-big-wrap">
                                        <a href="#"><img src={pic.length == '' ? productPictures[0].img : pic} /></a>
                                    </div>
                                    <div class="thumbs-wrap">
                                        {productPictures &&
                                            productPictures.map(picture => {
                                                return (
                                                    <>
                                                        <a href="#" class="item-thumb">
                                                            <img src={picture.img} style={{ cursor: 'pointer' }} onClick={(e) => { setPic(picture.img) }} alt="IMG-PRODUCT" /> </a>
                                                    </>
                                                )
                                            })
                                        }
                                    </div>
                                </article>
                            </aside>
                            <main class="col-md-6 border-left">
                                <article class="content-body">

                                    <h2 class="title">{name}</h2>

                                    <div class="rating-wrap my-3">
                                        <ul class="rating-stars">
                                            <li style={{ width: '80%' }} class="stars-active">
                                                <img src="bootstrap-ecommerce-html/images/icons/stars-active.svg" alt="" />
                                            </li>
                                            <li>
                                                <img src="bootstrap-ecommerce-html/images/icons/starts-disable.svg" alt="" />
                                            </li>
                                        </ul>
                                        <small class="label-rating text-muted">132 reviews</small>
                                        <small class="label-rating text-success"> <i class="fa fa-clipboard-check"></i> 154
                                            orders </small>
                                    </div>

                                    <div class="mb-3">
                                        <var class="price h4">{price}</var>
                                        <span class="text-muted"></span>
                                    </div>

                                    <p>Virgil Abloh’s Off-White is a streetwear-inspired collection that continues to break away
                                        from the conventions of mainstream fashion. Made in Italy, these black and brown
                                        Odsy-1000 low-top sneakers.</p>

                                    <dl class="row">
                                        <dt class="col-sm-3">Model#</dt>
                                        <dd class="col-sm-9">Odsy-1000</dd>

                                        <dt class="col-sm-3">Color</dt>
                                        <dd class="col-sm-9">Brown</dd>

                                        <dt class="col-sm-3">Delivery</dt>
                                        <dd class="col-sm-9">Russia, USA, and Europe </dd>
                                    </dl>

                                    <hr />
                                    <div class="row">
                                        <div class="form-group col-md flex-grow-0">
                                            <label>Quantity</label>
                                            <div class="input-group mb-3 input-spinner">
                                                <div class="input-group-prepend">
                                                    <button class="btn btn-light" type="button" id="button-plus"> + </button>
                                                </div>
                                                <input type="text" class="form-control" value="1" />
                                                <div class="input-group-append">
                                                    <button class="btn btn-light" type="button" id="button-minus"> − </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="form-group col-md">
                                            <label>Select size</label>
                                            <div class="mt-2">
                                                <label class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" name="select_size" checked=""
                                                        class="custom-control-input" />
                                                    <div class="custom-control-label">Small</div>
                                                </label>

                                                <label class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" name="select_size" class="custom-control-input" />
                                                    <div class="custom-control-label">Medium</div>
                                                </label>

                                                <label class="custom-control custom-radio custom-control-inline">
                                                    <input type="radio" name="select_size" class="custom-control-input" />
                                                    <div class="custom-control-label">Large</div>
                                                </label>

                                            </div>
                                        </div>
                                    </div>
                                    {/* <a href="#" class="btn  btn-primary"> Buy now </a> */}
                                    <a class="btn rounded-pill" style={{backgroundColor:'rgb(113,127,224)'}}> <FaCartArrowDown /> <span class="text" style={{color:"white"}} onClick={(e) => { e.preventDefault(); addToCartButton() }}>Add to cart</span> </a>
                                </article>
                            </main>
                        </div>
                    </div>



                </div>



            </section>

        </Layout>


    )
}
