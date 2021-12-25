import React from 'react'

export default function SidebarRows({title,Icon,selected}) {
    return (
        <div className={`row ${selected ? 'selected':''}`} >
            <Icon className='sidebar-icons' />
            <h2 className="sidebar-title">{title}</h2>
        </div>
    )
}
