import React from 'react';
import { Link } from 'react-router-dom';


function Nav(){
    return(
        <nav className='navbar bg-body-tertiary d-flex align-items-center '>
            <div className='container'>
            <img className="logo" src={process.env.PUBLIC_URL + '/elements/SO.svg'} alt="" />
                <ul>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/about">About</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/projects">Projects</Link>
                    </li>
                    <li className='nav-item'>
                        <Link className="nav-link" to="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            
        </nav>
    )
    
    
}

export default Nav