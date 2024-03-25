import React from 'react'
import { Link } from "react-router-dom";
import {BsGrid1X2Fill, BsYelp, BsDatabaseFillGear, BsCodeSlash, BsCloudFog2Fill, BsFillPeopleFill, BsFillGearFill} from 'react-icons/bs';


function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id='sidebar' className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className="sidebar-title">
            <div className="sidebar-brand">
                LEARNABLE 23 COHORT
            </div>
            <span className='icon close-header' onClick={OpenSidebar}>X</span>
        </div>
        <ul className="sidebar-list">
            <Link to = '/' style={{textDecoration: 'none', color: '#9e9ea4'}} >
                <li className='sidebar-list-item'>                
                    <BsGrid1X2Fill className='icon'/> Dashboard                
                </li>
            </Link>
            <Link to = '/product' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsYelp className='icon'/> Product Design                
                </li>
            </Link>
            <Link to = '/frontend' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsCodeSlash className='icon'/> Frontend                
                </li>
            </Link>
            <Link to = '/backend' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsDatabaseFillGear className='icon'/> Backend                
                </li>
            </Link>
            <Link to = '/web3' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsCloudFog2Fill className='icon'/> Web3                
                </li>
            </Link>
            <Link to = '/mentors' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsFillPeopleFill className='icon'/> Group Mentors                
                </li>
            </Link>           
            <Link to = '#' style={{textDecoration: 'none', color: '#9e9ea4'}}>
                <li className='sidebar-list-item' >                
                    <BsFillGearFill className='icon'/> Settings                
                </li>
            </Link>             
        </ul>
    </aside>
  )
}

export default Sidebar