import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import HomeIcon from '@material-ui/icons/Home';
import ChatIcon from '@material-ui/icons/Chat';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';
import NotificationsIcon from '@material-ui/icons/Notifications';
import LinkedinLogo from './assets/linkedin.png';
import UserLogo from './assets/user.png';
import HeaderOption from './HeaderOption';
import './HeaderOption.css';


const Header = () => {
  return (
    <div className="header">

        <div className="header__left">
            <img src={LinkedinLogo} alt="linkedin logo" />

            <div className="header__search">
                <SearchIcon />
                <input type="text" />
            </div>
        </div>

        <div className="header__right">
          <HeaderOption Icon={HomeIcon} title="Home"/>
          <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
          <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
          <HeaderOption Icon={ChatIcon} title="Messaging" />
          <HeaderOption Icon={NotificationsIcon} title="Notifications" />
          <HeaderOption avatar={UserLogo} title="User1" />

        </div>

    </div>
  )
}

export default Header