
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  HomePage, BlogPage,
  AboutPage,
  OrderPage,
  ShopPage,
  ContactPage,
  BlogDetail,
  ProductDetail,
  Cart,
  TempPage,
  login,
  signup,
  profile,
} from './container/index';

import { getInitialData } from './actions/initialData.action';
import { Route, Switch } from 'react-router-dom'
import { isUserLoggedIn } from './actions/auth.action';

function App() {

  const dispatch=useDispatch();
  const auth=useSelector(state=>state.auth)

  useEffect(()=>{
    dispatch(getInitialData());
  },[])


  useEffect(() => {
  
    if(!auth.authenticate){
      dispatch(isUserLoggedIn())      
    }
  }, [auth.authenticate])




  return (
    <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/temp" component={TempPage} />
          {/* <Route path="/login" component={login}/>
          <Route path="/signup" component={signUp} />
          <Route path="/profile" component={profile} /> */}
          <Route path="/blog" component={BlogPage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/cart" component={Cart} />
          <Route path="/order" component={OrderPage} />
          <Route path="/contact" component={ContactPage} />
          <Route path="/blogdetail" component={BlogDetail} />
          <Route path="/:product/:productId/p" component={ProductDetail} />
          <Route path="/:slug" component={ShopPage} />
          
          {/* <Route path="/:product/:productId/p" component={ProductDetailsPage} /> */}
          {/* <Route path="/:slug" component={ProductListPage} /> */}
          { 
          // checkout page remaining
          }
        </Switch>
    </div>
  );
}

export default App;
