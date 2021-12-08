import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { signup } from '../../actions/auth.action';
import './style.css';



export default function Signup(props) {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')
  const [contactNumber, setContactNumber] = useState('')
  const dispatch = useDispatch();
  const auth= useSelector(state => state.auth)

  useEffect(() => {
    if(auth.createdUser){
    props.history.push('/login')}
  }, [auth.createdUser])

  useEffect(() => {

  },[])

  const signupButton = () => {
    const user = { email, password, name, contactNumber };
    dispatch(signup(user));
  }



  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-images"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Utopianbuys</h3>
                    <p className="text-muted mb-4">It's take one minute only..</p>
                    <form>

                      <div className="form-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Email address" required="true" autofocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          value={email}
                          onChange={(e) => { setEmail(e.target.value) }}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Password" required="true"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={password}
                          onChange={(e) => { setPassword(e.target.value) }}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input id="inputName" type="text" placeholder="Name" required="true"
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          value={name}
                          onChange={(e) => { setName(e.target.value) }}
                        />
                      </div>
                      <div className="form-group mb-3">
                        <input placeholder="Mobile No" type="tel" id="phone"
                          required="true"
                          name="phone"
                          // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                          // oninvalid="this.setCustomValidity('Please enter Alphabets.')"
                          // onchange="try{setCustomValidity('')}catch(e){}"
                          // oninput="setCustomValidity(' ')"
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={contactNumber}
                          onChange={(e) => { setContactNumber(e.target.value) }}
                        />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <button type="submit"
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={(e)=>{e.preventDefault();signupButton()}}
                          >Sign Up</button>
                        <div className="text-center d-flex justify-content-between mt-4">
                          <p>Already have account? <a style={{ textDecoration: 'underline' }} href="/login">Login
                          </a></p>
                        </div></div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

