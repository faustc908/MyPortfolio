import React from 'react'
import "./Navbar.css"
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <div className="navBar">
            <h1 className='left'>Colin Faust</h1>
            <Link to="/project" className="projectLink1">Projects</Link>
            <a className="projectLink2" href="https://colin-faust-portfolio.vercel.app/">Home</a>
        </div>
    )
}


export default Navbar;