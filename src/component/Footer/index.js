import React from 'react'
import { FaFacebook, FaInstagram, FaPinterest, FaYoutube } from 'react-icons/fa';
import { IconContext } from "react-icons";
export default function index() {
    return (
		<footer class="section-footer border-top">
		<div class="container">
			<section class="footer-top  padding-y">
				<div class="row">
					<aside class="col-md-4 col-12">
						<article class="mr-md-4">
							<h5 class="title">Contact us</h5>
							<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. </p>
							<ul class="list-icon">
								<li> <i class="icon fa fa-map-marker"> </i>542 Fake Street, Cityname 10021 Netheerlends </li>
								<li> <i class="icon fa fa-envelope"> </i> info@example.com</li>
								<li> <i class="icon fa fa-phone"> </i> (800) 060-0730, (800) 060-0730</li>
								<li> <i class="icon fa fa-clock"> </i>Mon-Sat 10:00pm - 7:00pm</li>
							</ul>
						</article>
					</aside>
					<aside class="col-md col-6">
						<h5 class="title">Information</h5>
						<ul class="list-unstyled">
							<li> <a href="#">About us</a></li>
							<li> <a href="#">Career</a></li>
							<li> <a href="#">Find a store</a></li>
							<li> <a href="#">Rules and terms</a></li>
							<li> <a href="#">Sitemap</a></li>
						</ul>
					</aside>
					<aside class="col-md col-6">
						<h5 class="title">My Account</h5>
						<ul class="list-unstyled">
							<li> <a href="#">Contact us</a></li>
							<li> <a href="#">Money refund</a></li>
							<li> <a href="#">Order status</a></li>
							<li> <a href="#">Shipping info</a></li>
							<li> <a href="#">Open dispute</a></li>
						</ul>
					</aside>
					<aside class="col-md-4 col-12">
						<h5 class="title">Newsletter</h5>
						<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer in feugiat lorem. </p>
						
						<form class="form-inline mb-3">
							<input type="text" placeholder="Email" class="form-control" name=""/>
							<button class="btn ml-2 btn-warning"> Subscribe</button>
						</form>
	
						<p class="mb-">Follow us on social media</p>
						<div>
							<a href="#" class="">
							<IconContext.Provider value={{ size: 25 ,color: 'red' }}>
                                  <FaInstagram></FaInstagram>
                                </IconContext.Provider>
							</a>
							<a href="#" class="m-2">
							<IconContext.Provider value={{ size: 25 }}>
                                  <FaFacebook></FaFacebook>
                                </IconContext.Provider>
							</a>
							<a href="#" class="m-2">
							<IconContext.Provider value={{ size: 25 ,color: 'red'}}>
                                  <FaPinterest></FaPinterest>
                                </IconContext.Provider>
							</a>
							<a href="#" class="m-2">
							<IconContext.Provider value={{ size: 25,color: 'red'}}>
                                  <FaYoutube></FaYoutube>
                                </IconContext.Provider>
							</a>
						</div>
	
					</aside>
				</div>
			</section>	
	
			<section class="footer-bottom border-top row">
				<div class="col-md-6">
					<p class="mb-0">
						<a href="#" >Terms and Conditions</a> | 
						<a href="#" class="ml-2">Privacy</a> | 
						<a href="#" class="ml-2">Cookies</a>
					</p>
				</div>
				<div class="col-md-6 text-md-right">
					<i class="fab fa-lg fa-cc-visa"></i>
					<i class="fab fa-lg fa-cc-paypal"></i>
					<i class="fab fa-lg fa-cc-mastercard"></i>
				</div>
			</section>
		</div>
	</footer>
	// <footer class="bg3 p-t-75 p-b-32">
	// 	<div class="container">
	// 		<div class="row">
	// 			<div class="col-sm-6 col-lg-3 p-b-50">
	// 				<h4 class="stext-301 cl0 p-b-30">
	// 					Categories
	// 				</h4>
	// 				<ul>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Women
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Men
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Shoes
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Watches
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 			<div class="col-sm-6 col-lg-3 p-b-50">
	// 				<h4 class="stext-301 cl0 p-b-30">
	// 					Help
	// 				</h4>
	// 				<ul>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Track Order
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Returns
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							Shipping
	// 						</a>
	// 					</li>
	// 					<li class="p-b-10">
	// 						<a href="#" class="stext-107 cl7 hov-cl1 trans-04">
	// 							FAQs
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 			<div class="col-sm-6 col-lg-3 p-b-50">
	// 				<h4 class="stext-301 cl0 p-b-30">
	// 					GET IN TOUCH
	// 				</h4>
	// 				<p class="stext-107 cl7 size-201">
	// 					Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us
	// 					on (+1) 96 716 6879
	// 				</p>
	// 				<div class="p-t-27">
	// 					<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
	// 						<i class="fa fa-facebook"></i>
	// 					</a>
	// 					<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
	// 						<i class="fa fa-instagram"></i>
	// 					</a>
	// 					<a href="#" class="fs-18 cl7 hov-cl1 trans-04 m-r-16">
	// 						<i class="fa fa-pinterest-p"></i>
	// 					</a>
	// 				</div>
	// 			</div>
	// 			<div class="col-sm-6 col-lg-3 p-b-50">
	// 				<h4 class="stext-301 cl0 p-b-30">
	// 					Newsletter
	// 				</h4>
	// 				<form>
	// 					<div class="wrap-input1 w-full p-b-4">
	// 						<input class="input1 bg-none plh1 stext-107 cl7" type="text" name="email"
	// 							placeholder="email@example.com" />
	// 						<div class="focus-input1 trans-04"></div>
	// 					</div>
	// 					<div class="p-t-18">
	// 						<button class="flex-c-m stext-101 cl0 size-103 bg1 bor1 hov-btn2 p-lr-15 trans-04">
	// 							Subscribe
	// 						</button>
	// 					</div>
	// 				</form>
	// 			</div>
	// 		</div>
	// 		<div class="p-t-40">
	// 			<div class="flex-c-m flex-w p-b-18">
	// 				<a href="#" class="m-all-1">
	// 					<img src="images/icons/icon-pay-01.png" alt="ICON-PAY" />
	// 				</a>
	// 				<a href="#" class="m-all-1">
	// 					<img src="images/icons/icon-pay-02.png" alt="ICON-PAY" />
	// 				</a>
	// 				<a href="#" class="m-all-1">
	// 					<img src="images/icons/icon-pay-03.png" alt="ICON-PAY" />
	// 				</a>
	// 				<a href="#" class="m-all-1">
	// 					<img src="images/icons/icon-pay-04.png" alt="ICON-PAY" />
	// 				</a>
	// 				<a href="#" class="m-all-1">
	// 					<img src="images/icons/icon-pay-05.png" alt="ICON-PAY" />
	// 				</a>
	// 			</div>
	// 			<p class="stext-107 cl6 txt-center">

	// 				Copyright@ 2020 |All rights reserved by Pelagios Art. 

	// 			</p>
	// 		</div>
	// 	</div>
	// </footer>
    )
}
