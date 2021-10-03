import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { login, signOut } from '../../actions/auth.action';
import { FaCartPlus, FaFacebook, FaPinterest, FaSearch, FaUser, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { useHistory } from 'react-router-dom';
import car from '../../asset/images/logo.png'; // gives image path


export default function Header(props) {

  const auth = useSelector(state => state.auth)
  const [loginModal, setLoginModal] = useState(false);
  const [signUpModal, setSignUpModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [menuMobile, setMenuMobile] = useState(false)
  const history = useHistory();

  const dispatch = useDispatch()
  useEffect(() => {
    setLoginModal(false)
    setSignUpModal(false)
  }, [auth.authenticate])


  const userLogin = () => {
    const user = { email, password }
    dispatch(login(user))
    setEmail('')
    setPassword('')
  }

  const logout = () => {
    dispatch(signOut())
  }



  // const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  // { isAuthenticated ? console.log(user) : console.log('null') }


  return (

    <>
      <header class="section-header">
        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
                <a href="../index.html" class="brand-wrap">
                <img class="logo" src={car} alt="this is car image" />
                </a>
              </div>
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input type="text" class="form-control" placeholder="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                      <IconContext.Provider value={{ size: 20 }}>
                            <FaSearch></FaSearch>
                          </IconContext.Provider>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border">
                    <IconContext.Provider value={{ size: 20 }}>
                            <FaCartPlus></FaCartPlus>
                          </IconContext.Provider></a>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    {
                      auth.authenticate ?
                        <a href="/profile" class="icon icon-sm rounded-circle border">
                          <IconContext.Provider value={{ size: 20 }}>
                            <FaUser></FaUser>
                          </IconContext.Provider></a> :
                        <a href="/login" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                    }
                    <div class="text">
                      <span style={{ cursor: 'pointer' }} class="text-muted">Welcome!</span>
                      <div>{
                        auth.authenticate ?
                          <a href="/profile" >{auth.user.firstname}</a>
                          :
                          <>
                            <a href="/login">Sign in</a> |
                            <a href="/signup"> Register</a>
                          </>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>
        <nav class="navbar navbar-expand-lg navbar-main border-bottom">
          <div class="container">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#main_nav7" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="main_nav7">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link pl-0" href="#"> <strong>All category</strong></a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fashion</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Supermarket</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Electronics</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Baby &amp; Toys</a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">Fitness sport</a>
                </li>
                <li class="nav-item dropdown">
                  <a class="nav-link dropdown-toggle" href="http://example.com/" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">More</a>
                  <div class="dropdown-menu">
                    <a class="dropdown-item" href="#">Foods and Drink</a>
                    <a class="dropdown-item" href="#">Home interior</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="#">Category 1</a>
                    <a class="dropdown-item" href="#">Category 2</a>
                    <a class="dropdown-item" href="#">Category 3</a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>
    </>
  )
}

