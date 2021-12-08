import React, { useEffect, useState } from 'react'
import './style.css';
import { FaFacebook, FaGoogle, FaPinterest } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { login, signOut } from '../../actions/auth.action';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';


export default function Login(props) {

  const auth = useSelector(state => state.auth)
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  const dispatch = useDispatch()


  const userLogin = () => {
    const user = { email, password }
    console.log(user)
    dispatch(login(user))
    setEmail('')
    setPassword('')
  }

  useEffect(() => {
    if(auth.authenticate){
      props.history.push('/')
    }
  }, [auth.authenticate])


  const logout = () => {
    dispatch(signOut())
  }



  return (
    <div>
      <div className="container-fluid">
        <div className="row no-gutter">
          <div className="col-md-6 d-none d-md-flex bg-image"></div>

          <div className="col-md-6 bg-light">
            <div className="login d-flex align-items-center py-5">

              <div className="container">
                <div className="row">
                  <div className="col-lg-10 col-xl-7 mx-auto">
                    <h3 className="display-4">Utopianbuys</h3>
                    <p className="text-muted mb-4">Continue with email and password</p>
                    <form>
                      <div className="form-group mb-3">
                        <input id="inputEmail" type="email" placeholder="Email address" required="" autoFocus=""
                          className="form-control rounded-pill border-0 shadow-sm px-4"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)} />
                      </div>
                      <div className="form-group mb-3">
                        <input id="inputPassword" type="password" placeholder="Password" required=""
                          className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                          value={password}
                          onChange={(e) => setPassword(e.target.value)} />
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <input id="customCheck1" type="checkbox" checked className="custom-control-input" />
                        <label for="customCheck1" className="custom-control-label">Remember password</label>
                        <a  onClick={() => { }} href="/login" className="px-5">Forgot password?</a>
                      </div>
                      <div className="custom-control custom-checkbox mb-3">
                        <button
                          className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                          onClick={(e)=>{e.preventDefault();userLogin()}}
                        >Sign in</button>

                        <div>
                          <div className="row px-5 mb-4">
                            <div >
                            </div> <small className="or text-center">Or</small>
                            <div className="line"></div>
                          </div>
                          <div class="d-flex flex-row bd-highlight mb-3">
                            <div className="p-2 "><span style={{ fontWeight: 500 }}>Sign in with </span></div>
                            <div className="p-2 bd-highlight">
                              <a href="#">

                                <IconContext.Provider value={{ size: 20 }}>
                                  <FcGoogle></FcGoogle>
                                </IconContext.Provider>
                              </a>

                            </div>
                            <div className="p-2 bd-highlight">
                              <a href="#">

                                <IconContext.Provider value={{ size: 20, color: 'red' }}>
                                  <FaPinterest></FaPinterest>
                                </IconContext.Provider>
                              </a>

                            </div>
                            <div className="p-2 bd-highlight">
                              <a href="#">
                                <IconContext.Provider value={{ size: 20, color: 'blue' }}>
                                  <FaFacebook></FaFacebook>
                                </IconContext.Provider>
                              </a>

                            </div>
                          </div>
                        </div>
                        <div className="text-center d-flex justify-content-between mt-4">
                          <p>New to Utopianbuys? <a style={{ textDecoration: 'underline' }} href="/SignUp">SignUp
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

