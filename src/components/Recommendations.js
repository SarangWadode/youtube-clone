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

                <VideoCard image='	https://i.ytimg.com/vi/2RukVfByHVM/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLBG9hXlso6JaHaYMXJu8r7TaCsRPA' 
                title="I Knew You Were Trouble" 
                logo='https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s88-c-k-c0x00ffffff-no-rj' 
                channel='Taylor Swift' 
                views='486M' 
                time='9 years ago' />

                <VideoCard image='https://i.ytimg.com/vi/ApXoWvfEYVU/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDW0W6feL7D578Dl9oGNgjIwKSN6A' 
                title='Post Malone, Swae Lee(Spiderman Into The Spiderverse)' 
                logo='	https://yt3.ggpht.com/zkb1deeZLxBYlnlPUVB-Lmew1thE…1mYg6WcfbWeFCmpcCWYGgA=s176-c-k-c0x00ffffff-no-rj' 
                channel='Post Malone' 
                views='1.6B' 
                time='3 years ago' />

                <VideoCard image='	https://i.ytimg.com/vi/dISNgvVpWlo/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLB045PkbqypSIT0szajsB7oXz1hIQ' 
                title='BlackPink (Whistle)' 
                logo='	https://yt3.ggpht.com/ytc/AKedOLS48A09N2xyM8i9JeIfYCWsd-13csflXwYa8XAmoA=s88-c-k-c0x00ffffff-no-rj' 
                channel='BlackPink' 
                views='733M' 
                time='5 years ago' />

                <VideoCard image='	https://i.ytimg.com/vi/74yb9E3WY1I/hqdefault.jpg?s…EIYAXABwAEG&rs=AOn4CLDLOb5AIcYJXdfwZY2q2kEsYDqnQA' 
                title='Ed Sheeran - Beautiful People(feat. khalid)' 
                logo='https://yt3.ggpht.com/SwhYJnPlm1Oam-jzz4LiNeHqrTR2…2NFimYZcMvzsmUw7civo=s88-c-k-c0x00ffffff-no-nd-rj' 
                channel='Ed Sheeran' 
                views='82M' 
                time='Jun 28, 2019' />

                <VideoCard image='	https://i.ytimg.com/vi/47NRaBVxgVM/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLCC4lwAoyBxY871effgRHiOaOUcMg' 
                title='Internet History, Technology, and Security - Full Course from Dr. Chuck' 
                logo='https://yt3.ggpht.com/ytc/AKedOLTtJvQ1Vfew91vemeLaLdhjOwGx3tTBLlreK_QUyA=s68-c-k-c0x00ffffff-no-rj' 
                channel='freeCodeCamp' 
                views='80k' 
                time='4 days ago' />

                <VideoCard image='https://i.ytimg.com/vi/e-ORhEE9VVg/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLATcM-CoX_evHrM_CbwFCXhf71eeg' 
                title='Taylor Swift - Blank Space' 
                logo='https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s88-c-k-c0x00ffffff-no-rj' 
                channel='Taylor Swift' 
                views='2.9B' 
                time='7 years ago' />

                <VideoCard image='	https://i.ytimg.com/vi/aC9HkZW2hZk/hqdefault.jpg?s…AFwAcABBg==&rs=AOn4CLC5n96R0YRgC0_qQF9VtwDJZIToEw' 
                title='' 
                logo='https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s88-c-k-c0x00ffffff-no-rj' 
                channel='Taylor Swift' 
                views='17.8M' 
                time='Aug 23, 2019' />
            </div>
        </div>
    )
}
