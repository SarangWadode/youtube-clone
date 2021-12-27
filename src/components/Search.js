import React from 'react'
import { TuneOutlined } from '@mui/icons-material'
import './search.css'
import Video from './Video'

export default function Search() {
    return (
        <div className='search'>
            <hr />
            <TuneOutlined />
            <h3>Filters</h3>
            <hr />
            <div className="profile">
                <div className="avatar"></div>
                <div className="details"></div>
            </div>
            <h4>Latest from Programer Sarang</h4>

            <Video 
            thumbnail="https://i.ytimg.com/vi/tollGa3S0o8/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCIgXRBKBPnbz2Ebo21VfJA5s-CEg"
            title="Taylor Swift-All Too Well: The Short Film"
            views="55M views"
            timestamp="1 month ago"
            logo="https://yt3.ggpht.com/MqKm9xyjonzkICKA78ir0AM-WUR47ntkBeJlgHeIk_rUnPuukiWtzOEmU7UjO8cFoPrBatCh3As=s88-c-k-c0x00ffffff-no-rj"
            channel="Taylor Swift"
            details="Written & Directed by: Taylor Swift Starring: Sadie Sink, Dylan O'Brien & Taylor Swift Red (Taylor's Version) available"
            />

            {/* <Video 
            thumbnail=""
            title=""
            views=""
            timestamp=""
            channel=""
            details=""
            /> */}
        </div>
    )
}
