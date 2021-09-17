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
import 'fa-icons'

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

      <header class="section-header">

        <section class="header-main border-bottom">
          <div class="container">
            <div class="row align-items-center">
              <div class="col-lg-2 col-4">
                <a href="../index.html" class="brand-wrap">
                  <img class="logo" src="images/logo.png" />
                </a>
              </div>
              <div class="col-lg-6 col-sm-12">
                <form action="#" class="search">
                  <div class="input-group w-100">
                    <input type="text" class="form-control" placeholder="Search" />
                    <div class="input-group-append">
                      <button class="btn btn-primary" type="submit">
                        <i class="fa fa-search"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div class="col-lg-4 col-sm-6 col-12">
                <div class="widgets-wrap float-md-right">
                  <div class="widget-header  mr-3">
                    <a href="#" class="icon icon-sm rounded-circle border">
                      <i class="fa fa-shopping-cart"></i>
                    </a>
                    <span class="badge badge-pill badge-danger notify">0</span>
                  </div>
                  <div class="widget-header icontext">
                    {
                      auth.authenticate ?
                        <a href="/profile" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a> :
                        <a href="/login" class="icon icon-sm rounded-circle border"><i class="fa fa-user"></i></a>
                    }
                    <div class="text">
                      <span style={{cursor: 'pointer'}} class="text-muted">Welcome!</span>
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
      </header>



    </>
  )
}

