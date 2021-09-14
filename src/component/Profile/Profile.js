import React from 'react'
export default function Profile() {
    return (
        <div>
            <div class="container">
                <div className="row" style={{ width: '100%', 
                height: "200px", backgroundColor: "#f8f9fa",
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center',
                 marginLeft: 2.5 }}>
                     <h5>Pelagios Add Or User Photo in Rouded Shape Or Some Other Stuff.</h5>
                </div>
                <div class="row gutters-sm pt-2">
                    <div class="col-md-4 d-none d-md-block ">
                        <div class="card">
                            <div class="card-body">
                                <nav class="nav flex-column nav-pills nav-gap-y-1">
                                    <a href="#profile" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded active">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user mr-2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg> Profile Information
                                    </a>
                                    <a href="#account" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings mr-2"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                                        </svg> Address
                                    </a>
                                    <a href="#security" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield mr-2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg> Security
                                    </a>
                                    <a href="#notification" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell mr-2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                                        </svg> Notification
                                    </a>
                                    <a href="#billing" data-toggle="tab" class="nav-item nav-link has-icon nav-link-faded">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card mr-2"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line>
                                        </svg> Billing
                                    </a>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header border-bottom mb-3 d-flex d-md-none">
                                <ul class="nav nav-tabs card-header-tabs nav-gap-x-1" role="tablist">
                                    <li class="nav-item">
                                        <a href="#profile" data-toggle="tab" class="nav-link has-icon active"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-user"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#account" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-settings"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#security" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-shield"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#notification" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-bell"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path><path d="M13.73 21a2 2 0 0 1-3.46 0"></path></svg></a>
                                    </li>
                                    <li class="nav-item">
                                        <a href="#billing" data-toggle="tab" class="nav-link has-icon"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-credit-card"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"></rect><line x1="1" y1="10" x2="23" y2="10"></line></svg></a>
                                    </li>
                                </ul>
                            </div>
                            <div class="card-body tab-content">
                                <div class="tab-pane" id="profile">
                                    <h6>Account Information</h6>
                                    <hr />
                                    <form >
                                        <div class="form-group">
                                            <label for="fullName">Full Name</label>
                                            <input type="text" class="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter your fullname" value="abc" />
                                            {/* <small id="fullNameHelp" class="form-text text-muted">Your name may appear around here where you are mentioned. You can change or remove it at any time.</small> */}
                                        </div>
                                        <div class="form-group py-2">
                                            <label for="email">Email</label>
                                            <input type="email" class="form-control" id="fullName" aria-describedby="fullNameHelp" placeholder="Enter your fullname" value="abc@gmail.com" />
                                        </div>
                                        <div class="form-group py-2">
                                            <label for="url">Mobile No</label>
                                            <input placeholder="Mobile No" type="tel" id="phone"
                                                required="true"
                                                name="phone"
                                                class="form-control"
                                                 />
                                        </div>
                                        <button type="button" class="btn btn-primary py-2">Update Profile</button>
                                    </form>
                                </div>
                                <div class="tab-pane " >
                                    <h6>Address List</h6>
                                    <hr />
                                    <form>
                                        <small id="usernameHelp" class="form-text text-muted">Address List Will Be Display Here </small>
                                        <hr />
                                        <button class="btn btn-success" type="button">Add Address</button>
                                    </form>
                                </div>
                                <div class="tab-pane" id="security">
                                    <h6>Security Settings</h6>
                                    <hr />
                                    <form>
                                        <div class="form-group">
                                            <label class="d-block">Change Password</label>
                                            <input type="text" class="form-control" placeholder="Enter your old password" />
                                            <input type="text" class="form-control mt-1" placeholder="New password" />
                                            <input type="text" class="form-control mt-1" placeholder="Confirm new password" />
                                        </div>
                                    </form>
                                    <hr />
                                    <form>
                                        <div class="form-group">
                                            <label class="d-block">Two Factor Authentication</label>
                                            <button class="btn btn-info" type="button">Enable two-factor authentication</button>
                                            <p class="small text-muted mt-2">Two-factor authentication adds an additional layer of security to your account by requiring more than just a password to log in.</p>
                                        </div>
                                    </form>
                                    <hr />
                                    <form>
                                        <div class="form-group mb-0">
                                            <label class="d-block">Sessions</label>
                                            <p class="font-size-sm text-secondary">This is a list of devices that have logged into your account. Revoke any sessions that you do not recognize.</p>
                                            <ul class="list-group list-group-sm">
                                                <li class="list-group-item has-icon">
                                                    <div>
                                                        <h6 class="mb-0">San Francisco City 190.24.335.55</h6>
                                                        <small class="text-muted">Your current session seen in United States</small>
                                                    </div>
                                                    <button class="btn btn-light btn-sm ml-auto" type="button">More info</button>
                                                </li>
                                            </ul>
                                        </div>
                                    </form>
                                </div>
                                <div class="tab-pane " id="notification">
                                    <h6>NOTIFICATION SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div class="form-group">
                                            <label class="d-block mb-0">Security Alerts</label>
                                            <div class="small text-muted mb-3">Receive security alert notifications via email</div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input" id="customCheck1" checked="" />
                                                <label class="custom-control-label px-1" for="customCheck1"> Email each time you order</label>
                                            </div>
                                            <div class="custom-control custom-checkbox">
                                                <input type="checkbox" class="custom-control-input " id="customCheck2" checked="" />
                                                <label class="custom-control-label px-1" for="customCheck2"> Text SMS each time you order</label>
                                            </div>
                                        </div>
                                        </form>
                                </div>
                                <div class="tab-pane active" id="billing">
                                    <h6>BILLING SETTINGS</h6>
                                    <hr />
                                    <form>
                                        <div class="form-group">
                                            <label class="d-block mb-0">Payment Method</label>
                                            <div class="small text-muted mb-3">You have not added a payment method</div>
                                            <button class="btn btn-info" type="button">Add Payment Method</button>
                                        </div>
                                        <div class="form-group mb-0">
                                            <label class="d-block">Payment History</label>
                                            <div class="border border-gray-500 bg-gray-200 p-3 text-center font-size-sm">You have not made any payment.</div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}


