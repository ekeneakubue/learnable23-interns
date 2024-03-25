import React from 'react';
import 
    {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
    from 'react-icons/bs';


function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className="menu-icon">
            <BsJustify className="icon" onClick={OpenSidebar}/>
        </div>
        <div className="header-left">
            <BsSearch className="icon" />
        </div>
        <div className="header-right">
            <div className="user__name">Tappi</div>
            <img src='images/p10.jpg' className='user__icon'/>
        </div>
    </header>
  )
}

export default Header