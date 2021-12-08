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

              <div class="col-md-2 order-1 order-md-1 col-3" >
                <Link to='/' >
                  <img class="logo"  src={`https://utopianbuys.s3.ap-south-1.amazonaws.com/utopianbuysLogo2+(2).PNG`} />
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