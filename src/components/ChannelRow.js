import React from 'react'
import { Avatar } from '@mui/material'
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import './channelrow.css'

export default function ChannelRow({logo,channel,subs,videos,details}) {
    return (
        <div className="profile">
            <div className="avatar">
                    <Avatar src={logo} alt="channel logo" />
            </div>
            <div className="details">
                <div>
                    <h3>{channel}</h3>
                    <p>{subs} . {videos}</p>
                    <p>{details}</p>
                </div>
                <button className="subscribe">SUBSCRIBE</button>
                <NotificationsNoneRoundedIcon />
            </div>
        </div>
    )
}
