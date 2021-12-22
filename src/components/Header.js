import React from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import youtube from '../youtube-logo.jpg';
import unknown from '../unknown.jpg';

function Header() {
    return (
        <div className="navbar">
            <div className="nav_left">
                <MenuIcon />
                <img className="image" src={youtube} alt="yputube-logo" />
            </div>
            <div className="nav_center">
                <input type="text" />
                <SearchIcon />
            </div>
            <div className="nav_right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <Avatar alt="my-avatar" src={unknown} />
            </div>
        </div>
    )
}

export default Header
