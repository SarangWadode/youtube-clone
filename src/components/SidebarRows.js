import React from 'react'

export default function SidebarRows({title,Icon}) {
    return (
        <div className='row'>
            <Icon className='sidebar-icons' />
            {title}
        </div>
    )
}
