import React from 'react';
import Avatar from "@material-ui/core/Avatar";

export default function VideoCard({image,title,logo,views,time,channel}) {
    return (
        <div className='videocard'>
            <img className='video-thumbnail' src={image} alt="video thumbnail" />
            <div className="video-details">
                <Avatar 
                    className='videoCard_avatar'
                    alt='logo'
                    src={logo}
                />
                <div className='text-details'>
                    <h4>{title}</h4>
                    <div className="channel-name">{channel}</div>
                    <p>{views} views</p>
                    <p>{time}</p>
                </div>
            </div>
        </div>
    )
}
