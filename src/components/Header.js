import React, {useState} from 'react'
import './header.css'
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Avatar from '@material-ui/core/Avatar';
import youtube from '../youtube-logo.jpg';
import unknown from '../unknown.jpg';
import { Link } from 'react-router-dom';
import { Tooltip } from '@mui/material';

function Header() {
    const [inputSearch,setInput] = useState('');
    return (
        <div className="navbar">
            <div className="nav_left">
                <MenuIcon />
                <Link to='/'>
                    <img className="image" src={youtube} alt="yputube-logo" />
                </Link>
            </div>
            <div className="nav_center">
                <input 
                placeholder='Search' 
                type="text"
                value={inputSearch} 
                onChange={e => setInput(e.target.value)}
                />
                
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon />
                </Link>
            </div>
            <div className="nav_right">
                <Tooltip title="Create">
                    <VideoCallIcon className='icons' />
                </Tooltip>
                <Tooltip title="Apps">
                    <AppsIcon className='icons' />
                </Tooltip>
                <Tooltip title="Notifications">
                    <NotificationsIcon className='icons' />
                </Tooltip>
                <Tooltip title="Profile">
                    <Avatar alt="my-avatar" className='icons' src={unknown} />
                </Tooltip>
            </div>
        </div>
    )
}

export default Header
