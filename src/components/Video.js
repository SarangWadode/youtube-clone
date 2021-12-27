import React from 'react'
import { Avatar } from '@mui/material'

export default function Video({thumbnail, title, views, timestamp, channel, logo,details}) {
    return (
        <div className='channel-row'>
            <div className="thumbnail">
                <img src={thumbnail} alt="image" />
            </div>
            <div className="information">
                <h3>{title}</h3>
                <p>{views} . {timestamp}</p>
                <div>
                    <Avatar
                    src={logo}
                    alt="logo"
                    className='channel-logo'
                    />
                <h4>{channel}</h4>
                </div>
                <p>{details}</p>
            </div>
        </div>
    )
}
