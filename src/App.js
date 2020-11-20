import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './containers/Home';
import Signin from './containers/Signin';
import Signup from './containers/Signup';
import PrivateRoute from './components/HOC/PrivateRoute';
import { useDispatch, useSelector } from 'react-redux';
import { isUserLoggedIn } from './actions';
import Products from './containers/Products';
import Orders from './containers/Orders';
import Category from './containers/Category';

function App() {

  // const dispatch = useDispatch();
  // const auth = useSelector(state => state.auth);
  
  // useEffect(() => {
  //   if (!auth.authenticate) {
  //       dispatch(isUserLoggedIn()); 
  //   }
  // }, [])

  return (
    <div className="App">
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/products" exact component={Products} />
          <Route path="/orders" exact component={Orders} />
          <Route path="/category" exact component={Category} />
          <Route path="/signin" component={Signin}/>
          <Route path="/signup" component={Signup}/>
        </Switch>
    </div>
  );
}

export default App;
