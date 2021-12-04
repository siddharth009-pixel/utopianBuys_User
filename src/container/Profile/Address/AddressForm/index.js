import { useState } from "react";


export default function AddressForm(props) {

    const initalData = props.initalData;
    const onSubmit = props.onSubmit;
    const onCancel = props.onCancel;
    const onSubmitFormAndDeliever = props.onSubmitFormAndDeliever;
    const [name, setName] = useState(initalData ? initalData.name : "");
    const [mobileNumber, setMobileNumber] = useState(
        initalData ? initalData.mobileNumber : ""
    );
    const [pinCode, setPinCode] = useState(initalData ? initalData.pinCode : "");
    const [locality, setLocality] = useState(
        initalData ? initalData.locality : ""
    );
    const [address, setAddress] = useState(initalData ? initalData.address : "");
    const [cityDistrictTown, setCityDistrictTown] = useState(
        initalData ? initalData.cityDistrictTown : ""
    );
    const [state, setState] = useState(initalData ? initalData.state : "");
    const [landmark, setLandmark] = useState(
        initalData ? initalData.landmark : ""
    );
    const [alternatePhone, setAlternatePhone] = useState(
        initalData ? initalData.alternatePhone : ""
    );
    const [addressType, setAddressType] = useState(
        initalData ? initalData.addressType : ""
    );

    const onsubmitForm = () => {
        let payload = {};
        if (initalData) {
            payload = {
                id: props.initalData._id,
                address: {
                    name,
                    mobileNumber,
                    pinCode,
                    locality,
                    address,
                    cityDistrictTown,
                    state,
                    landmark,
                    alternatePhone,
                    addressType: addressType == "" ? 'home' : addressType,
                },
            };
        } else {
            payload = {
                address: {
                    name,
                    mobileNumber,
                    pinCode,
                    locality,
                    address,
                    cityDistrictTown,
                    state,
                    landmark,
                    alternatePhone,
                    addressType,
                },
            };
        }

        onSubmit(payload);
    };

    const onSubmitAndDeliever = () => {
        let payload = {};
        if (initalData) {
            payload = {
                id: props.initalData._id,
                address: {
                    name,
                    mobileNumber,
                    pinCode,
                    locality,
                    address,
                    cityDistrictTown,
                    state,
                    landmark,
                    alternatePhone,
                    addressType,
                },
            };
        } else {
            payload = {
                address: {
                    name,
                    mobileNumber,
                    pinCode,
                    locality,
                    address,
                    cityDistrictTown,
                    state,
                    landmark,
                    alternatePhone,
                    addressType,
                },
            };
        }

        onSubmitFormAndDeliever(payload);
    };

    return (
        <div class="tab-pane active" >
            {/* <h6>Address List</h6>
            <hr /> */}
            <article class="card mb-4">
                <div class="card-body">
                    <h4 class="card-title mb-4">Delivery info</h4>
                    <form action="#">
                        <div class="row">
                            <div class="form-group col-sm-6">
                                <label class={`js-check box ${addressType == "home" && 'active'} `}>
                                    <input type="radio" name="dostavka" value="home" checked={addressType == "home"} onClick={() => { setAddressType("home") }} />
                                    <h6 class="title">Home</h6>
                                    <p class="text-muted">We will deliver by 9:00 AM to 9:00 PM</p>
                                </label>
                            </div>
                            <div class="form-group col-sm-6">
                                <label class={`js-check box ${addressType == "work" && 'active'} `} >
                                    <input type="radio" name="dostavka" value="work" checked={addressType == "work"} onClick={() => { setAddressType("work"); }} />
                                    <h6 class="title">office</h6>
                                    <p class="text-muted">We will deliver by 9:00 AM to 5:00 PM</p>
                                </label>
                            </div>
                        </div>


                        <div class="row">

                            <div class="form-group col-sm-6">
                                <label>name</label>
                                <input type="text" placeholder="Type here" class="form-control" value={name} onChange={(e) => { setName(e.target.value) }} />
                            </div>

                            <div class="form-group col-sm-6">
                                <label>mobile no.</label>
                                <input type="text" placeholder="Type here" class="form-control" value={mobileNumber} onChange={(e) => { setMobileNumber(e.target.value) }} />
                            </div>

                            <div class="form-group col-sm-12">
                                <label>Address</label>
                                <input type="text" placeholder="Type here" class="form-control" value={address} onChange={(e) => { setAddress(e.target.value) }} />
                            </div>
                            <div class="form-group col-sm-6">
                                <label>city</label>
                                <input type="text" placeholder="Type here" class="form-control" value={cityDistrictTown} onChange={(e) => { setCityDistrictTown(e.target.value); }} />
                            </div>
                            <div class="form-group col-sm-6">
                                <label>state</label>
                                <input type="text" placeholder="Type here" class="form-control" value={state} onChange={(e) => { setState(e.target.value) }} />
                            </div>
                            <div class="form-group col-sm-8">
                                <label>landmark</label>
                                <input type="text" placeholder="Type here" class="form-control" value={landmark} onChange={(e) => { setLandmark(e.target.value) }} />
                            </div>
                            <div class="form-group col-sm-4">
                                <label>pincode</label>
                                <input type="text" placeholder="" class="form-control" value={pinCode} onChange={(e) => { setPinCode(e.target.value) }} />
                            </div>
                            <div class="col-sm-2">
                                <button class="btn btn-success" type="button" onClick={onsubmitForm} >Save</button>
                            </div>
                            <div class="col-sm-2">
                                <button class="btn btn-success" type="button" onClick={onCancel} >Cancel</button>
                            </div>

                        </div>

                    </form>
                </div>
            </article>

        </div>
    )
}