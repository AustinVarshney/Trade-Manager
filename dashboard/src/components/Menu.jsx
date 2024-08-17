import React, { useState, useEffect } from 'react'
import "./Menu.css"
import logoImg from "../../src/assets/logo.png"
import { Link, useLocation } from "react-router-dom"
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import PhotoCameraFrontIcon from '@mui/icons-material/PhotoCameraFront';
import TollIcon from '@mui/icons-material/Toll';
import SupportIcon from '@mui/icons-material/Support';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import ExploreIcon from '@mui/icons-material/Explore';
import KeyboardCommandKeyIcon from '@mui/icons-material/KeyboardCommandKey';
import LiveHelpIcon from '@mui/icons-material/LiveHelp';
import LogoutIcon from '@mui/icons-material/Logout';
import axios from 'axios';
import Cookies from 'js-cookie';

const Menu = () => {
  let [user, setUser] = useState("User");

  useEffect(() => {
    const userName = Cookies.get('user');
    if (userName) {
      setUser(userName || "User");
    }
  }, []);


  let location = useLocation();
  let [activeMenu, setActiveMenu] = useState(0);
  let [isDropDownMenu, setIsDropDownMenu] = useState(false);
  let [isSmallDropDownMenu, setIsSmallDropDownMenu] = useState(false);

  let dropDownMenu = () => {
    setIsDropDownMenu(!isDropDownMenu);
  }

  let smallDropDownMenu = () => {
    setIsSmallDropDownMenu(!isSmallDropDownMenu);
  }

  // Update active state based on pathname
  React.useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveMenu(0);
        break;
      case "/orders":
        setActiveMenu(1);
        break;
      case "/holdings":
        setActiveMenu(2);
        break;
      case "/positions":
        setActiveMenu(3);
        break;
      case "/funds":
        setActiveMenu(4);
        break;
      case "/apps":
        setActiveMenu(5);
        break;
      default:
        setActiveMenu(0); // Default to Dashboard
        break;
    }
  }, [location.pathname]);

  const menu = "menu";
  const selectedMenu = "selected-menu";

  // useEffect(() => {
  //   axios.get("http://localhost:8080/").then((res) => {
  //   })
  // }, [])

  return (
    <div className='outerMenuDiv'>
      <div className='innerMenuDiv1'>
        <img src={logoImg} alt="Logo"/>
      </div>
      <div className='innerMenuDiv2'>
        <ul>
          <li><Link to="/" className={activeMenu===0 ? selectedMenu : menu}>Dashboard</Link></li>
          <li><Link to="/orders" className={activeMenu===1 ? selectedMenu : menu}>Orders</Link></li>
          <li><Link to="/holdings" className={activeMenu===2 ? selectedMenu : menu}>Holdings</Link></li>
          <li><Link to="/positions" className={activeMenu===3 ? selectedMenu : menu}>Positions</Link></li>
          <li><Link to="/funds" className={activeMenu===4 ? selectedMenu : menu}>Funds</Link></li>
          <li><Link to="/apps" className={activeMenu===5 ? selectedMenu : menu}>Apps</Link></li>
          <li><Link onClick={dropDownMenu}>
            <div>
              {user.length > 1 ? user[0].toUpperCase()+user[1].toUpperCase() : user[0].toUpperCase()}
            </div>
            <p>USERID</p>
          </Link></li>
        </ul>
        <div className='innerMostMenuDiv1' style={isDropDownMenu ? {} : {display: "none"}}>
          <ul>
            <li><Link><PersonOutlineIcon style={{fontSize: "1.2rem"}}/>My Profile</Link></li>
            <li><Link><PhotoCameraFrontIcon style={{fontSize: "1.2rem"}}/>Console</Link></li>
            <li><Link><TollIcon style={{fontSize: "1.2rem"}}/>Coin</Link></li>
            <li><Link><SupportIcon style={{fontSize: "1.2rem"}}/>Support</Link></li>
            <li><Link><PersonAddAltIcon style={{fontSize: "1.2rem"}}/>Invite Friends</Link></li>
            <li><Link><ExploreIcon style={{fontSize: "1.2rem"}}/>Tour Kite</Link></li>
            <li><Link><KeyboardCommandKeyIcon style={{fontSize: "1.2rem"}}/>Keyboard shortcuts</Link></li>
            <li><Link><LiveHelpIcon style={{fontSize: "1.2rem"}}/>User manual</Link></li>
            <li><Link to="http://localhost:8080/logout"><LogoutIcon style={{fontSize: "1.2rem"}}/>Logout</Link></li>
          </ul>
        </div>
      </div>
      <div className='innerMenuDiv3'>
          <ul>
            <li><Link onClick={smallDropDownMenu}>
              <div>{user.length > 1 ? user[0].toUpperCase()+user[1].toUpperCase() : user[0].toUpperCase()}</div>
              <p>USERID</p>
            </Link></li>
          </ul>
          <div className='innerMostMenuDiv2' style={isSmallDropDownMenu ? {} : {display: "none"}}>
            <div><Link to="/" style={activeMenu===0 ? {color: "#FF5722"} : {color: "#444444"}}>Dashboard</Link></div>
            <div><Link to="/orders" style={activeMenu===1 ? {color: "#FF5722"} : {color: "#444444"}}>Orders</Link></div>
            <div><Link to="/holdings" style={activeMenu===2 ? {color: "#FF5722"} : {color: "#444444"}}>Holdings</Link></div>
            <div><Link to="/positions" style={activeMenu===3 ? {color: "#FF5722"} : {color: "#444444"}}>Positions</Link></div>
            <div><Link to="/funds" style={activeMenu===4 ? {color: "#FF5722"} : {color: "#444444"}}>Funds</Link></div>
            <div><Link to="/apps" style={activeMenu===5 ? {color: "#FF5722"} : {color: "#444444"}}>Apps</Link></div>
            <ul>
              <li><Link><PersonOutlineIcon style={{fontSize: "1.2rem"}}/>My Profile</Link></li>
              <li><Link><PhotoCameraFrontIcon style={{fontSize: "1.2rem"}}/>Console</Link></li>
              <li><Link><TollIcon style={{fontSize: "1.2rem"}}/>Coin</Link></li>
              <li><Link><SupportIcon style={{fontSize: "1.2rem"}}/>Support</Link></li>
              <li><Link><PersonAddAltIcon style={{fontSize: "1.2rem"}}/>Invite Friends</Link></li>
              <li><Link><ExploreIcon style={{fontSize: "1.2rem"}}/>Tour Kite</Link></li>
              <li><Link><KeyboardCommandKeyIcon style={{fontSize: "1.2rem"}}/>Keyboard shortcuts</Link></li>
              <li><Link><LiveHelpIcon style={{fontSize: "1.2rem"}}/>User manual</Link></li>
              <li><Link to="http://localhost:8080/logout"><LogoutIcon style={{fontSize: "1.2rem"}}/>Logout</Link></li>
            </ul>
          </div>
        </div>
    </div>
  )
}

export default Menu