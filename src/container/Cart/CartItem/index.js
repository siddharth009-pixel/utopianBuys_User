import React, { useState } from "react"
import { generatePublicUrl, localImageToLocalTunnelImage } from "../../../urlConfig";
import { useDispatch, useSelector } from 'react-redux';
import { removeItemFromCart } from "../../../actions/cart.action";

export const CartItem = (props) => {

    const { _id, name, price, img } = props.cartItem
    const [qty, setQty] = useState(props.cartItem.qty)

    const dispatch = useDispatch()


    const onQuantityIncrement = () => {
        setQty(qty + 1)
        props.onQuantityInc(_id, qty)
    }

    const onQuantityDecrement = () => {
        if (qty <= 1) {
            return
        }
        setQty(qty - 1)
        props.onQuantityDec(_id, qty)
    }

    // const removeItemFromCart=()=>{
    //     props.removeItemFromCartButton(_id)
    // }

    const removeItemFromCartButton = () => {
        dispatch(removeItemFromCart(_id))
        console.log(_id);
    }

    return (
        <>

            <div class="container mt-2">
                <div class="row">
                    <div class="col-10 card" style={{ margin: 'auto' }}>
                        <div class="row">
                            <div class="col col-12 cart-product-container">
                                <div class="row">
                                    <div class="column-1 col col-5 col-md-4" style={{ height: '120px',margin:'auto' }}>
                                        <div class="how-itemcart1" style={{ height: '120px',margin:'auto' }}>
                                            <div style={{ height: '120px' }}><img src={localImageToLocalTunnelImage(img)} alt="IMG"
                                                style={{ objectFit: 'cover', maxWidth: '100%', height: '120px',margin: 'auto'}} />
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column-2 col col-7 col-md-6" style={{ height: '150px', marginTop: '10px' }}>
                                        <div class="row">
                                            <div class="col col-12"
                                                style={{ padding: '7px', textAlign: 'left', fontSize: '18px', fontWeight: 'bold' }}>
                                                {name}
                                            </div>

                                            <div class="col col-12 " style={{ margin: 'auto', padding: '7px' }}>
                                                <div style={{ margin: 'auto', padding: '7px' }}>
                                                    <div class="input-group input-spinner">
                                                        <div class="input-group-prepend" style={{ textAlign: 'center', justifyContent: 'center' }}>
                                                            {/* <button onClick={onQuantityDecrement} class="btn" type="button" style={{backgroundColor:'red',borderRadius:5,
                                                            height:'40px',
                                                            width:'50px'}} >
                                                            <span style={{fontSize:'18px' }}>-</span>
                                                            </button> */}
                                                            {/* <a onClick={onQuantityDecrement} class="btn btn-primary qtyBtn qtyBtn-1 qtyBtn-sep icon-info"> - </a> */}
                                                            <a onClick={(e) => { e.preventDefault(); onQuantityDecrement() }} class="btn btn-primary"> - </a>

                                                        </div>
                                                        <div style={{ padding: '0px 20px', textAlign: 'center' }}>
                                                            <div style={{ margin: 'auto' }}>
                                                                {qty}
                                                            </div>
                                                        </div>
                                                        <div class="input-group-append">
                                                            {/* <button onClick={onQuantityIncrement} class="btn" style={{backgroundColor:'blue',width:'50px'}} type="button" >
                                                                <span style={{fontSize:'18px' }}>+</span>
                                                            </button> */}
                                                            <a onClick={(e) => { e.preventDefault(); onQuantityIncrement() }} class="btn btn-primary"> + </a>

                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="col col-12" style={{ marginLeft: '5px', padding: '7px', textAlign: 'left' }}>
                                                {/* <span><a href="" style={{ fontSize: '12px' }}>save for letter</a> </span> */}
                                                <span> | </span>
                                                <span><a onClick={(e) => { e.preventDefault(); removeItemFromCartButton() }} style={{ fontSize: '12px',color:'red' }}>Remove</a> </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="column-3 col col-12 col-md-2 pb-md-2" style={{ marginTop: '10px' }}>
                                        <div class="float-left"
                                            style={{ margin: 'auto', padding: '7px', textAlign: 'center', fontSize: '16px', width: 'auto' }}>
                                            <div class="price-wrap">
                                                <div class="price"><i class="fa fa-inr"></i> {price * qty}</div>
                                                <div class="text-muted"><i class="fa fa-inr"></i> {price} Each </div>
                                            </div>

                                        </div>
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