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
	const { productDetails, show } = productModal

	const dispatch = useDispatch();
	useEffect(async () => {
		const { slug } = props.match.params;
		dispatch(getProductsBySlug(slug));
	}, [])

	const onSubmit = () => {

	}



	return (
		<>

			{show && <ProductDetailsModal show={show}
				handleClose={() => {
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

				<section class="section-content pt-3">
					<div class="container">

						<div class="row">
							<aside class="col-md-3 d-none d-md-block">

								<div class="card">
									<article class="filter-group">
										<header class="card-header">
											<a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true"
												class="">
												<i class="icon-control fa fa-chevron-down"></i>
												<h6 class="title">Product type</h6>
											</a>
										</header>
										<div class="filter-content collapse show" id="collapse_1">
											<div class="card-body">
												<form class="pb-3">
													<div class="input-group">
														<input type="text" class="form-control" placeholder="Search" />
														<div class="input-group-append">
															<button class="btn btn-light" type="button"><i
																class="fa fa-search"></i></button>
														</div>
													</div>
												</form>

												<ul class="list-menu">
													<li><a href="#">People </a></li>
													<li><a href="#">Watches </a></li>
													<li><a href="#">Cinema </a></li>
													<li><a href="#">Clothes </a></li>
													<li><a href="#">Home items </a></li>
													<li><a href="#">Animals</a></li>
													<li><a href="#">People </a></li>
												</ul>

											</div>
										</div>
									</article>
									<article class="filter-group">
										<header class="card-header">
											<a href="#" data-toggle="collapse" data-target="#collapse_2" aria-expanded="true"
												class="">
												<i class="icon-control fa fa-chevron-down"></i>
												<h6 class="title">Brands </h6>
											</a>
										</header>
										<div class="filter-content collapse show" id="collapse_2" >
											<div class="card-body">
												<label class="custom-control custom-checkbox">
													<input type="checkbox" checked="" class="custom-control-input" />
													<div class="custom-control-label">Mercedes
														<b class="badge badge-pill badge-light float-right">120</b>
													</div>
												</label>
												<label class="custom-control custom-checkbox">
													<input type="checkbox" checked="" class="custom-control-input" />
													<div class="custom-control-label">Toyota
														<b class="badge badge-pill badge-light float-right">15</b>
													</div>
												</label>
												<label class="custom-control custom-checkbox">
													<input type="checkbox" checked="" class="custom-control-input" />
													<div class="custom-control-label">Mitsubishi
														<b class="badge badge-pill badge-light float-right">35</b>
													</div>
												</label>
												<label class="custom-control custom-checkbox">
													<input type="checkbox" checked="" class="custom-control-input" />
													<div class="custom-control-label">Nissan
														<b class="badge badge-pill badge-light float-right">89</b>
													</div>
												</label>
												<label class="custom-control custom-checkbox">
													<input type="checkbox" class="custom-control-input" />
													<div class="custom-control-label">Honda
														<b class="badge badge-pill badge-light float-right">30</b>
													</div>
												</label>
											</div>
										</div>
									</article>
									<article class="filter-group">
										<header class="card-header">
											<a href="#" data-toggle="collapse" data-target="#collapse_3" aria-expanded="true"
												class="">
												<i class="icon-control fa fa-chevron-down"></i>
												<h6 class="title">Price range </h6>
											</a>
										</header>
										<div class="filter-content collapse show" id="collapse_3" >
											<div class="card-body">
												<input type="range" class="custom-range" min="0" max="100" name="" />
												<div class="form-row">
													<div class="form-group col-md-6">
														<label>Min</label>
														<input class="form-control" placeholder="$0" type="number" />
													</div>
													<div class="form-group text-right col-md-6">
														<label>Max</label>
														<input class="form-control" placeholder="$1,0000" type="number" />
													</div>
												</div>
												<button class="btn btn-block btn-primary">Apply</button>
											</div>
										</div>
									</article>
									<article class="filter-group">
										<header class="card-header">
											<a href="#" data-toggle="collapse" data-target="#collapse_4" aria-expanded="true"
												class="">
												<i class="icon-control fa fa-chevron-down"></i>
												<h6 class="title">Sizes </h6>
											</a>
										</header>
										<div class="filter-content collapse show" id="collapse_4" >
											<div class="card-body">
												<label class="checkbox-btn">
													<input type="checkbox" />
													<span class="btn btn-light"> XS </span>
												</label>

												<label class="checkbox-btn">
													<input type="checkbox" />
													<span class="btn btn-light"> SM </span>
												</label>

												<label class="checkbox-btn">
													<input type="checkbox" />
													<span class="btn btn-light"> LG </span>
												</label>

												<label class="checkbox-btn">
													<input type="checkbox" />
													<span class="btn btn-light"> XXL </span>
												</label>
											</div>
										</div>
									</article>
									<article class="filter-group">
										<header class="card-header">
											<a href="#" data-toggle="collapse" data-target="#collapse_5" aria-expanded="false"
												class="">
												<i class="icon-control fa fa-chevron-down"></i>
												<h6 class="title">More filter </h6>
											</a>
										</header>
										<div class="filter-content collapse in" id="collapse_5" >
											<div class="card-body">
												<label class="custom-control custom-radio">
													<input type="radio" name="myfilter_radio" checked=""
														class="custom-control-input" />
													<div class="custom-control-label">Any condition</div>
												</label>

												<label class="custom-control custom-radio">
													<input type="radio" name="myfilter_radio" class="custom-control-input" />
													<div class="custom-control-label">Brand new </div>
												</label>

												<label class="custom-control custom-radio">
													<input type="radio" name="myfilter_radio" class="custom-control-input" />
													<div class="custom-control-label">Used items</div>
												</label>

												<label class="custom-control custom-radio">
													<input type="radio" name="myfilter_radio" class="custom-control-input" />
													<div class="custom-control-label">Very old</div>
												</label>
											</div>
										</div>
									</article>
								</div>

							</aside>
							<main class="col-md-9">

								<header class="border-bottom mb-4 pb-3">
									<div class="form-inline">
										{/* <span class="mr-md-auto">32 Items found </span> */}
										<select class="mr-2 form-control">
											<option>Latest items</option>
											<option>Trending</option>
											<option>Most Popular</option>
											<option>Cheapest</option>
										</select>
										{/* <div class="btn-group">
											<a href="#" class="btn btn-outline-secondary" data-toggle="tooltip" title=""
												data-original-title="List view">
												<i class="fa fa-bars"></i></a>
											<a href="#" class="btn  btn-outline-secondary active" data-toggle="tooltip" title=""
												data-original-title="Grid view">
												<i class="fa fa-th"></i></a>
										</div> */}
									</div>
								</header>


								<section class="bg0 p-b-10" >
									<div>
										{/* <div class="row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-evenly' }}> */}
										<div class="row">
											{
												product.products.map((product, key) => (
													<div class="col-md-4">

														<div
															// to={`/${product.slug}/${product._id}/p`}
															style={{ display: "block", width: '100%', height: '90%' }}
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
																history={props.history}
																image={generatePublicUrl(product.productPictures[0].img)}
															></Item>
														</div>
													</div>
												))
											}
										</div>

									</div>
								</section>



								{/* <div class="row">
						<div class="col-md-4">
							<figure class="card card-product-grid">
								<div class="img-wrap">
									<span class="badge badge-danger"> NEW </span>
									<img src="images/items/1.jpg" />
									<a class="btn-overlay" onClick={(e)=>{e.preventDefault();}}><i class="fa fa-search-plus"></i> Quick view</a>
								</div>
								<figcaption class="info-wrap">
									<div class="fix-height">
										<a href="#" class="title">Great item name goes here</a>
										<div class="price-wrap mt-2">
											<span class="price">$1280</span>
											<del class="price-old">$1980</del>
										</div>
									</div>
									<a href="#" class="btn btn-block btn-primary">Add to cart </a>
								</figcaption>
							</figure>
						</div> 

						
					</div> */}


								<nav class="mt-4" aria-label="Page navigation sample">
									<ul class="pagination">
										<li class="page-item disabled"><a class="page-link" href="#">Previous</a></li>
										<li class="page-item active"><a class="page-link" href="#">1</a></li>
										<li class="page-item"><a class="page-link" href="#">2</a></li>
										<li class="page-item"><a class="page-link" href="#">3</a></li>
										<li class="page-item"><a class="page-link" href="#">Next</a></li>
									</ul>
								</nav>

							</main>

						</div>

					</div>
				</section>










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