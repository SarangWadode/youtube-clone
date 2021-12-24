import React from 'react'
import './sidebar.css'
import HomeIcon from '@mui/icons-material/Home';
import SidebarRows from './SidebarRows';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import RestoreIcon from '@mui/icons-material/Restore';

export default function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebar-item'>
                <SidebarRows Icon={HomeIcon} title='Home' />
                <SidebarRows Icon={ExploreIcon} title='Explore' />
                <SidebarRows Icon={SubscriptionsIcon} title='Subscriptions' />
                <SidebarRows Icon={VideoLibraryIcon} title='Library' />
                <SidebarRows Icon={RestoreIcon} title='History' />
            </div>
        </div>
    )
}
