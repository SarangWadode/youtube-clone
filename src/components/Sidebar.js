import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SidebarRows from './SidebarRows';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';
import PersonalVideoIcon from '@mui/icons-material/PersonalVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <SidebarRows selected Icon={HomeIcon} title='Home' />
            <SidebarRows Icon={ExploreIcon} title='Explore' />
            <SidebarRows Icon={SubscriptionsIcon} title='Subscription' />
            <hr />
            <SidebarRows Icon={VideoLibraryIcon} title='Library' />
            <SidebarRows Icon={RestoreIcon} title='History' />
            <SidebarRows Icon={PersonalVideoIcon} title='Your videos' />
            <SidebarRows Icon={WatchLaterIcon} title='Watch later' />
            <SidebarRows Icon={ThumbUpIcon} title='Liked video' />
            <SidebarRows Icon={KeyboardArrowDownIcon} title='Show more' />
            <hr />
        </div>
    )
}
