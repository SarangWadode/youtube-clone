import React from 'react'
import './recommend.css'
import VideoCard from './VideoCard'

export default function Recommendations() {
    return (
        <div className='recommended'>
            <h2>Recommended</h2>
            <div className="recommended_videos">
                <VideoCard image='https://i.ytimg.com/vi/uHz2ng84hFE/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLD85le3oyGC2pu5-qjnpddIMBW6Zw' 
                title='Aasman Ko Chukar Dekha I Return Of Hanuman (Animation)' 
                logo='https://yt3.ggpht.com/ytc/AKedOLSELQVAPnW25XZGTMpNxCRswv9QC5wi228fMt2a-SI=s68-c-k-c0x00ffffff-no-rj' 
                channel='T-Series Bhakti Sagar' 
                views='23M' 
                time='9 years ago' />
                {/* <VideoCard image='' title='' logo='' channel='' views='' time='' /> */}
            </div>
        </div>
    )
}
