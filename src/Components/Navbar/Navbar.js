import React from 'react';
import '../Navbar/Navbar.css';
import {Link} from 'react-scroll';

//UI Component
const Navbar = (props) => {
    return(
        <div class="navbar-fixed Navbar">
            <nav className = "Nav">
                <div class="nav-wrapper">
                    <a href="#!" class="brand-logo spaceo">Spaceo</a>
                    <ul class="right hide-on-med-and-down nav-list">
                        <li><Link activeClass = 'active' to = "Background" smooth = {true}>Home</Link></li>
                        <li><Link activeClass = 'active' to = "Gallery" smooth = {true}>Gallery</Link></li>
                        <li><Link activeClass = 'active' to = "Blog" smooth = {true}>Blog</Link></li>
                        <li><Link activeClass = 'active' to = "Developer" smooth = {true}>Developers</Link></li>
                        <li><Link activeClass = 'active' to = "Footer" smooth = {true}>Contact</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;