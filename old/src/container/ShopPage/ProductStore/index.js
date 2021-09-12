import React, { useState } from "react"
import { useEffect } from "react"
import { NavLink } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { getProductsBySlug } from "../../../actions/product.action"
import { generatePublicUrl } from "../../../urlConfig"
import './style.css'
import { Link } from "react-router-dom"
import Item from '../../../component/Item'
import ProductDetailsModal from "../../../component/ProductDetailsModal"
import { removeProductModalAction } from "../../../actions/productModal.action"


const ProductStore = (props) => {

    const product = useSelector(store => store.product)
    const [proDetailsModal, setProDetailsModal] = useState(false)

    const productModal = useSelector(state => state.productModal)
    const {productDetails,show}=productModal
    
    const dispatch = useDispatch();
    useEffect(async () => {
        const { slug } = props.match.params;
        dispatch(getProductsBySlug(slug));
    }, [])

    const onSubmit = () => {

    }



    return (
        <>
            
               { show&& <ProductDetailsModal show={show}
                    handleClose={() => 
                        {
                            setProDetailsModal(false) 
                            dispatch(removeProductModalAction())
                        }}
                    onSubmit={onSubmit}
                    // productDetails={productDetails}
                />}

                {
                    console.log(productModal)
                }
                
                <div>

                <section class="bg0 p-b-10" >
                    <div>
                        <div class="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}>
                            {
                                product.products.map((product, key) => (
                                    <div style={{ display: 'block', width: '350px', height: '350px' }}>

                                        <div
                                            // to={`/${product.slug}/${product._id}/p`}
                                            style={{ display: "block", width: '100%', height: '90%', margin: '10px 10px' }}
                                        >





                                            <Item key={key} name={product.name}
                                                price={product.price}
                                                slug={product.slug}
                                                _id={product._id}
                                                productDetails={{
                                                    name: product.name,
                                                    price: product.price,
                                                    category: product.category,
                                                    description: product.description,
                                                    productPictures: product.productPictures,
                                                    quantity: product.quantity
                                                }}
                                                image={generatePublicUrl(product.productPictures[0].img)}
                                            ></Item>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>

                    </div>
                </section>
                <div class="flex-c-m flex-w w-full p-t-10 p-b-30">
                    <a
                        href="#"
                        class="flex-c-m stext-101 cl5 size-103 bg2 bor1 hov-btn1 p-lr-15 trans-04"
                    >
                        Load More
                    </a>
                </div>









                {/* <div className="card">
                    <div className="cardHeader">
                        <div>All products</div>
                        <button>view all</button>
                    </div>
                    <div style={{ display: "flex" }}>
                        {
                            product.products.map((product) => {
                                return (
                                    <Link
                                        className="productContainer"
                                        style={{ display: "block" }}
                                        to={`/${product.slug}/${product._id}/p`}
                                    >
                                        <div className="productImgContainer">
                                            <img src={generatePublicUrl(product.productPictures[0].img)}></img>
                                        </div>
                                        <div className="productInfo">
                                            <span className="productRating">4.4</span>
                                            <span>3300</span>
                                        </div>
                                        <div className="productName">{product.name}</div>
                                        <div className="price">{product.price}</div>
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
                {
                    Object.keys(product.productsByPrice).map((key, index) => {
                        return (
                            <>
                                {
                                    Object.keys(product.productsByPrice[key]).length > 0 ?
                                        <div className="card">
                                            <div className="cardHeader">
                                                <div>{key}</div>
                                                <button>view all</button>
                                            </div>
                                            <div style={{ display: "flex" }}>
                                                {
                                                    product.productsByPrice[key].map((product) => {
                                                        return (
                                                            <div className="productContainer">
                                                                <div className="productImgContainer">
                                                                    <img src={generatePublicUrl(product.productPictures[0].img)}></img>
                                                                </div>
                                                                <div className="productInfo">
                                                                    <span className="productRating">4.4</span>
                                                                    <span>3300</span>
                                                                </div>
                                                                <div className="productName">{product.name}</div>
                                                                <div className="price">{product.price}</div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                        : null
                                }
                            </>
                        )

                    })
                } */}
            </div>
        </>
    )
}

export default ProductStore