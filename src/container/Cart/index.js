import React, { useEffect, useState } from 'react'
import Layout from '../../component/Layout'
import Footer from '../../component/Footer'
import { CartItem } from './CartItem'
import { useDispatch, useSelector } from 'react-redux'
import { addToCart, getCartItems, removeItemFromCart } from '../../actions/cart.action'
import { Link } from 'react-router-dom'
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
    const [cartItems, setCartItems] = useState([]);
    const dispatch = useDispatch();

    useEffect(() => {
        setCartItems(cart.cartItems);
        console.log(cart.cartItems);
    }, [cart.cartItems]);

    useEffect(() => {
        if (auth.authenticate) {
            dispatch(getCartItems());
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

            <>


                <form class="bg0 p-t-75 p-b-85">
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-10 col-xl-9 m-lr-auto m-b-50 ">
                                <div class="m-l-25 m-r--38 m-lr-0-xl">
                                    <div class="wrap-table-shopping-cart">

                                        {/* <div className="row extraTable d-none d-md-block">
                                            <div class="column-1 col col-12 col-md-4" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Product</div>
                                            <div class="column-2 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>name</div>
                                            <div class="column-3 col col-12 col-md-1" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Price</div>
                                            <div class="column-4 col col-12 col-md-3" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Quantity</div>
                                            <div class="column-5 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>Total</div>
                                        </div> */}

                                        <div className="row mt-2">
                                            {cartItems && Object.keys(cartItems).map((key, index) => {
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
                                        {/* <div
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
                                        </div> */}
                                    </div>
                                </div>
                            </div>
                            <div class="col-sm-10 col-lg-7 col-xl-3 m-auto m-b-50">
                                <div class="">
                                    <div class="">
                                        <aside class=" m-auto">
                                            <div class="card mb-3">
                                                {/* <div class="card-body">
                                            <form>
                                                <div class="form-group">
                                                    <label>Have coupon?</label>
                                                    <div class="input-group">
                                                        <input type="text" class="form-control" name="" placeholder="Coupon code" />
                                                        <span class="input-group-append">
                                                            <button class="btn btn-primary">Apply</button>
                                                        </span>
                                                    </div>
                                                </div>
                                            </form>
                                        </div> */}
                                            </div>
                                            <div class="card">
                                                <div class="card-body">
                                                    <dl class="dlist-align">
                                                        <dt>Total Item:</dt>
                                                        <dd class="text-right">{cart.cartItems && Object.keys(cart.cartItems).reduce((qty, key) => {
                                                            return qty + cart.cartItems[key].qty;
                                                        }, 0)}</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Total:</dt>
                                                        <dd class="text-right">{cart.cartItems && Object.keys(cart.cartItems).reduce((price, key) => {
                                                            return (
                                                                price + cart.cartItems[key].price * cart.cartItems[key].qty
                                                            );
                                                        }, 0)}</dd>
                                                    </dl>
                                                    <dl class="dlist-align">
                                                        <dt>Total:</dt>
                                                        <dd class="text-right  h5"><strong>{cart.cartItems && Object.keys(cart.cartItems).reduce((price, key) => {
                                                            return (
                                                                price + cart.cartItems[key].price * cart.cartItems[key].qty
                                                            );
                                                        }, 0)}</strong></dd>
                                                    </dl>
                                                    <hr />
                                                    <Link to="/checkout" class="btn btn-primary">Checkout items</Link>


                                                </div>
                                            </div>
                                        </aside>
                                    </div>
                                </div>


                            </div>
                        </div>
                    </div>

                </form>
            </>





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