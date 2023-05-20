import React from 'react'
import "./topbar.css";
import { Language, NotificationsNone, Settings } from '@mui/icons-material';

export default function Topbar() {
    return (
        <div className='topbar'>
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">RamAdmin</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                        <NotificationsNone />
                        <span className="topIconBadge">2</span>
                    </div>
                    <div className="topbarIconContainer">
                        <Language />
                    </div>
                    <div className="topbarIconContainer">
                        <Settings />
                    </div>
                    <img src='https://cdn-icons-png.flaticon.com/512/6840/6840478.png'
                        alt=''
                        className='topAvatar' />
                </div>
            </div>
        </div>
    )
}
