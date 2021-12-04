import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addAddress, getAddress } from "../../actions/user.action";
import Layout from '../../component/Layout';
// import AddressForm from "./AddressForm";
import AddressForm from "../Profile/Address/AddressForm";
import "./style.css";
// import { PriceDetails } from "../../component/PriceDetails";
import Cart from "../Cart";
import { addToCart, getCartItems } from "../../actions/cart.action";
import { CartItem } from "../Cart/CartItem";
import { addOrder } from "../../actions/order.action";

export default function Checkout(props) {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.auth);
  const user = useSelector((state) => state.user);
  const cart = useSelector((state) => state.cart);
  const [address, setAddress] = useState([]);
  const [checkedAddr, setCheckedAddr] = useState("");
  const [selectedAddr, setSelectedAddr] = useState({});
  const [confirmAddr, setConfirmAddr] = useState(false);
  const [newAddress, setNewAddress] = useState(false);
  const [orderSummary, setOrderSummary] = useState(false);
  const [paymentOption, setPaymentOption] = useState(false)

  const [cartItems, setCartItems] = useState(cart.cartItems);

  useEffect(() => {
    setCartItems(cart.cartItems);
  }, [cart.cartItems]);

  useEffect(() => {
    if (!auth.authenticate) {
      props.history.push('/login');
    }
  })

  useEffect(() => {
    if (cart.cartItems) {
      if (Object.keys(cart.cartItems).length == 0) {
        props.history.push('/');
      }
    }
  })

  useEffect(() => {
    if (auth.authenticate) {
      dispatch(getCartItems());
      setCartItems(cart.cartItems);
    }
  }, [auth.authenticate]);

  useEffect(() => {
    let address;
    if (user.address) {
      address = user.address.map((add) => ({
        ...add,
        selected: false,
        edit: false,
      }));

    }
    setAddress(address);
  }, [user.address]);

  useEffect(() => {
    auth.authenticate && dispatch(getAddress());
  }, [auth.authenticate]);

  const placeOrder = () => {
    const items = Object.keys(cart.cartItems).map((key, index) => {
      return ({
        productId: cartItems[key]._id,
        payablePrice: cartItems[key].price,
        purchaseQuantity: cartItems[key].qty
      })
    })

    const payload = {
      addressId: selectedAddr._id,
      totalAmount: totalPrice,
      items,
      paymentStatus: 'pending'
    }
    console.log({ payload });
    dispatch(addOrder({ payload }))

  }

  const CheckOutStep = (props) => {
    return (
      <div className="checkoutStep">
        <div className={`checkoutHeader ${props.active && "activeStep"}`}>
          <div>
            <span className="stepNumber" style={{ margin: 0 }}>
              {props.stepNumber}. {props.stepTitle}
            </span>
          </div>
        </div>
        {props.body && props.body}
      </div>
    );
  };

  const selectAddress = (add) => {
    const updatedAddress = address.map((addr) =>
      addr._id === add._id
        ? { ...addr, selected: true }
        : { ...addr, selected: false }
    );
    console.log(updatedAddress);
    setAddress(updatedAddress);
  };

  const editAddress = (add) => {
    const updatedAddress = address.map((addr) =>
      addr._id === add._id ? { ...addr, edit: true } : { ...addr, edit: false }
    );
    console.log(updatedAddress);
    setAddress(updatedAddress);
  };

  const confirmAddress = (add) => {
    setSelectedAddr(add);
    setConfirmAddr(true);
    setOrderSummary(true);
    console.log(selectedAddr);
  };

  const onSubmitAddress = (payload) => {
    console.log(payload);
    dispatch(addAddress(payload));
    setNewAddress(false);
  };

  const onSubmitFormAndDeliever = (payload) => {
    console.log(payload);
    dispatch(addAddress(payload));
    setNewAddress(false);
    setSelectedAddr(payload.address);
    setConfirmAddr(true);
    setOrderSummary(true);
    console.log(selectedAddr);

  };
  const onCancelAddrForm = () => { };

  const onQuantityIncrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, img, price, qty }, 1));
  };

  const onQuantityDecrement = (_id, qty) => {
    const { name, img, price } = cartItems[_id];
    dispatch(addToCart({ _id, name, img, price, qty }, -1));
  };

  const totalItems = cart.cartItems && Object.keys(cart.cartItems).reduce((qty, key) => {
    return qty + cart.cartItems[key].qty;
  }, 0)

  const totalPrice = cart.cartItems && Object.keys(cart.cartItems).reduce((price, key) => {
    return (
      price + cart.cartItems[key].price * cart.cartItems[key].qty
    );
  }, 0)

  return (
    <Layout>
      <div className="container">
        <div className="row">
          <div className="col">
            {cart.cartItems && !(cart.cartItems.length > 0) &&
              <div className="checkout">
                <div>
                  <div className="row">
                    <div className="col-12 col-md-9">
                      <div>
                        <div>
                          <CheckOutStep
                            stepNumber="1"
                            stepTitle="Required logIn"
                            active={!auth.authenticate}
                            body={
                              auth.authenticate ? (
                                <div className="loggedInId">
                                  <p className="para" style={{ fontWeight: 500 }}>
                                    {auth.user.firstname}
                                  </p>
                                  <p className="para">{auth.user.email}</p>
                                </div>
                              ) : (
                                <div style={{ width: "50%" }}>
                                  <input label="email" type="text" />
                                  <input label="password" type="password" />
                                  <p style={{ margin: "5px", color: "blue" }}>SignIn</p>
                                </div>
                              )
                            }
                          />

                          <CheckOutStep
                            stepNumber="2"
                            stepTitle="Confirm Delivery address"
                            active={address && address.length > 0 && !confirmAddr ? true : false}
                            body={
                              <div className="address">
                                {confirmAddr ? (
                                  <div>{selectedAddr.address}</div>
                                ) : (
                                  <div>
                                    {" "}
                                    {address && address.map((add, index) => {
                                      return (
                                        <div
                                          key={index}
                                          style={{
                                            margin: "10px 12px 15px 12px",
                                            borderBottom: "2px solid black",
                                          }}
                                        >
                                          <div
                                            className="flexRow"
                                            style={{ paddingBottom: "10px" }}
                                          >
                                            <div style={{ margin: "5px 10px" }}>
                                              <input
                                                type="radio"
                                                name="address"
                                                value={add._id}
                                                checked={add._id == checkedAddr}
                                                onChange={(e) => {
                                                  setCheckedAddr(e.target.value);
                                                }}
                                                onClick={() => selectAddress(add)}
                                              />
                                            </div>
                                            <div style={{ width: "90%" }}>
                                              <div style={{ fontWeight: "bolder" }}>
                                                {add.name}
                                              </div>
                                              <div>{add.address}</div>
                                              <p
                                                className="para"
                                                style={{ fontWeight: "lighter" }}
                                              >
                                                {add.addressType}
                                              </p>
                                              <p className="para">
                                                Contact Number : {add.mobileNumber}
                                              </p>
                                            </div>
                                            {add.selected && (
                                              <div
                                                style={{
                                                  margin: "5px",
                                                  marginLeft: "auto",
                                                }}
                                              >
                                                <span
                                                  style={{ cursor: "pointer" }}
                                                  onClick={() => {
                                                    editAddress(add);
                                                  }}
                                                >
                                                  Edit
                                                </span>
                                              </div>
                                            )}
                                          </div>

                                          <div>
                                            {add.edit && (
                                              <div style={{ margin: "10px 10px" }}>
                                                <AddressForm
                                                  withoutLabel
                                                  initalData={add}
                                                  onSubmit={onSubmitAddress}
                                                  onSubmitFormAndDeliever={onSubmitFormAndDeliever}
                                                  onCancel={onCancelAddrForm}
                                                />
                                              </div>
                                            )}
                                          </div>
                                          <div>
                                            {add.selected && !add.edit && (
                                              <div style={{ display: "flex" }}>
                                                <div
                                                  style={{
                                                    padding: "5px",
                                                    marginBottom: "5px",
                                                    backgroundColor: '#A9A9A9',
                                                    width: "200px",
                                                    textAlign: "center",
                                                    fontSize: "16px",
                                                    fontWeight: "bolder",
                                                  }}
                                                >
                                                  <span
                                                    style={{ cursor: "pointer" }}
                                                    onClick={() => {
                                                      confirmAddress(add);
                                                    }}
                                                  >
                                                    <span>Deliever here</span>
                                                  </span>
                                                </div>
                                              </div>
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })}
                                    <div className="addFormStep">
                                      <div className={`checkoutHeader1`}>
                                        <div>
                                          <span
                                            className="stepNumber"
                                            onClick={() => {
                                              setNewAddress(true);
                                            }}
                                            style={{
                                              cursor: "pointer",
                                              fontWeight: "bolder",
                                              fontSize: "14px",
                                              color: "blue",
                                            }}
                                          >
                                            + Add New Address
                                          </span>
                                        </div>
                                      </div>
                                    </div>
                                    {newAddress && (
                                      <AddressForm
                                        onSubmit={onSubmitAddress}
                                        onSubmitFormAndDeliever={onSubmitFormAndDeliever}
                                        onCancel={onCancelAddrForm}
                                      />
                                    )}
                                  </div>
                                )}
                              </div>
                            }
                          />

                          <CheckOutStep
                            stepNumber="3"
                            stepTitle="order Summary"
                            active={confirmAddr}
                            body={
                              orderSummary ? (
                                <div>
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
                                  <div>
                                    <button
                                      class='btn btn-primary'
                                      style={{ width: '30%', margin: '4px 5px 4px auto' }}
                                      title="Continue"
                                      onClick={() => {
                                        setOrderSummary(false)
                                        setPaymentOption(true)
                                      }}
                                    >Continue</button>
                                  </div>
                                </div>
                              ) :
                                <div>
                                  {
                                    `${totalItems} Items`
                                  }
                                </div>
                            }
                          />

                          <CheckOutStep
                            stepNumber="4"
                            stepTitle="Payment Options"
                            active={false}
                            body={paymentOption ?
                              <div>
                                <div>
                                  <input type="radio" />
                                  <label>Cash On Delivery</label>
                                </div>
                                <div>
                                  <button
                                  class='btn btn-primary'
                                    style={{ width: '30%', margin: '4px 5px 4px auto' }}
                                    title="Place Order"
                                    onClick={() => {
                                      placeOrder()
                                      setPaymentOption(false)
                                    }}
                                  >
                                    Place Order
                                  </button>

                                </div>
                              </div>
                              :
                              <div>
                                ThankYou Page
                              </div>}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-3">
                      <div>
                        <div
                          style={{
                            margin: "10px 10px",
                            padding: "20px 10px",
                            boxShadow: "2px -2px 10px 2px grey",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "bold",
                              fontSize: "16px",
                              marginBottom: "10px",
                            }}
                          >
                            PriceDetails
                          </div>
                          {/* <PriceDetails
                  totalItems={Object.keys(cart.cartItems).reduce((qty, key) => {
                    return qty + cart.cartItems[key].qty;
                  }, 0)}
                  totalPrice={Object.keys(cart.cartItems).reduce((price, key) => {
                    return (
                      price + cart.cartItems[key].price * cart.cartItems[key].qty
                    );
                  }, 0)}
                /> */}<div class="card">
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


                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>




                </div>
              </div>
            }
          </div>
        </div>


      </div>

    </Layout>
  );
};
