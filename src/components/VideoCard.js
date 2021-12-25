import React from 'react'

export default function VideoCard({image,title,logo,views,time,channel}) {
    return (
        <div className='videocard'>
            <img className='video-thumbnail' src={image} alt="video thumbnail" />
            <div className="video-details">
                <div><img src={logo} alt="logo" className="channel-logo" /></div>
                <div>
                    <div className="video-title">{title}</div>
                    <div className="channel-name">{channel}</div>
                    <div className="views">{views}</div>
                    <div className="upload-time">{time}</div>
                </div>
            </div>
        </div>
    )
}
