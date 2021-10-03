import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { updateProfileInfoAction } from '../../../actions/user.action'



export const PersonalInfo = () => {

    const auth = useSelector(state => state.auth)
    const { user } = auth
    const [firstName, setFirstName] = useState(user.firstname == "" ? "" : user.firstname)
    const [lastName, setLastName] = useState(user.lastname ? user.lastname : '')
    const [gender, setGender] = useState('')
    const [email, setEmail] = useState(user.email ? user.email : '')
    const [contactNumber, setContactNumber] = useState(user.contactNumber ? user.contactNumber : '')
    const [editProfile, setEditProfile] = useState(false)
    const [editEmail, setEditEmail] = useState(false)
    const [editContactNumber, setEditContactNumber] = useState(false)
    const dispatch = useDispatch()


    useEffect(() => {
        setFirstName(user.firstname ? user.firstname : "")
        setLastName(user.lastname ? user.lastname : "")
        // setGender
        setEmail(user.email ? user.email : "")
        setContactNumber(user.contactNumber ? user.contactNumber : "")
    }, [auth.user])

    const savePersonalInfo = () => {
        const info = { firstname: firstName, lastname: lastName };
        dispatch(updateProfileInfoAction(info))
    }
    const saveEmail = () => {
        const info = { email: email };
        dispatch(updateProfileInfoAction(info))
    }
    const saveContactNumber = () => {
        const info = { contactNumber: contactNumber };
        dispatch(updateProfileInfoAction(info))
    }

    return (
        <div class="tab-pane active" id="profile">
            <h6>Account Information</h6>
            <hr />
            <form >
                <div className="container">
                    <div className="row">
                        <h4>account info</h4>
                        <div className="col col-12 col-md-5">
                            <div class="form-group">
                                <label for="firstname">firstname</label>
                                <input type="text"
                                    class="form-control"
                                    id="fullName"
                                    aria-describedby="fullNameHelp"

                                    value={firstName}
                                    onChange={(e) => { setFirstName(e.target.value); }}
                                    disabled={editProfile ? false : true} />
                                {/* <small id="fullNameHelp" class="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small> */}
                            </div>
                        </div>
                        <div className="col col-12 col-md-4">
                            <div class="form-group">
                                <label for="lastname">lastname</label>
                                <input type="text"
                                    class="form-control"
                                    id="fullName"
                                    aria-describedby="fullNameHelp"
                                    placeholder="Enter your fullname"
                                    value={lastName}
                                    onChange={(e) => { setLastName(e.target.value); }}
                                    disabled={editProfile ? false : true} />
                                {/* <small id="fullNameHelp" class="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small> */}
                            </div>
                        </div>
                        <div className="col col-12 col-md-2 m-auto">
                            <div className="row">

                                {editProfile ? <>
                                    <div className="col col-2 col-md-3 m-auto">
                                        <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditProfile(false); savePersonalInfo(); }}>save</button>
                                    </div>
                                    <div className="col col-2 col-md-3 m-auto">
                                        <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setFirstName(user.firstname); setLastName(user.lastname); setEditProfile(false); }}>Cancel</button>
                                    </div>
                                </>
                                    :
                                    <div className="col col-2 col-md-3 m-auto">
                                        <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditProfile(true) }}>edit</button>
                                    </div>
                                }
                            </div>
                        </div>

                        <hr />
                        <div className="row">
                            <div className="col col-12 col-md-9">
                                <div class="form-group py-2">
                                    <label for="email">Email</label>
                                    <input type="email"
                                        class="form-control"
                                        id="fullName"
                                        aria-describedby="fullNameHelp"
                                        placeholder="Enter your fullname"
                                        value={email}
                                        onChange={(e) => { setEmail(e.target.value); }}
                                        disabled={editEmail ? false : true} />
                                </div>
                            </div>
                            <div className="col col-12 col-md-2 m-auto">
                                <div className="row">
                                    {editEmail ? <>
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditEmail(false); saveEmail(); }}>save</button>
                                        </div>
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditEmail(false); setEmail(user.email) }}>cancel</button>
                                        </div>
                                    </> :
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditEmail(true); }}>edit</button>
                                        </div>
                                    }
                                </div>
                            </div>

                        </div>
                        <hr />
                        <div className="row">
                            <div className="col col-12 col-md-8">
                                <div class="form-group py-2">
                                    <label for="url">Mobile No</label>
                                    <input placeholder="Mobile No" type="tel" id="phone"
                                        required="true"
                                        name="phone"
                                        class="form-control"
                                        value={contactNumber}
                                        onChange={(e) => { setContactNumber(e.target.value); }}
                                        disabled={editContactNumber ? false : true}
                                    />
                                </div>
                            </div>
                            <div className="col col-4 col-md-4 m-auto">

                                <div className="row">

                                    {editContactNumber ? <>
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditContactNumber(false); saveContactNumber(); }}>save</button>
                                        </div>
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditContactNumber(false);setContactNumber(user.contactNumber) }}>cancel</button>
                                        </div>
                                    </>
                                        :
                                        <div className="col col-2 col-md-3 m-auto">
                                            <button class="btn btn-primary" onClick={(e) => { e.preventDefault(); setEditContactNumber(true) }}>edit</button>
                                        </div>
                                    }
                                </div>

                            </div>


                        </div>

                    </div>

                </div>
            </form>
        </div>

    )
}


