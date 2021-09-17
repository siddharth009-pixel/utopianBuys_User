import React, { useState } from "react"
import { generatePublicUrl } from "../../../urlConfig";

export const CartItem = (props) => {

    const { _id, name, price, img } = props.cartItem
    const [qty, setQty] = useState(props.cartItem.qty)

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


    return (
        <>
            <div className="col col-12 cart-product-container">
                <div class="row" style={{ align: 'center' }}>
                    <div class="column-1 col col-12 col-md-4">
                        <div class="how-itemcart1" style={{ height: '100%', width: '60%', margin: 'auto' }}>
                            <div style={{ margin: '10px' }}>
                                <img src={img} style={{ objectFit: 'contain', maxWidth: '100%', height: 'auto' }} alt="IMG" />
                            </div>
                        </div>
                    </div>
                    <div class="column-2 col col-12 col-md-2" style={{ padding: '7px', margin: 'auto', textAlign: 'center', fontSize: '16px' }}>{name}</div>
                    <div class="column-3 col col-12 col-md-1" style={{ margin: 'auto', padding: '7px', textAlign: 'center', fontSize: '16px' }}>{price}</div>
                    <div class="column-4 col col-12 col-md-3" style={{ margin: 'auto', padding: '7px' }}>
                        <div class="wrap-num-product flex-w" style={{ margin: 'auto' }}>
                            <div
                                class="btn-num-product-down cl8 hov-btn3 trans-04 flex-c-m"
                                style={{ textAlign: 'center' }}
                                onClick={onQuantityDecrement}
                            >
                                <i class="fs-16 zmdi zmdi-minus"></i>
                            </div>
                            {/* <input
                        class="mtext-104 cl3 txt-center num-product"
                        type="number"
                        name="num-product1"
                        value="1"
                    /> */}
                            <div
                                class=" cl8 trans-04 flex-c-m cl3 txt-center num-product"
                            >
                                {qty}
                            </div>
                            <div
                                class="btn-num-product-up cl8 hov-btn3 trans-04 flex-c-m"
                                onClick={onQuantityIncrement}
                            >
                                <i class="fs-16 zmdi zmdi-plus"></i>
                            </div>
                        </div>
                    </div>
                    <div class="column-5 col col-md-2" style={{ margin: 'auto', textAlign: 'center' }}>{qty * price}</div>
                </div>

            </div>
        </>
    )
}