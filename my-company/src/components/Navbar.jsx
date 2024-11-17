import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <nav style={{ 
            backgroundColor: '#f4f4f4', 
            display: 'flex', 
            justifyContent: 'space-around', 
            padding: '10px' 
        }}>
            <Link to="/" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Home</Link>
            <Link to="/about" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>About</Link>
            <Link to="/services" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Services</Link>
            <Link to="/contact" style={{ margin: '0 10px', textDecoration: 'none', color: 'black' }}>Contact</Link>
        </nav>
    );
}

export default Navbar;