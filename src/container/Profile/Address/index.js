import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddressForm } from "./AddressForm";

import { addAddress, getAddress,deleteAddress } from "../../../actions/user.action";

export const Address = () => {

    const dispatch = useDispatch();
    const auth = useSelector((state) => state.auth);
    const user = useSelector((state) => state.user);
    const cart = useSelector((state) => state.cart);
    const [address, setAddress] = useState([]);
    const [checkedAddr, setCheckedAddr] = useState("");
    const [selectedAddr, setSelectedAddr] = useState({});
    const [confirmAddr, setConfirmAddr] = useState(false);
    const [newAddress, setNewAddress] = useState(false);


    useEffect(() => {
        auth.authenticate && dispatch(getAddress());
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

        setAddress(updatedAddress);
    };

    const confirmAddress = (add) => {
        setSelectedAddr(add);
        console.log(selectedAddr);
    };

    const onSubmitAddress = (payload) => {
        console.log(payload);
        dispatch(addAddress(payload));
        setNewAddress(false);
    };

    const deleteAddressFunction = (add) => {
        let payload = {
            _id: add._id
        }
        dispatch(deleteAddress(payload));
        console.log(payload)
    }

    const onSubmitFormAndDeliever = (payload) => {
        console.log(payload);
        dispatch(addAddress(payload));
        setNewAddress(false);
        setSelectedAddr(payload.address);
        // setConfirmAddr(true);
        // setOrderSummary(true);
        console.log(selectedAddr);

    };
    const onCancelAddrForm = () => {
        let address;
        if (user.address) {
            address = user.address.map((add) => ({
                ...add,
                edit: false,
            }));
        }
        setAddress(address);
        setCheckedAddr("")
    };

    const onCancelNewAddrForm = () => {
        let address;
        if (user.address) {
            address = user.address.map((add) => ({
                ...add,
                edit: false,
            }));
        }
        setAddress(address);
        setNewAddress(false);
    }




    return (
        <div>
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
                                    onClick={() => { selectAddress(add); setNewAddress(false) }}
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
                            {add.selected && !add.edit && (
                                <>
                                    <div
                                        style={{
                                            margin: "5px",
                                            marginLeft: "auto",
                                        }}
                                    >
                                        <button
                                            class="btn btn-primary"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                editAddress(add);
                                            }}
                                        >
                                            Edit
                                        </button>

                                    </div>
                                    <div
                                        style={{
                                            margin: "5px",
                                            marginLeft: "auto",
                                        }}
                                    >
                                        <button
                                            class="btn btn-danger"
                                            style={{ cursor: "pointer" }}
                                            onClick={() => {
                                                deleteAddressFunction(add);
                                            }}
                                        >
                                            Delete
                                        </button>

                                    </div>
                                </>
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
                            {/* {add.selected && !add.edit && (
                            <div style={{ display: "flex" }}>
                                <div
                                    style={{
                                        padding: "5px",
                                        marginBottom: "5px",
                                        backgroundColor: "orange",
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
                        )} */}
                        </div>
                    </div>
                );
            })}

            <div className="addFormStep">
                <div className={`checkoutHeader1`}>
                    <div>
                        <button
                            className="btn btn-primary stepNumber"
                            onClick={() => {
                                setNewAddress(true);
                                onCancelAddrForm();
                            }}
                            style={{
                                cursor: "pointer",
                                fontWeight: "bolder",
                                fontSize: "14px"
                            }}
                        >
                            + Add New Address
                        </button>
                    </div>
                </div>
            </div>
            {newAddress && (
                <AddressForm
                    onSubmit={onSubmitAddress}
                    onSubmitFormAndDeliever={onSubmitFormAndDeliever}
                    onCancel={onCancelNewAddrForm}
                />
            )}


        </div>
    )
}