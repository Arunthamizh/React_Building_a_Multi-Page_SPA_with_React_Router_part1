import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import classes from './MainHeader.module.css'
const MainHeader = () => {
  return (
    <header className={classes.header}>
        <nav>
            <ul>
                <li>
                    {/* <a href='#'>Home</a> // !this will not prevent the browser default action so page refresh */} 
                    {/* <Link to='/welcome'>Welcome</Link> // ! Link will prevent the browser default action */}
                    {/* // ! NavLink will show the active Link by adding the class on it */}
                    <NavLink to='/welcome' className={(navData) => navData.isActive ? classes.active : ''} >Welcome</NavLink> 
                </li>
                <li>
                    <NavLink to='/products' className={(navData) => navData.isActive ? classes.active : ''}>Products</NavLink>
                </li>
            </ul>
        </nav>
    </header>
  )
}


export default MainHeader;