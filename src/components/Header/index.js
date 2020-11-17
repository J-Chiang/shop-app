import React from 'react';
import './style.css';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import InputBase from '@material-ui/core/InputBase';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { NavLink, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions';

const Header = (props) => {  

  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const logout = () => {
    dispatch(signout());
  }
  
  const renderLoggedInLinks = () => {
    return (
      <ul>
        <li><NavLink to={'/'}>Home</NavLink></li>
        <li><NavLink to={'/products'}>Products</NavLink></li>
        <li><NavLink to={'/orders'}>Orders</NavLink></li>
        <li><NavLink to={'/category'}>Category</NavLink></li>
        <li><Button onClick={logout}>Signout</Button></li>
      </ul>
     
    )
  }

  const renderNonLoggedInLinks = () => {
    return (
      <ul>
        <li><NavLink to="signin">Signin</NavLink></li>
        <li><NavLink to="signup">Signup</NavLink></li>
      </ul>
    );
  }

  return (
    <div className="header">
      <AppBar position="static">
        <Toolbar>
          <Link to="/" className="header__home">
            <Typography variant="h6">
              Ecommerce
            </Typography>
          </Link>
          {/* <Button color="inherit">Login</Button> */}
          {
            auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()
          }
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Header
