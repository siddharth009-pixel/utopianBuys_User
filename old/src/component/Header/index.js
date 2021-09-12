import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { useAuth0 } from '@auth0/auth0-react'
import { login, signOut } from '../../actions/auth.action';
import {
  Modal,
  MaterialInput,
  MaterialButton,
  DropdownMenu
} from '../MaterialUI';
import { useHistory } from 'react-router-dom';


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
      <div>


        {/* 
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#features">Features</Nav.Link>
              <Nav.Link href="#pricing">Pricing</Nav.Link>
              <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">More deets</Nav.Link>
              <Nav.Link eventKey={2} href="#memes">
                Dank memes
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}


        {/* 
      <nav class="navbar navbar-expand-lg navbar-light bg-light" style={{zIndex:12000}}>
        <div class="container-fluid">
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation" >
            <span class="navbar-toggler-icon"></span>
          </button>
          <a class="navbar-brand" href="#">Navbar</a>
          <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Link</a>
              </li>
              <li class="nav-item">
                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav> */}


        {/* 
        <Modal
          visible={loginModal}
          onClose={() => setLoginModal(false)}
        >
          <div className="authContainer">
            <div className="row">
              <div className="leftspace">
                <h2>Login</h2>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
              </div>
              <div className="rightspace">

                <MaterialInput
                  type="text"
                  label="Enter Email/Enter Mobile Number"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />

                <div style={{ height: '20px' }}>
                </div>

                <MaterialInput
                  type="password"
                  label="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  rightElement={<a href="#">Forgot?</a>}
                />
                <div style={{ height: '30px' }}>
                </div>

                <MaterialButton
                  title="Login"
                  bgColor="#fb641b"
                  textColor="#ffffff"
                  onClick={userLogin}
                />

              </div>
            </div>
          </div>
        </Modal> */}

        <Modal
          visible={loginModal}
          onClose={() => setLoginModal(false)}
        >
          <div
            aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content form-elegant">
                <div class="modal-header text-center">
                  <h3 class="modal-title w-100 dark-grey-text font-weight-bold my-3" id="myModalLabel"><strong>Sign in</strong></h3>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" onClick={() => { setLoginModal(false); }}>&times;</span>
                  </button>
                </div>
                <div class="modal-body mx-4">
                  <div class="md-form mb-5">
                    <input type="email"
                      id="Form-email1"
                      class="form-control validate"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <label data-error="wrong" data-success="right" for="Form-email1">Your email</label>
                  </div>

                  <div class="md-form pb-3">
                    <input type="password"
                      id="Form-pass1"
                      class="form-control validate"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <label data-error="wrong" data-success="right" for="Form-pass1">Your password</label>
                    <p class="font-small blue-text d-flex justify-content-end">Forgot <a href="#" class="blue-text ml-1">
                      Password?</a></p>
                  </div>

                  <div class="text-center mb-3">
                    <button type="button" class="btn blue-gradient btn-block btn-rounded z-depth-1a"
                      onClick={userLogin}
                    >Sign in</button>
                  </div>
                  {/*
                  <p class="font-small dark-grey-text text-right d-flex justify-content-center mb-3 pt-2"> or Sign in
                    with:</p>

                   <div class="row my-3 d-flex justify-content-center">
                    <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-facebook-f text-center"></i></button>
                    <button type="button" class="btn btn-white btn-rounded mr-md-3 z-depth-1a"><i class="fab fa-twitter"></i></button>
                    <button type="button" class="btn btn-white btn-rounded z-depth-1a"><i class="fab fa-google-plus-g"></i></button>
                  </div> */}
                </div>
                <div class="modal-footer mx-5 pt-3 mb-1">
                  <p class="font-small grey-text d-flex justify-content-end">Not a member? <a href="#" class="blue-text ml-1">
                    Sign Up</a></p>
                </div>
              </div>
            </div>
          </div>

        </Modal>


        <header>
          <div>

            <div class="container-menu-desktop">
              <div class="wrap-menu-desktop" style={{ zIndex: 4 }}>
                <nav class="limiter-menu-desktop container">
                  <Link to='/temp'>
                    <a class="logo">
                      <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                    </a>
                  </Link>

                  <div class="menu-desktop">
                    <ul class="main-menu">
                      <li class="active-menu">
                        <Link style={{ textDecoration: 'none' }} to='/'>Home</Link>
                      </li>
                      <li>
                        <Link to='/shop' style={{ textDecoration: 'none' }}> Shop</Link>
                      </li>
                      <li class="label1" data-label1="hot">
                        <Link to='/blog' style={{ textDecoration: 'none' }}> Blog</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }} to='/about'> About</Link>
                      </li>
                      <li>
                        <Link style={{ textDecoration: 'none' }} to='/contact'>Contact</Link>
                      </li>
                    </ul>
                  </div>

                  <div class="wrap-icon-header flex-w flex-r-m">
                    <div class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 js-show-modal-search">
                      <i class="zmdi zmdi-search"></i>
                    </div>
                    <div
                      class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti js-show-cart"
                      data-notify="2"
                    >
                      <i class="zmdi zmdi-shopping-cart" onClick={()=>{history.push('/cart')}}></i>
                    </div>
                    <a
                      href="/"
                      class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11 icon-header-noti"
                      data-notify="0"
                    >
                      <i class="zmdi zmdi-favorite-outline"></i>
                    </a>
                    <div
                      class="icon-header-item cl2 hov-cl1 trans-04 p-l-22 p-r-11"

                    >
                      {/* {isAuthenticated?
                    <i class="zmdi zmdi-account"><button class="username_style" onClick={()=>logout({
                      returnTo:window.location.origin,
                    })}>Logout</button></i>
                    : <i class="zmdi zmdi-account"><button class="username_style" onClick={loginWithRedirect}>Login</button></i>
                  } */}
                      {auth.authenticate ?
                        <i class="zmdi zmdi-account"><button class="username_style" onClick={() => setLoginModal(false)}>{auth.user.firstname}</button></i>
                        : <i class="zmdi zmdi-account"><button class="username_style" onClick={() => setLoginModal(true)}>Login</button></i>
                      }
                      {auth.authenticate ?
                        <button class="username_style" style={{ marginLeft: '20px', padding: '0px', marginRight: '0px' }} onClick={() => logout()}>logout</button>
                        : ''
                      }

                    </div>

                  </div>
                </nav>
              </div>


            </div>




            <div class="wrap-header-mobile">
              <div class="logo-mobile">
                <Link to='/temp'>
                  <a class="logo">
                    <img src="images/icons/logo-01.png" alt="IMG-LOGO" />
                  </a>
                </Link>
              </div>

              <div class="wrap-icon-header flex-w flex-r-m m-r-15">
                <div class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 js-show-modal-search">
                  <i class="zmdi zmdi-search"></i>
                </div>
                <div
                  class="icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti js-show-cart"
                  data-notify="2"
                >
                  <i class="zmdi zmdi-shopping-cart"></i>
                </div>
                <a
                  href="/"
                  class="dis-block icon-header-item cl2 hov-cl1 trans-04 p-r-11 p-l-10 icon-header-noti"
                  data-notify="0"
                >
                  <i class="zmdi zmdi-favorite-outline"></i>
                </a>
              </div>





              <div class="btn-show-menu-mobile is-active " style={{ marginLeft: '20px', marginRight: '20px' }}>

                {!menuMobile ?
                  <span onClick={() => {
                    setMenuMobile(true)
                  }}>
                    <GiHamburgerMenu size={25} />
                  </span>
                  :
                  <span onClick={() => {
                    setMenuMobile(false)
                  }}>
                    <ImCross size={25} />
                  </span>

                }
                {/* <span class="hamburger-box">
              <span class="hamburger-inner"></span>
            </span> */}
              </div>

            </div>




            {
              menuMobile &&
              <>
                <div className="menu-mobile">
                  <ul class="topbar-mobile" style={{ display: 'block', margin: 0 }}>
                    <li>
                      <div class="left-top-bar">
                        Free shipping for standard order over $100
                      </div>
                    </li>
                    <li>
                      <div class="right-top-bar flex-w h-full">
                        <a href="#" class="flex-c-m p-lr-10 trans-04"> Help &amp; FAQs </a>
                        <a href="#" class="flex-c-m p-lr-10 trans-04"> My Account </a>
                        <a href="#" class="flex-c-m p-lr-10 trans-04"> EN </a>
                        <a href="#" class="flex-c-m p-lr-10 trans-04"> USD </a>
                      </div>
                    </li>
                  </ul>
                  <ul class="main-menu-m">
                    <li>
                      <a href="index-2.html">Home</a>
                      <ul class="sub-menu-m" style={{ display: 'none' }}>
                        <li><a href="index-2.html">Homepage 1</a></li>
                        <li><a href="home-02.html">Homepage 2</a></li>
                        <li><a href="home-03.html">Homepage 3</a></li>
                      </ul>
                      <span class="arrow-main-menu-m">
                        <i class="fa fa-angle-right" aria-hidden="true"></i>
                      </span>
                    </li>
                    <li>
                      <a href="product.html">Shop</a>
                    </li>
                    <li>
                      <a href="shoping-cart.html" class="label1 rs1" data-label1="hot">Features</a>
                    </li>
                    <li>
                      <a href="blog.html">Blog</a>
                    </li>
                    <li>
                      <a href="about.html">About</a>
                    </li>
                    <li>
                      <a href="contact.html">Contact</a>
                    </li>
                  </ul>
                </div>

              </>
            }

          </div>






          <div class="modal-search-header flex-c-m trans-04 js-hide-modal-search">
            <div class="container-search-header">
              <button class="flex-c-m btn-hide-modal-search trans-04 js-hide-modal-search">
                <img src="images/icons/icon-close2.png" alt="CLOSE" />
              </button>
              <form class="wrap-search-header flex-w p-l-15">
                <button class="flex-c-m trans-04">
                  <i class="zmdi zmdi-search"></i>
                </button>
                <input
                  class="plh3"
                  type="text"
                  name="search"
                  placeholder="Search..."
                />
              </form>
            </div>
          </div>
        </header>
      </div>


    </>
  )
}
