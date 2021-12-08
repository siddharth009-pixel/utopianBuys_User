import React, { useEffect, useState } from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './style.css'
import { useDispatch, useSelector } from 'react-redux';
import { login, signOut } from '../../actions/auth.action';
import { FaCartPlus, FaFacebook, FaPinterest, FaSearch, FaUser, FaYoutube } from 'react-icons/fa';
import { FcGoogle } from "react-icons/fc";
import { IconContext } from "react-icons";
import { Link, useHistory } from 'react-router-dom';
import car from '../../asset/images/logo.png'; // gives image path
import MenuHeader from '../MenuHeader';
import OldMenuHeader from '../oldMenuHeader';
import { RiShoppingCart2Line } from 'react-icons/ri';

const logoImage="";

function Header(props, ref) {

  const auth = useSelector(state => state.auth)
  const cart = useSelector(state => state.cart)
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

  const cartItemsCount = () => {
    let totalCount = 0;
    const cartItems = cart.cartItems ? Object.keys(cart.cartItems) : 0;
    if (cartItems) {
      for (let item in cartItems) {
        totalCount += 1;
      }
    }

    return totalCount;
  }

  // const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  // { isAuthenticated ? console.log(user) : console.log('null') }


  return (

    <>
      <header class="section-header" style={{ position: 'sticky', top: '0', zIndex: '6' }}>
        <section class="header-main border-bottom" style={{ backgroundColor: 'white' }}>
          <div class="container">

            <div class="row align-items-center" >

              <div class="col-md-2 order-1 order-md-1 col-3">
                <Link to='/'>
                  <img class="logo" src={`data:image/png;base64,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`} alt="this is image" />
                </Link>
              </div>

              <div class="col-md-6 order-3 order-md-2 col-sm-12 col-12 d-md-block d-none">
                <form action="#" class="search">
                  <div class="input-group w-60">
                    <input type="text" class="form-control" placeholder="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <IconContext.Provider value={{ size: 16 }}>
                          <FaSearch></FaSearch>
                        </IconContext.Provider>
                      </button>
                    </div>
                  </div>
                </form>
              </div>

              <div class="col-md-4 order-2 order-md-3 col-sm-6 ml-auto col-9">
                <div class="widgets-wrap ml-auto">
                  <div class="widget-header ml-auto  mr-3">
                    <Link to="/cart" class="icon icon-sm rounded-circle border">
                      <RiShoppingCart2Line />
                      {/* <IconContext.Provider value={{ size: 18 }}>
                        <FaCartPlus></FaCartPlus>
                      </IconContext.Provider> */}
                    </Link>
                    <span class="badge badge-pill badge-danger notify">
                      {
                        cartItemsCount()
                      }
                    </span>
                  </div>
                  <div class="widget-header icontext">
                    {
                      auth.authenticate ?
                        <Link to="/profile" class="icon icon-sm rounded-circle border">
                          <IconContext.Provider value={{ size: 16 }}>
                            <FaUser></FaUser>
                          </IconContext.Provider></Link> :
                        <Link to="/login" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></Link>
                    }
                    <div class="text">
                      <span style={{ cursor: 'pointer' }} class="text-muted">Welcome!</span>
                      <div>{
                        auth.authenticate ?
                          // <a onClick={profileHandler} >{auth.user.firstname}</a>
                          <Link to='/profile'>{auth.user.firstname}</Link>
                          :
                          <>
                            <Link to='/login'>Signin</Link> |
                            <Link to='/signup'> Register</Link>
                            {/* <a onClick={(e) => { e.preventDefault(); props.history.push('/login') }}>Sign in</a> | */}
                            {/* <a onClick={(e) => { e.preventDefault(); props.history.push('/signup') }}> Register</a> */}
                          </>}
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </section>

        {/* category header experiment origin */}
        {/*         
        <section>
          <nav className="navbar navbar-main navbar-expand-lg navbar-light border-bottom">
            <div className="container headerDiv">

              <ul className="navbar-nav" className="mainCatUl">

                <li className="nav-item dropdown" className="mainCatLi">
                  <a className="nav-link" href="#">Mandala</a>
                  <ul className="subCatUl">
                    <li className="subCatLi">
                      <div>
                        <img style={{ height: '100px', width: '100%' }} src={'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/13/858676-shraddhakapoor-081419.jpg'} />
                        <a className="nav-link" href="#">shraddha</a>
                      </div>
                    </li>
                    <li className="subCatLi">
                      <div>
                        <img style={{ height: '100px', width: '100%' }} src={'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/13/858676-shraddhakapoor-081419.jpg'} />
                        <a className="nav-link" href="#">shraddha</a>
                      </div>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pl-1">
                  <a className="nav-link" href="#">Acrylic Paint</a>
                </li>
                <li className="nav-item pl-1">
                  <a className="nav-link" href="#">Water Color</a>
                </li>
                <li className="nav-item pl-1" className="mainCatLi" >
                  <a className="nav-link" href="#">Digital Paint</a>
                  <ul className="subCatUl">
                    <li className="subCatLi">
                      <img style={{ height: '100px', width: '100%' }} src={'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/13/858676-shraddhakapoor-081419.jpg'} />
                      <span>shraddha</span>
                    </li>
                    <li className="subCatLi">
                      <img style={{ height: '100px', width: '100%' }} src={'https://cdn.dnaindia.com/sites/default/files/styles/full/public/2019/08/13/858676-shraddhakapoor-081419.jpg'} />
                      <span>shraddha</span>
                    </li>
                  </ul>
                </li>
                <li className="nav-item pl-1">
                  <a className="nav-link" href="#">Motivation Paint</a>
                </li>
                <li className="nav-item pl-1">
                  <a className="nav-link" href="#">Handmade</a>
                </li>
                <li className="nav-item pl-1">
                  <a className="nav-link" href="#">Abstract</a>
                </li>
              </ul>


            </div>
          </nav>
        </section> */}
        {/* 
        //it was actully made for pelagios which is discarder at this point of time 
        */}
        {/* <section>
          <MenuHeader />
        </section> */}

        <section>
          <OldMenuHeader ref={ref} />
        </section>

      </header>
    </>
  )
}


const forwardedHeader = React.forwardRef(Header)

export default forwardedHeader;