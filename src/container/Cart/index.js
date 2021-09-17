import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import Footer from '../../component/Footer'
import { CartItem } from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartItems } from '../../actions/cart.action'
const cartData = [
    { name: "Dresses in the Winter", price: `23` },
    { name: "Dresses in the Winter", price: `23` },
    { name: "Dresses in the Winter", price: `23` },
    { name: "Dresses in the Winter", price: `23` },

]

export default function Cart(props) {

    console.log('helllooo');
    const cart = useSelector((state) => state.cart);
    const auth = useSelector((state) => state.auth);
    const [cartItems, setCartItems] = useState(cart.cartItems);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
    });

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
            console.log('sdfghjrtyucvbn');
            setCartItems(cart.cartItems);
        }
    }, [auth.authenticate]);

    const onQuantityIncrement = (_id, qty) => {
        const { name, img, price } = cartItems[_id];
        dispatch(addToCart({ _id, name, img, price, qty }, 1));
    };

    const onQuantityDecrement = (_id, qty) => {
        const { name, img, price } = cartItems[_id];
        dispatch(addToCart({ _id, name, img, price, qty }, -1));
    };

    if (props.withoutHeaderAndFooter) {
        return (
            <div>
                {Object.keys(cartItems).map((key, index) => {
                    return (
                        <CartItem
                            key={index}
                            cartItem={cartItems[key]}
                            onQuantityInc={onQuantityIncrement}
                            onQuantityDec={onQuantityDecrement}
                        />
                    );
                })}
            </div>
        );
    }




    return (
        <Layout>

            <div>
                <div class="container">
                    <div class="bread-crumb flex-w p-l-25 p-r-15 p-t-30 p-lr-0-lg">
                        <a href="index-2.html" class="stext-109 cl8 hov-cl1 trans-04">
                            Home
                            <i class="fa fa-angle-right m-l-9 m-r-10" aria-hidden="true"></i>
                        </a>
                        <span class="stext-109 cl4"> Shoping Cart </span>
                    </div>
                </div>
            </div>
            <form class="bg0 p-t-75 p-b-85">
                <div class="container">
                    <div class="row">
                        <div class="col-lg-10 col-xl-7 m-lr-auto m-b-50">
                            <div class="m-l-25 m-r--38 m-lr-0-xl">
                                <div class="wrap-table-shopping-cart">
                                    <div className="row extraTable">
                                        <div class="column-1 col col-12 col-md-4" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Product</div>
                                        <div class="column-2 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>name</div>
                                        <div class="column-3 col col-12 col-md-1" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Price</div>
                                        <div class="column-4 col col-12 col-md-3" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Quantity</div>
                                        <div class="column-5 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Total</div>
                                    </div>

                                    <div className="row">
                                        {Object.keys(cartItems).map((key, index) => {
                                            return (
                                                <CartItem
                                                    key={index}
                                                    cartItem={cartItems[key]}
                                                    onQuantityInc={onQuantityIncrement}
                                                    onQuantityDec={onQuantityDecrement}
                                                />
                                            );
                                        })}

                                    </div>
                                    <div
                                        class="flex-w flex-sb-m bor15 p-t-18 p-b-15 p-lr-40 p-lr-15-sm"
                                    >
                                        <div class="flex-w flex-m m-r-20 m-tb-5">
                                            <input
                                                class="stext-104 cl2 plh4 size-117 bor13 p-lr-20 m-r-10 m-tb-5"
                                                type="text"
                                                name="coupon"
                                                placeholder="Coupon Code"
                                            />
                                            <div
                                                class="flex-c-m stext-101 cl2 size-118 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-5"
                                            >
                                                Apply coupon
                                            </div>
                                        </div>
                                        <div
                                            class="flex-c-m stext-101 cl2 size-119 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer m-tb-10"
                                        >
                                            Update Cart
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-sm-10 col-lg-7 col-xl-5 m-lr-auto m-b-50">
                            <div
                                class="bor10 p-lr-40 p-t-30 p-b-40 m-l-63 m-r-40 m-lr-0-xl p-lr-15-sm"
                            >
                                <h4 class="mtext-109 cl2 p-b-30">Cart Totals</h4>
                                <div class="flex-w flex-t bor12 p-b-13">
                                    <div class="size-208">
                                        <span class="stext-110 cl2"> Total Items: </span>
                                    </div>
                                    <div class="size-209">
                                        <span class="mtext-110 cl2"> {Object.keys(cart.cartItems).reduce((qty, key) => {
                                            return qty + cart.cartItems[key].qty;
                                        }, 0)} </span>
                                    </div>
                                </div>
                                <div class="flex-w flex-t bor12 p-b-13">
                                    <div class="size-208">
                                        <span class="stext-110 cl2"> Subtotal: </span>
                                    </div>
                                    <div class="size-209">
                                        <span class="mtext-110 cl2"> {Object.keys(cart.cartItems).reduce((price, key) => {
                                            return (
                                                price + cart.cartItems[key].price * cart.cartItems[key].qty
                                            );
                                        }, 0)} </span>
                                    </div>
                                </div>
                                <div class="flex-w flex-t bor12 p-t-15 p-b-30">
                                    <div class="size-208 w-full-ssm">
                                        <span class="stext-110 cl2"> Shipping: </span>
                                    </div>
                                    <div class="size-209 p-r-18 p-r-0-sm w-full-ssm">
                                        <p class="stext-111 cl6 p-t-2">
                                            There are no shipping methods available. Please double check
                                            your address, or contact us if you need any help.
                                        </p>
                                        <div class="p-t-15">
                                            <span class="stext-112 cl8"> Calculate Shipping </span>
                                            <div class="rs1-select2 rs2-select2 bor8 bg0 m-b-12 m-t-9">

                                                <div class="dropDownSelect2">
                                                    <select class="js-select2 " name="time">
                                                        <option>Select a country...</option>
                                                        <option>USA</option>
                                                        <option>UK</option>
                                                    </select>
                                                </div>
                                                <div class="dropDownSelect2"></div>
                                            </div>
                                            <div class="bor8 bg0 m-b-12">
                                                <input
                                                    class="stext-111 cl8 plh3 size-111 p-lr-15"
                                                    type="text"
                                                    name="state"
                                                    placeholder="State /  country"
                                                />
                                            </div>
                                            <div class="bor8 bg0 m-b-22">
                                                <input
                                                    class="stext-111 cl8 plh3 size-111 p-lr-15"
                                                    type="text"
                                                    name="postcode"
                                                    placeholder="Postcode / Zip"
                                                />
                                            </div>
                                            <div class="flex-w">
                                                <div
                                                    class="flex-c-m stext-101 cl2 size-115 bg8 bor13 hov-btn3 p-lr-15 trans-04 pointer"
                                                >
                                                    Update Totals
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="flex-w flex-t p-t-27 p-b-33">
                                    <div class="size-208">
                                        <span class="mtext-101 cl2"> Total: </span>
                                    </div>
                                    <div class="size-209 p-t-1">
                                        <span class="mtext-110 cl2"> $79.65 </span>
                                    </div>
                                </div>
                                <button
                                    class="flex-c-m stext-101 cl0 size-116 bg3 bor14 hov-btn3 p-lr-15 trans-04 pointer"
                                >
                                    Proceed to Checkout
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

            </form>

            <Footer></Footer>
        </Layout>
    )
}


//     <div className="col col-12 cart-product-container">
//         <div class="row" style={{ align: 'center' }}>
//             <div class="column-1 col col-12 col-md-4">
//                 <div class="how-itemcart1" style={{ height: '100%', width: '60%', margin: 'auto' }}>
//                     <div style={{ margin: '10px' }}>
//                         <img src="images/item-cart-04.jpg" style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} alt="IMG" />
//                     </div>
//                 </div>
//             </div>
//             <div class="column-2 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>{cart.name}</div>
//             <div class="column-3 col col-12 col-md-1" style={{ margin: 'auto', padding: '7px', textAlign: 'center', fontSize: '16px' }}>price</div>
//             <div class="column-4 col col-12 col-md-3" style={{ margin: 'auto', padding: '7px' }}>
//                 <div class="wrap-num-product flex-w" style={{ margin: 'auto' }}>
//                     <div
//                         class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
//                         style={{ textAlign: 'center' }}
//                     >
//                         <i class="fs-16 zmdi zmdi-minus"></i>
//                     </div>
//                     {/* <input
//                         class="mtext-104 cl3 txt-center num-product"
//                         type="number"
//                         name="num-product1"
//                         value="1"
//                     /> */}
//                     <div
//                      class=" cl8 trans-04 flex-c-m cl3 txt-center num-product"
//                     >
//                         1
//                     </div>
//                     <div
//                         class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
//                     >
//                         <i class="fs-16 zmdi zmdi-plus"></i>
//                     </div>
//                 </div>
//             </div>
//             <div class="column-5 col col-md-2" style={{ margin: 'auto', textAlign: 'center' }}>{cart.price}</div>
//         </div>

//     </div>
// ))}